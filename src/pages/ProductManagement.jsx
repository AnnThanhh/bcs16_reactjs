import React, { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import axios from "axios";
const ProductManagement = () => {
  const [arrProduct, setArrProduct] = useState([]);
  const [search, setSearch] = useSearchParams();
  const getAllProductAPI = async () => {
    const res = await axios.get(
      "https://apistore.cybersoft.edu.vn/api/Product"
    );
    const data = res.data.content;
    setArrProduct(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInput = (e) => {
    setSearch({
      k: e.target.value,
    });
  };

  useEffect(() => {
    getAllProductAPI();
  }, []);
  
  return (
    <div className="mt-5">
      <h2>Dashboard</h2>
      {/* form lấy bên file search.jsx lấy cả div  */}
      <div className="w-full max-w-md mx-auto my-6">
        <form onSubmit={handleSubmit}>
          <h3>Search product</h3>
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
              onInput={handleInput}
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black">
              🔍
            </button>
          </div>
        </form>
      </div>
      <div>
        {/* lên flowbite lấy button default */}
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          <NavLink to={"/admin/add-product"}>Add product</NavLink>
        </button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {arrProduct.map((item) => {
              return (
                <tr key={item.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.name}
                  </th>
                  <td className="px-6 py-4">{item.price}</td>
                  <td className="px-6 py-4">
                    <img src={item.image} className="w-30 h-30" />
                  </td>
                  <td className="px-6 py-4">{item.quantity}</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2"
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="font-medium text-red-600 dark:text-blue-500 hover:underline mr-2"
                    >
                      Delete
                    </a>
                    <a
                      href="#"
                      className="font-medium text-green-600 dark:text-blue-500 hover:underline"
                    >
                      View Details
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;
