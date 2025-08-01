import { createSlice } from "@reduxjs/toolkit";
import { TOKEN, USER_LOGIN } from "../../utils/interceptor";
import axios from "axios";
import { deleteCookie, setCookie } from "../../utils/cookie";
import { http } from "../../utils/interceptor";
const getUserLoginDefault = () => {
  if (localStorage.getItem(USER_LOGIN)) {
    return JSON.parse(localStorage.getItem(USER_LOGIN));
  }
  return null;
};
const initialState = {
  userRegister: {
    id: 0,
    email: "",
    password: "",
    name: "",
    gender: true,
    phone: "",
  },

  userLogin: getUserLoginDefault(),
  profile: {},
};

const userReducer = createSlice({
  name: "userReducer", //tên reducer
  initialState, // định nghĩa state default
  reducers: {
    handleChangeInputAction: (state, action) => {
      const { id, value } = action.payload;
      state.userRegister[id] = value;
    },
    setUserLoginAction: (state, action) => {
      state.userLogin = action.payload;
    },
    removeUserLoginAction: (state, action) => {
      (state.userLogin = null), localStorage.removeItem(USER_LOGIN);
      localStorage.removeItem(TOKEN);
      deleteCookie(TOKEN);
    },
    setProfileAction: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const {
  handleChangeInputAction,
  setUserLoginAction,
  removeUserLoginAction,
  setProfileAction,
} = userReducer.actions;

export default userReducer.reducer;

//--------action thunk-------
export const loginActionThunk = (userLoginModel) => {
  return async (dispatch) => {
    const res = await axios.post(
      "https://apistore.cybersoft.edu.vn/api/Users/signin",
      userLoginModel
    );
    console.log(res.data.content);
    //lưu localstorage
    //token
    const token = res.data.content.accessToken;
    localStorage.setItem(TOKEN, token);
    console.log(TOKEN);
    //userLogin dp là 1 {} -> convert stringify
    const userLogin = JSON.stringify(res.data.content);
    localStorage.setItem(USER_LOGIN, userLogin);
    setCookie(TOKEN, token, 7);

    //đưa dữ liệu lên store
    dispatch(setUserLoginAction(res.data.content));
  };
};

export const getProfileActionThunk = async (dispatch) => {
  try {
    //gọi api
    const res = await http.post("/api/Users/getProfile");
    dispatch(setProfileAction(res.data.content));
  } catch (error) {
    //thất bại thì sẽ điều hướng về trang login
    console.log(error);
  }
};
