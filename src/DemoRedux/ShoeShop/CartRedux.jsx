import { Table } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeQuantityCartAction,
  deleteProductionAction,
} from "../../redux/reducers/cartReducer";

const CartRedux = () => {
  const cartStore = useSelector((state) => state.cartReducer.cartDefault);
  const dispatch = useDispatch();
  console.log(cartStore);
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
              onClick={() => {
                const payload = {
                  id: record.id,
                  quantity: 1,
                };
                const action = changeQuantityCartAction(payload);
                dispatch(action);
              }}
            >
              +
            </button>
            {value}
            <button
              type="button"
              class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ml-2"
              onClick={() => {
                const payload = {
                  id: record.id,
                  quantity: -1,
                };
                const action = changeQuantityCartAction(payload);
                dispatch(action);
              }}
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
              onClick={() => {
                //tạo action
                const action = deleteProductionAction(record.id);
                console.log(action);
                //đưa action lên store
                dispatch(action);
              }}
            >
              Delete
            </button>
          </>
        );
      },
    },
  ];
  return (
    <div>
      <h1>Cart</h1>
      <Table rowKey={"id"} dataSource={cartStore} columns={columns} />
    </div>
  );
};

export default CartRedux;
