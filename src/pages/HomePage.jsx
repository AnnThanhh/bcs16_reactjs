import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllProductApiActionThunk } from "../redux/reducers/productReducer";

const HomePage = () => {
  //lấy arrProduct từ redux
  const { arrProduct } = useSelector((state) => state.productReducer);

  //hook dispatch
  const dispatch = useDispatch();

  const getAllProduct = () => {
    /**
     * actionPayload: (type, payload)
     * actionThunk: hàm -> dispatch 1 hàm -> tự định nghĩa nội dung để có dự liệu lên store
     */
    const actionThunk = getAllProductApiActionThunk();
    dispatch(actionThunk);
  };

  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <div>
      <h1 className="text-center">ShoePage</h1>
      <div className="flex flex-wrap">
        {arrProduct.map((item) => {
          return (
            <div
              key={item.id}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <img className="rounded-t-lg" src={item.image} alt />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Tên giày: {item.name}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  giá bán: {item.price}
                </p>

                <NavLink
                  to={`/user/detail/${item.id}`}
                  className="font-medium text-green-600 dark:text-blue-500 hover:underline"
                >
                  View Details
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
