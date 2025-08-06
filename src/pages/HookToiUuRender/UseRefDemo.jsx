import React, { useRef, useState } from "react";
import ContentChild from "./ContentChild";

const UseRefDemo = () => {
  /**
   * useState là dùng để lưu giá trị thay đổi và re-render lại giao diện khi có giá trị mới
   * useRef là dùng để lưu giá trị mới nhưng không re-render lại giao diện khi có giá trị mới
   * -> sử dụng khi đối với các giá trị thay đổi mà không cần hiển thị lên giao diện (thường được sử dụng trong các input form mà không có validation ví dụ: form comment, form post bài viết)
   */
  const [state, setState] = useState();
  const [like, setLike] = useState({ number: 1 });
  const valueInputRef = useRef("");
  console.log(valueInputRef);
  console.log("component render");
  return (
    <div>
      <h3>useRef Demo</h3>
      <ContentChild likeProps={like} />
      <h3>State: {state}</h3>
      <input
        type="text"
        className="border border-gray-300 p-2 rounded-lg"
        onChange={(e) => {
          // setState(e.target.value);
          valueInputRef.current = e.target.value;
        }}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        onClick={() => {
          let newLike = { ...like };
          newLike.number += 1;
          setLike(newLike);
        }}
      >
        <i className="fa fa-thumbs-up"></i>
        {like.number} like
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        onClick={() => {
          console.log("valueInputRef", valueInputRef.current);
          
        }}
      >
        submit
      </button>
    </div>
  );
};

export default UseRefDemo;
