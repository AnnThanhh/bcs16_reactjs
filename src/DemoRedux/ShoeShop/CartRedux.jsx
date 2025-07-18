import { Table } from "antd";
import React from "react";
import { useSelector } from "react-redux";
const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Image",
    dataIndex: "image",
    render: (value, record) => {
      return <img src={record.image} width={50} alt="" />;
    },
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Quantity",
    dataIndex: "quantityCart",
    render: (value, record) => {
      return (
        <>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mr-2"
          >
            +
          </button>
          {value}
          <button
            type="button"
            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ml-2"
          >
            -
          </button>
        </>
      );
    },
  },
  {
    title: "Price",
    dataIndex: "price",
  },
  {
    title: "Total",
    dataIndex: "total",
    render: (value, record) => {
      return (record.price * record.quantity).toLocaleString();
    },
  },
  {
    title: "Action",
    dataIndex: "action",
    render: (value, record) => {
      return (
        <>
          <button
            type="button"
            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ml-2"
          >
            Delete
          </button>
        </>
      );
    },
  },
];

const CartRedux = () => {
  const cartStore = useSelector((state) => state.cartReducer.cartDefault);
  console.log(cartStore);
  return (
    <div>
      <h1>Cart</h1>
      <Table rowKey={"id"} dataSource={cartStore} columns={columns} />
    </div>
  );
};

export default CartRedux;
