import React, { useCallback, useState } from "react";
import CommmentComponent from "./CommmentComponent";

const UseCallBackDemo = () => {
  const [like, setLike] = useState(1);
  const renderLike = () => {
    return `bạn đã ấn ${like} like`;
  };
  const callBackRenderLike = useCallback(renderLike, [like]);
  return (
    <div>
      <h3>useCallback Demo</h3>
      <button
        className="bg-blue-500 px-10 py-4"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        {like}like
      </button>
      <CommmentComponent renderLike={callBackRenderLike} />
    </div>
  );
};

export default UseCallBackDemo;
