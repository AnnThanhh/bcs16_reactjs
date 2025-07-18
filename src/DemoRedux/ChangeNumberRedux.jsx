import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ChangeNumberRedux = () => {
  //hook dùng để lấy state từ redux về (redux store)
  const number = useSelector((state) => state.numberReducer);

  //sử dụng hook dispatch để đưa dữ liệu lên redux
  const dispatch = useDispatch();

  const handleChangeState = (quantity) => {
    //để dữ liệu lên store thông qua action
    const action = {
      type: "CHANGE_QUANTITY", //bắt buộc phải có type trong action
      payload: quantity,
    };
    // gửi action lên store thông qua dispatch
    //lưu ý: khi hàm có dispatch thực thi thì tất các hàm reducer để chạy lại 
    dispatch(action);
  };

  return (
    <div className="container mx-auto">
      <h1>number: {number}</h1>
      <button
        className="py-3.5 px-6 bg-green-400 mr-5"
        onClick={() => {
          handleChangeState(1);
        }}
      >
        Increase
      </button>
      <button
        className="py-3.5 px-6 bg-red-400"
        onClick={() => {
          handleChangeState(-1);
        }}
      >
        Decrease
      </button>
    </div>
  );
};

export default ChangeNumberRedux;
