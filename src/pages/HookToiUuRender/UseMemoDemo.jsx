import React, { useMemo, useState } from "react";
import TableCart from "./TableCart";
//useMemo dùng để cache lại giá trị sau mỗi lần render, khi nào dependency thay đổi thì giá trị đó mới tạo mới lại
const UseMemoDemo = () => {
  const [like, setLike] = useState(1);
  const cart = [
    { id: 1, name: "name 1", price: 1000 },
    { id: 2, name: "name 2", price: 1000 },
    { id: 3, name: "name 3", price: 1000 },
    { id: 4, name: "name 4", price: 1000 },
  ];
  const cartMemo = useMemo(() => cart, []);
  return (
    <div>
      <h3>useMemoDemo</h3>
      <button
        className="bg-blue-500 px-10 py-4 rounded-2xl text-white"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        <i className="fa fa-thumbs-up"></i>
        {like}
      </button>

      <TableCart cart={cartMemo} />
    </div>
  );
};

export default UseMemoDemo;
