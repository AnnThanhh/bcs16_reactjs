import axios from "axios";
import { getCookie, setCookie } from "./cookie";
import { useNavigate } from "react-router-dom";
import { createBrowserHistory } from "history";
export const navigateHistory = createBrowserHistory();
//set interceptor: (middleware) cho tất cả request (thông tin gửi đi phía server) và response (thông tin nhận về từ phía server)
const DOMAIN = "https://apistore.cybersoft.edu.vn";
const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCB0ZXN0IiwiSGV0SGFuU3RyaW5nIjoiMTUvMDEvMjAyNiIsIkhldEhhblRpbWUiOiIxNzY4NDM1MjAwMDAwIiwibmJmIjoxNzQwMDcwODAwLCJleHAiOjE3Njg1ODI4MDB9.UpZtRu0Q0g5o4QZjq_R0quQ3NScIjVcGsvLia8o6txA";
export const TOKEN = "accessToken";
export const USER_LOGIN = "userLogin";

function decodeJWT(token) {
  if (!token) return null;

  try {
    const parts = token.split(".");
    if (parts.length !== 3) throw new Error("Invalid JWT");

    const payload = parts[1];
    const decoded = atob(payload.replace(/-/g, "+").replace(/_/g, "/"));
    return JSON.parse(decoded);
  } catch (err) {
    console.error("Failed to decode JWT:", err.message);
    return null;
  }
}

function isTokenExpired(token) {
  const payload = decodeJWT(token); //dữ liệu sau khi phân tích
  if (!payload || !payload.exp) return true; //nếu không decode được hoặc không tồn tại ngày hết hạn -> coi như token đã hết hạn

  const now = Math.floor(Date.now() / 1000); // thời gian hiện tại (giây)
  if (payload.exp && now > payload.exp) {
    return true; //-> token hết hạn
  }
}

export const http = axios.create({
  baseURL: DOMAIN,
  timeout: 3000, //đặt giới hạn thời gian chờ kết quả từ phía serverr
});

//cầu hình phần request
http.interceptors.request.use((req) => {
  req.headers = {
    //giữ lại các api phần chung và các api có header riêng
    ...req.headers,
    // "Authorization": localStorage.getItem(TOKEN)
    Authorization: getCookie(TOKEN),
    tokenCybersoft: TOKEN_CYBERSOFT,
  };
  return req;
});

//cấu hình phần response
http.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const isExpired = isTokenExpired(getCookie(TOKEN));
    if (isExpired) {
      try {
        const res = await axios({
          url: "https://apistore.cybersoft.edu.vn/api/Users/RefeshToken",
          method: "POST",
          headers: {
            Authorization: getCookie(TOKEN),
          },
        });
        //nếu thành công thì lưu token mới
        localStorage.setItem(TOKEN, res.data.content.accessToken);
        setCookie(TOKEN, res.data.content.accessToken, 7);
      } catch (error) {
        //nếu mà refresh thất bại thì yêu cầu đăng nhập lại
        navigateHistory("/login");
      }
    }
    switch (err?.response.status) {
      case 400:
        {
          //chuyển hướng trang khi sai tham số
          alert("sai tham số");
          //điều hướng trang
          // window.location.href("/")
          navigateHistory.push("/");
        }
        break;

      case 401:
        //th2: token không hợp lệ -> đăng nhập
        navigateHistory("/login");
        break;

      case 403:
        alert("Bạn k có quyền truy cập")
        navigateHistory("/")
        break;

      case 404:
        {
          alert("Đường dẫn không tồn tại");
          navigateHistory("/");
        }
        break;
    }
    return Promise.reject(err);
  }
);

//status code phổ biến
/**
 * 200: thành công
 * 201: dữ liệu đã được khởi tạo thành công
 * 204: thành công nhưng k có dữ liệu
 *
 * 400: bad request - đường dẫn không hợp lệ
 * 404: not found - không tìm thấy dữ liệu
 * 401: unthorized - lỗi không có quyền truy cập vào api đó
 * 403: forbidden - không có đủ quyền truy cập vào hệ thống
 *
 * 500: error in server - lỗi xảy ra ở phía server chưa biết được lý do
 * -> với vai trò của fe với lỗi 500
 *  -> sẽ test lại api với postman hay swagger với dữ liệu mẫu được cung từ cấp từ phía be (be dứng coi lại code). nếu như postman hoặc swagger bị sai thì báo be xử lý
 */
