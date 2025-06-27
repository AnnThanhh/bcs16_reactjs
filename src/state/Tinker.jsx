import React, { useState } from "react";

const Tinker = () => {
  const [srcImg, setSrcImg] = useState("https://i.pravatar.cc?u=10");
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const handleChangeImg = () => {
    //tạo random số
    let random = Math.floor(Math.random() * 100);
    // tạo link hình
    let newSrcImg = `https://i.pravatar.cc?u=${random}`;

    setSrcImg(newSrcImg);
  };
  return (
    <div className="container mx-auto my-10">
      <span>Dislike: {dislike}</span>
      <span>Like: {like} </span>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={srcImg} alt />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <button
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={() => {
              setDislike(dislike + 1);
              handleChangeImg();
            }}
          >
            Dislike
          </button>
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => {
              setLike(like + 1);
              handleChangeImg();
            }}
          >
            Like
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tinker;
