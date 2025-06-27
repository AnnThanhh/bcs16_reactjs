//rafce
import React from "react";

const DemoHandleEvent = () => {
  const handleClick = () => {
    console.log("liked");
  };

  const handlePageIndex = (pageIndex) => {
    console.log(pageIndex);
  };

  return (
    <div className="container mx-auto">
      <h1>Event Handler</h1>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={(e) => {
          alert("clicked");
        }}
      >
        Click Me
      </button>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={handleClick}
      >
        like
      </button>
      {/* phân trang  */}
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => {
          handlePageIndex(1);
        }}
      >
        1
      </button>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => {
          handlePageIndex(2);
        }}
      >
        2
      </button>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => {
          handlePageIndex(3);
        }}
      >
        3
      </button>

      <div
        className="h-60 w-100"
        onMouseEnter={(e) => {
          e.target.style.background = "red";
          e.target.style.color = "aqua";
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "white";
          e.target.style.color = "black";
        }}
      >
        Lorem ipsum dolor sit amet.
      </div>

      <input
        type="text"
        onChange={(e) => {
          let value = e.target.value;
          document.getElementById("tag_p").innerHTML = value;
        }}
      />

      <p id="tag_p"></p>
    </div>
  );
};

export default DemoHandleEvent;
