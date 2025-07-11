import React, { useEffect } from "react";
import { useMatch, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import * as yup from "yup";
const Product = () => {
  const match = useMatch("/admin/product/:id");
  const param = useParams();
  const { id } = param;
  const navigate = useNavigate();
  //   console.log(match);
  //nếu là null, component product sẽ phục vụ cho add product, ngược lại có kết quả trả ra khác null thì sẽ phục vụ edit product
  //kiểm tra điều kiện có phải là đang edit k
  const isEdit = !!match;
  //   console.log(isEdit); // do bản thân qui định, false = add product, true = edit product
  const frmProd = useFormik({
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
      console.log(values);
      if (isEdit) {
        const res = await axios.put(
          "https://apistore.cybersoft.edu.vn/api/Product/updateProduct",
          values
        );
        // console.log(res.data.content);
        alert("Update thành công");
      } else {
        const res = await axios.post(
          "https://apistore.cybersoft.edu.vn/api/Product/addNew",
          values
        );
        alert("Add thành công");
      }
      navigate("/admin/productmanagement");
    },
    validationSchema: yup.object().shape({
      //ở đây sẽ làm valiation cho cả add và edit product
    }),
  });
  const getProductByID = async () => {
    const res = await axios.get(
      `https://apistore.cybersoft.edu.vn/api/Product/getid?id=${id}`
    );
    const data = res.data.content;
    // console.log(data);
    //lấy dữ liệu thành công => đưa lên form tương ứng với từng field được định nghĩa
    // frmProd.setFieldValue("name", res.data.content.name);
    frmProd.setValues(data);
  };

  useEffect(() => {
    if (isEdit) {
      getProductByID();
    }
  }, [isEdit]);
  return (
    <div>
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-md space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">
          {isEdit ? "Update Product" : "Add product"}
        </h2>
        <form className="space-y-4" onSubmit={frmProd.handleSubmit}>
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
              disabled={isEdit}
              className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm bg-gray-100 cursor-not-allowed"
              value={frmProd.values.id}
              onChange={frmProd.handleChange}
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
              value={frmProd.values.name}
              onChange={frmProd.handleChange}
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
              value={frmProd.values.price}
              onChange={frmProd.handleChange}
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
              value={frmProd.values.quantity}
              onChange={frmProd.handleChange}
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
              value={frmProd.values.shortDescription}
              onChange={frmProd.handleChange}
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
              value={frmProd.values.description}
              onChange={frmProd.handleChange}
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
              value={frmProd.values.imgLink}
              onChange={frmProd.handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Preview
            </label>
            <img
              id="previewImage"
              src={frmProd.values.image}
              alt="Image Preview"
              className="mt-2 rounded-lg shadow border w-48 h-auto object-cover"
            />
          </div>
          <div className="pt-4">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 shadow-md transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
