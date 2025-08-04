import { http } from "../utils/interceptor";
export const getAllUserAPI = async () => {
  const res = await http.get("/api/Users/getAll");
  return res.data.content;
};

export const registerUserAPI = async (userRegister) => {
  const res = await http.post("/api/Users/signup", userRegister);
  return res.data.content;
};

export const getAllUserPagingAPI = async (query) => {
  console.log(query);
  const pageSize = query.queryKey[2];
  const pageIndex = query.queryKey[1];
  const res = await http.get(
    `/api/Users/paging?pageIndex=${pageIndex}&pageSize=${pageSize}`
  );
  return res.data.content;
};
