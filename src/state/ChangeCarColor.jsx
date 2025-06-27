import React, { useState } from "react";

const ChangeCarColor = () => {
  const [srcImg, setSrcImg] = useState("./public/img/black-car.jpg");

  const handleChangeColor = (color) => {
    let newSrcImg = `./public/img/${color}-car.jpg`;
    setSrcImg(newSrcImg);
  };

  return (
    <div className="container mx-auto">
      <h1>Change car color</h1>
      <img src={srcImg} alt="" className="w-[50%]" />
      <div>
        <button
          onClick={() => {
            handleChangeColor("steel");
          }}
        >
          Steal car
        </button>
        <button
          onClick={() => {
            handleChangeColor("red");
          }}
        >
          Red car
        </button>
        <button
          onClick={() => {
            handleChangeColor("black");
          }}
        >
          Black car
        </button>
        <button
          onClick={() => {
            handleChangeColor("silver");
          }}
        >
          Silver car
        </button>
      </div>
    </div>
  );
};

export default ChangeCarColor;
