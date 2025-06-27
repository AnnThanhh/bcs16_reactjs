import React from "react";

const Databinding = () => {
  const title = "Hello World";
  const num = 12;
  const img = "https://i.pravatar.cc";
  const prod = {
    id: 1,
    name: "phone",
    price: 1000,
    img: "https://picsum.photos/id/1/200/200",
  };
  //để binding hàm thì giá trị return của hàm phải là string, number, boolean hoặc jsx
  const renderCard = () => {
    return (
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg w-full" src={prod.img} alt />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {prod.name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {prod.price}
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto">
      <h1>DataBinding - interpolation</h1>
      <p>{title}</p>
      <span>{num}</span>
      <img src={img} className="w-[25%]" />

      {renderCard()}
    </div>
  );
};

export default Databinding;
