import React, { useState } from "react";

const DemoLoginForm = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    for (let key in error) {
      if (error[key] !== "") {
        // chỉ cần có 1 lỗi -> messError có thông báo lỗi -> chặn không cho submit
        return;
      }
    }

    for (let key in userLogin) {
      if (userLogin[key].trim() === "") {
        setError({
          ...error,
          [key]: `${key} is required`,
        });
        return;
      }
    }

    console.log("submit", userLogin);
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    let attType = e.target.getAttribute("datatype");
    let messError = "";
    //kiểm tra rỗng
    if (value === "") {
      messError = `${name} is required`;
    } else {
      //xét lỗi nếu như đã nhập liệu với regex
      switch (attType) {
        case "email":
          {
            const emailRegex =
              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(value)) {
              messError = `${name} is invalid`;
            }
          }
          break;
        case "password":
          {
            const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
            if (!passRegex.test(value)) {
              messError = `${name} is invalid`;
            }
          }
          break;
      }
    }

    setError({
      ...error,
      [attType]: messError,
    });

    setUserLogin({
      ...userLogin,
      [name]: value,
    });
  };

  return (
    <div className="container mx-auto">
      <form className="max-w-sm mx-auto mt-5" onSubmit={handleSubmit}>
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
            name="email"
            onChange={handleChangeInput}
            datatype="email"
          />
          {error.email && <p className="text-red-500">{error.email}</p>}
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
            name="password"
            onChange={handleChangeInput}
            datatype="password"
          />
          {error.password && <p className="text-red-500">{error.password}</p>}
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

export default DemoLoginForm;
