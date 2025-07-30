import { configureStore } from "@reduxjs/toolkit";
import { numberReducer } from "./reducers/numberReducer";
import { fSizeReducer } from "./reducers/fSizeReducer";
import cartReducer from "./reducers/cartReducer";
import userReducer from "./reducers/userReducer";
import productReducer from "./reducers/productReducer";
//file chứa toàn bộ state của ứng dụng
export const store = configureStore({
  //nơi định nghĩa toàn bộ state
  reducer: {
    numberReducer: numberReducer,
    fSizeReducer: fSizeReducer,
    cartReducer: cartReducer,
    userReducer: userReducer,
    productReducer: productReducer,
  },
});
//khi mà reducer trả về 1 giá trị mới thì component useSelector dến state đó sẽ render lại, còn các component follow từ các reducer khác nếu không có sự thay đổi thì không render lại => nguyên ly tối ưu hiệu trong redux
/**
 * redux sẽ so sánh state cũ với state mới bằng shallow compare
 * chỉ re-render component nào sử dụng state thay đổi
 * tránh re-render thừa thải
 */
