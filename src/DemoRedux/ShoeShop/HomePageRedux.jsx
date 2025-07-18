import React, { act, useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductAction } from "../../redux/reducers/cartReducer";

const HomePageRedux = () => {
  const [shoePage, setShoePage] = useState([]);
  const dispatch = useDispatch();
  const getAllProductAxios = async () => {
    const res = await axios.get(
      "https://apistore.cybersoft.edu.vn/api/Product"
    );
    setShoePage(res.data.content);
  };

  useEffect(() => {
    getAllProductAxios();
  }, []);
  return (
    <div>
      <h1 className="text-center">ShoePage</h1>
      <NavLink to={"/redux-cart"}>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Cart
        </button>
      </NavLink>
      <div className="flex flex-wrap">
        {shoePage.map((item) => {
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

                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  onClick={() => {
                    // const action = {
                    //   type: "ADD_PRODUCT",
                    //   payload: { ...item, quantityCart: 1 },
                    // };

                    // dispatch(action);
                    // const action = {
                    //   type: "cartReducer/addProductAction",
                    //   payload: { ...item, quantityCart: 1 },
                    // };
                    // console.log(action.payload);
                    const action = addProductAction({ ...item, quantity: 1 });
                    dispatch(action);
                  }}
                >
                  Add Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePageRedux;
