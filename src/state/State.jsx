import React, { useState } from "react";

const State = () => {
  //state = [giá trị ban đầu, cập nhật lại giá trị ban đầu]
  //[state, setState] = useState()
  const [number, setNumber] = useState(10);
  /**
   * state là gì
   * state sẽ là giá trị thay đổi trên giao diện bởi 1 event
   * setState sẽ là hàm cập nhật giá trị state đồng thời sẽ gọi function component chạy lại với giá trị mới
   */
  console.log(number);
  return (
    <div className="container mx-auto">
      <h1>Ví dụ 1: tăng giảm số lượng</h1>
      <button
        className="py-3.5 px-6 bg-amber-400"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
      <span>{number}</span>
      <button
        className="py-3.5 px-6 bg-red-400"
        onClick={() => {
          setNumber(number - 1);
        }}
      >
        -
      </button>
    </div>
  );
};

export default State;
