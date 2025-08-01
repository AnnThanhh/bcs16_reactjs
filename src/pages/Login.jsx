import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setCookie } from "../utils/cookie.jsx";
import { TOKEN, USER_LOGIN } from "../utils/interceptor.jsx";
import { loginActionThunk } from "../redux/reducers/userReducer.jsx";
import { useDispatch } from "react-redux";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const frmLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      // if (values.email === "bcs16@gmail.com" && values.password === "123123") {
      //   navigate("/admin/profile");
      // } else {
      //   navigate("/admin/forgotpass", { replace: true });
      // }
      // console.log(values);
      // const res = await axios.post(
      //   "https://apistore.cybersoft.edu.vn/api/Users/signin",
      //   values
      // );
      // console.log(res.data.content);
      // //lưu localstorage
      // //token
      // const token = res.data.content.accessToken;
      // localStorage.setItem(TOKEN, token);
      // console.log(TOKEN);
      // //userLogin dp là 1 {} -> convert stringify
      // const userLogin = JSON.stringify(res.data.content);
      // localStorage.setItem(USER_LOGIN, userLogin);
      // setCookie(TOKEN, token, 7);
      // navigate("/profile");
      //sử dụng redux thunk
      dispatch(loginActionThunk(values));
      navigate("/profile");
    },
  });
  return (
    <div>
      <form className="max-w-sm mx-auto mt-5" onSubmit={frmLogin.handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
            onChange={frmLogin.handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={frmLogin.handleChange}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
