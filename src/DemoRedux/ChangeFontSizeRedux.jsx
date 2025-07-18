import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ChangeFontSizeRedux = () => {
  const fSize = useSelector((state) => state.fSizeReducer);
  console.log(fSize);
  const dispatch = useDispatch();
  const handleChangeFS = (size) => {
    const action = {
      type: "CHANGE_FONTSIZE",
      payload: size,
    };
    dispatch(action);
  };
  return (
    <div className="container mx-auto">
      <h1>Change font size</h1>
      <p style={{ fontSize: fSize }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas qui
        aspernatur porro debitis voluptate cumque dolorem excepturi! Soluta,
        quam accusantium?
      </p>
      <button
        className="py-3.5 px-6 bg-green-400 mr-5"
        onClick={() => {
          handleChangeFS(1);
        }}
      >
        Increase
      </button>
      <button
        className="py-3.5 px-6 bg-red-400"
        onClick={() => {
          handleChangeFS(-1);
        }}
      >
        Decrease
      </button>
    </div>
  );
};

export default ChangeFontSizeRedux;
