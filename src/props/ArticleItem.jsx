import React from "react";

const ArticleItem = (props) => {//props= {contentArticle:{...}}
  //optional chaining: sử dụng toán tử ? dành cho object
  return (
    <div className="bg-green-400 p-5 my-5">
      <h1>Tiêu đề: {props.contentArticle?.title}</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam maiores
        asperiores adipisci architecto porro dignissimos dolor exercitationem
        debitis, magni expedita.
      </p>
      <div>
        <button
          type="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          1000 views
        </button>
        <button
          type="button"
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Like
        </button>
        <button
          type="button"
          className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
        >
          Dislike
        </button>
      </div>
    </div>
  );
};

export default ArticleItem;
