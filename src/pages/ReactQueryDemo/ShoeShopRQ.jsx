import { useQuery } from "@tanstack/react-query";
import React from "react";
import { NavLink } from "react-router-dom";
import { getAllProductAPI } from "../../API/productAPI";
const ShoeShopRQ = () => {
  const query = useQuery({
    queryKey: ["getAllProduct"], //khóa đinh danh cho query
    queryFn: getAllProductAPI, //hàm thực thi login gọi api
    staleTime: 5000, //xác định dữ liệu có mới hay không
    gcTime: 100000, //xác định thời gian lưu trữ dữ liệu trong bộ nhớ
  });
  //query.data, query.isLoading, query.error
  if (query.isLoading) {
    return <div>Loading....</div>;
  } else if (query.error) {
    return <div>Lỗi: {query.error.message}</div>;
  }
  return (
    <div>
      <h1 className="text-center">ShoePage</h1>
      <div className="flex flex-wrap">
        {query.data?.map((item) => {
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

export default ShoeShopRQ;
