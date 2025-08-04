import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import React from "react";
import { registerUserAPI } from "../../API/userAPI";

const RegisterFormRQ = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["registerUser"],
    mutationFn: registerUserAPI,
    onSuccess: () => {
      //thành công
      //   queryClient.invalidateQueries("getAllUser");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const frmRegister = useFormik({
    initialValues: {
      email: "",
      password: "",
      phone: "",
      name: "",
      gender: true,
      id: 0,
    },
    onSubmit: (values) => {
      console.log(values);
      mutation.mutateAsync(values);
    },
  });
  return (
    <form
      className="bg-white p-8 rounded-xl shadow-md w-full max-w-4xl mx-auto"
      onSubmit={frmRegister.handleSubmit}
    >
      <h2 className="text-2xl font-bold text-center mb-6">Create New User</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={frmRegister.handleChange}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={frmRegister.handleChange}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={frmRegister.handleChange}
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={frmRegister.handleChange}
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gender
            </label>
            <select
              name="gender"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={frmRegister.handleChange}
            >
              <option value="true">Male</option>
              <option value="false">Female</option>
            </select>
          </div>

          {/* ID (read-only) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ID (Auto-generated)
            </label>
            <input
              type="text"
              name="id"
              value="0"
              readOnly
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-500"
              onChange={frmRegister.handleChange}
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-8 text-center">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Create User
        </button>
      </div>
    </form>
  );
};

export default RegisterFormRQ;
