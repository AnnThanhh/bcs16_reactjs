import React, { useEffect, useState } from "react";
import axios from "axios";
const ShoePage = () => {
  const [shoePage, setShoePage] = useState([]);

  //   const getAllProductAPI = async () => {
  //     const res = await fetch("https://apistore.cybersoft.edu.vn/api/Product");
  //     const data = await res.json();
  //     setShoePage(data.content);
  //   };

  const getAllProductAxios = async () => {
    const res = await axios.get(
      "https://apistore.cybersoft.edu.vn/api/Product"
    );
    setShoePage(res.data.content);
  };

  //   useEffect(()=>{
  //     //hàm sẽ chạy sau khi html render hoàn tất và có bất hàm setState được thực hiện
  //     console.log("useEffect");
  //   })

  //   console.log("mounting"); -> là 1 quá trình trong lifecycle của react
  useEffect(() => {
    // getAllProductAPI();
    getAllProductAxios();
    //depencies list: đảm bảo useEffect được chạy duy nhất 1 lần sau khi html render hoàn tất
  },[]);

  return (
    <div className="container mx-auto">
      <h1 className="text-center">ShoePage</h1>
      {/* <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => {
          getAllProductAPI();
        }}
      >
        Gọi API
      </button> */}

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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShoePage;
