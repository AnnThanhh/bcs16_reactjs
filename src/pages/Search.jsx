import React, { useEffect, useState } from "react";
import { useSearchParams, NavLink } from "react-router-dom";
import axios from "axios";
const Search = () => {
  const [tuKhoa, setTuKhoa] = useState("");
  //lưu giá trị người dùng nhập vào và đưa lên thanh url
  const [search, setSearch] = useSearchParams();
  const [arrProduct, setArrProduct] = useState([]);
  //lấy giá trị từ thanh url
  const valueKeyword = search.get("keyword");

  const getProdcutBySearch = async () => {
    if (valueKeyword) {
      const res = await axios.get(
        `https://apistore.cybersoft.edu.vn/api/Product?keyword=${valueKeyword}`
      );
      const data = res.data.content;
      console.log(data);
      setArrProduct(data);
    }
  };

  useEffect(() => {
    getProdcutBySearch();
  }, [valueKeyword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    //đưa giá trị nhập liệu lên thanh url
    setSearch({
      keyword: tuKhoa,
    });
  };
  return (
    <div>
      <div className="w-full max-w-md mx-auto my-6">
        <form onSubmit={handleSubmit}>
          <h3>Search product</h3>
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
              onInput={(e) => {
                setTuKhoa(e.target.value);
              }}
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black">
              🔍
            </button>
          </div>
        </form>
      </div>
      <div className="grid grid-cols-4">
        {arrProduct.map((prod) => {
          return (
            <div>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img className="rounded-t-lg" src={prod.image} alt />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {prod.name}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {prod.price}
                  </p>
                  <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-800 transition duration-200">
                    <NavLink to={`/user/detail/${prod.id}`}>
                      View Details
                    </NavLink>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
