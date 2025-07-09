import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
const DemoFormWithFormik = () => {
  const userRegister = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      name: yup.string().required("Name is required"),
      email: yup
        .string()
        .required("Email is required")
        .email("Email is invalid"),
      phone: yup
        .string()
        .required("Phone is required")
        .matches(
          /^(0|\+84)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-5]|9[0-9])[0-9]{7}$/,
          "Phone is invalid"
        ),
      password: yup
        .string()
        .required("Password is requird")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "Password is invalid"
        ),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="mt-5">
      <main className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Đăng ký tài khoản
        </h2>
        <form
          action="/register"
          method="POST"
          className="space-y-5"
          onSubmit={userRegister.handleSubmit}
        >
          <div>
            <label
              htmlFor="name"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Họ và tên
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={userRegister.handleChange}
            />
            {userRegister.errors.name && (
              <p className="text-red-500">{userRegister.errors.name}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={userRegister.handleChange}
            />
            {userRegister.errors.email && (
              <p className="text-red-500">{userRegister.errors.email}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={userRegister.handleChange}
            />
            {userRegister.errors.phone && (
              <p className="text-red-500">{userRegister.errors.phone}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Mật khẩu
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={userRegister.handleChange}
            />
            {userRegister.errors.password && (
              <p className="text-red-500">{userRegister.errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Đăng ký
          </button>
        </form>
      </main>
    </div>
  );
};

export default DemoFormWithFormik;
