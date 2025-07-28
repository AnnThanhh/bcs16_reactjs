import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleChangeInputAction } from "../redux/reducers/userReducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const userRegister = useSelector((state) => state.userReducer.userRegister);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    const payload = {
      id: e.target.id,
      value: e.target.value,
    };
    const action = handleChangeInputAction(payload);
    dispatch(action);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userRegister);
    try {
      const res = await axios.post(
        "https://apistore.cybersoft.edu.vn/api/Users/signup",
        userRegister
      );

      alert("Đăng ký thành công");

      navigate("/profile")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Đăng ký tài khoản
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Họ và tên
            </label>
            <input
              type="text"
              placeholder="Nguyễn Văn A"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="name"
              value={userRegister.name}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="email"
              value={userRegister.email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mật khẩu
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="password"
              value={userRegister.password}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="phone"
              value={userRegister.phone}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Giới tính
            </label>
            <select
              name="gender"
              value={userRegister.gender}
              onChange={handleChangeInput}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="true">Nam</option>
              <option value="false">Nữ</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Đăng ký
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Đã có tài khoản?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Đăng nhập
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
