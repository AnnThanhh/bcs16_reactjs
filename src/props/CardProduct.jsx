import React from "react";
/**
 * State và props đều chứa các giá trị để binding lên giao diện
 * state chứa các giá trị có thể thay đổi (thông qua phương thức setState)
 * pops thì chứa các giatrị nhận từ component (cha truyền vào) và không thể gán giá trị (readonly)
 */
const CardProduct = (props) => {
  //props={tenSanPham: "abc"}
  //props đại diện cho các giá trị nhận vào từ propsName của component
  //<Component propsNAme=""/>
  console.log(props.tenSanPham);
  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg w-full"
            src="https://picsum.photos/200/200"
            alt
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {props.tenSanPham}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Giá tiền: 1000đ
          </p>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Mua hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
