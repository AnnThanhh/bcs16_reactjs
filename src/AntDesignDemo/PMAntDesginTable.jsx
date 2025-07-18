import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    filters: [
      {
        text: "vans",
        value: "vans",
      },
      {
        text: "nike",
        value: "nike",
      },

      {
        text: "adidas",
        value: "adidas",
      },
    ],
    onFilter: (value, record) => {
      //value là trường lấy từ thuộc tính filter, record là trường dữ liệu
      return record.name.toLowerCase().search(value) !== -1;
    },
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "Price",
    sorter: (a, b) => Number(a.price) - Number(b.price),
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (value, record, index) => {
      return <img src={record.image} alt="" className="w-30 h-30" />;
    },
  },
  {
    title: "action",
    dataIndex: "id",
    // key: "action",
    render: (value, record) => {
      return <NavLink to={`/user/detail/${record.id}`}>View details</NavLink>;
    },
  },
  //set up name, price, quantity, image: render(value, record) => return img
];

const PMAntDesginTable = () => {
  const [arrProduct, setArrProduct] = useState([]);
  const [arrProductFilter, setArrProductFilter] = useState([]);
  const getAllProduct = async () => {
    const res = await axios.get(
      "https://apistore.cybersoft.edu.vn/api/Product"
    );
    const data = res.data.content;
    setArrProduct(data);
    console.log(data);
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  const renderDropdownFilter = () => {
    const dataFilter = [
      {
        text: "vans",
        value: "vans",
      },
      {
        text: "nike",
        value: "nike",
      },
      {
        text: "adidas",
        value: "adidas",
      },
    ];

    const option = dataFilter.map((item, index) => {
      return (
        <option key={index} value={item.value}>
          {item.text}
        </option>
      );
    });

    return (
      <select
        className="my-5 w-full max-w-xs px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none  pr-10"
        onChange={(e) => {
          console.log(e.target.value);
          const tuKhoa = e.target.value;
          const newArrProduct = arrProduct.filter(
            (item) => item.name.toLowerCase().search(tuKhoa) !== -1
          );
          setArrProductFilter(newArrProduct);
        }}
      >
        {option}
      </select>
    );
  };

  return (
    <div>
      {renderDropdownFilter()}
      <input
        type="text"
        placeholder="Nhập nội dung..."
        class="ml-5 w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
        onChange={(e) => {
          const tuKhoa = e.target.value;
          const newArrProduct = arrProduct.filter(
            (item) => item.name.toLowerCase().search(tuKhoa) !== -1
          );

          setArrProductFilter(newArrProduct);
        }}
      />

      <Table
        dataSource={arrProductFilter.length > 0 ? arrProductFilter : arrProduct}
        columns={columns}
        rowKey="id"
      />
    </div>
  );
};

export default PMAntDesginTable;
