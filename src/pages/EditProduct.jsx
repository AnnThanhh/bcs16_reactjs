import axios from "axios";
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const EditProduct = () => {
  const param = useParams(); // lấy được id từ url
  const navigate = useNavigate();
  const { id } = param;
  // console.log(id);
  const frmEdit = useFormik({
    initialValues: {
      id: "",
      name: "",
      price: "",
      description: "",
      shortDescription: "",
      quantity: "",
      imgLink: "",
    },
    onSubmit: async (values) => {
      // console.log(values);
      const res = await axios.put(
        "https://apistore.cybersoft.edu.vn/api/Product/updateProduct",
        values
      );
      // console.log(res.data.content);
      alert("Update thành công");
      navigate("/admin/productmanag")
    },
  });
  const getProductByID = async () => {
    const res = await axios.get(
      `https://apistore.cybersoft.edu.vn/api/Product/getid?id=${id}`
    );
    const data = res.data.content;
    // console.log(data);
    //lấy dữ liệu thành công => đưa lên form tương ứng với từng field được định nghĩa
    // frmEdit.setFieldValue("name", res.data.content.name);
    frmEdit.setValues(data);
  };

  useEffect(() => {
    getProductByID();
  }, []);
  return (
    <div>
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-md space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Update Product</h2>
        <form className="space-y-4" onSubmit={frmEdit.handleSubmit}>
          <div>
            <label
              htmlFor="id"
              className="block text-sm font-medium text-gray-700"
            >
              Product ID
            </label>
            <input
              type="text"
              id="id"
              name="id"
              disabled
              className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm bg-gray-100 cursor-not-allowed"
              value={frmEdit.values.id}
              onChange={frmEdit.handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring focus:ring-blue-200"
              value={frmEdit.values.name}
              onChange={frmEdit.handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring focus:ring-blue-200"
              value={frmEdit.values.price}
              onChange={frmEdit.handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-700"
            >
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring focus:ring-blue-200"
              value={frmEdit.values.quantity}
              onChange={frmEdit.handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="shortDescription"
              className="block text-sm font-medium text-gray-700"
            >
              Short Description
            </label>
            <input
              type="text"
              id="shortDescription"
              name="shortDescription"
              className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring focus:ring-blue-200"
              value={frmEdit.values.shortDescription}
              onChange={frmEdit.handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring focus:ring-blue-200"
              value={frmEdit.values.description}
              onChange={frmEdit.handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="imgLink"
              className="block text-sm font-medium text-gray-700"
            >
              Image URL
            </label>
            <input
              type="text"
              id="imgLink"
              name="imgLink"
              className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring focus:ring-blue-200"
              value={frmEdit.values.imgLink}
              onChange={frmEdit.handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Preview
            </label>
            <img
              id="previewImage"
              src={frmEdit.values.image}
              alt="Image Preview"
              className="mt-2 rounded-lg shadow border w-48 h-auto object-cover"
            />
          </div>
          <div className="pt-4">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 shadow-md transition"
            >
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
