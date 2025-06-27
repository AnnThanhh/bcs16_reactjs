import React, { useState } from "react";
import CardProduct from "./CardProduct";
import ArticleItem from "./ArticleItem";
import DemoJsx from "./DemoJsx";
import ChangeCarColor from "../state/ChangeCarColor";
import PropsChildren from "./PropsChildren";
import DemoCallback from "./DemoCallback";

const DemoProps = () => {
  const data = {
    title: "ABC",
    content: "ABC123",
    like: 1000,
    dislike: 2,
    views: 2000,
  };

  const renderContent = (
    <>
      <div>
        <h1>Hello World</h1>
      </div>
    </>
  );

  const [isLogin, setIslogin] = useState(false);
  const renderLogin = () => {
    if (isLogin) {
      return <h1>Hello bcs16</h1>;
    } else {
      return <button onClick={()=>{
        setIslogin(true)
      }}>Đăng nhập</button>;
    }
  };

  return (
    <div className="container mx-auto">
      <h2>Danh sách sản phẩm</h2>
      <div className="flex">
        <div className="w-[30%]">
          <CardProduct tenSanPham="Sản phẩm A" />
        </div>
        <div className="w-[30%]">
          <CardProduct tenSanPham="Sản phẩm A" />
        </div>
        <div className="w-[30%]">
          <CardProduct tenSanPham="Sản phẩm A" />
        </div>
      </div>

      <h2>Danh sách Article</h2>
      <ArticleItem contentArticle={data} />
      <ArticleItem />
      <ArticleItem contentArticle={data} />
      <h2>Demo props w JSX</h2>
      <DemoJsx contentJSX={renderContent} />
      <DemoJsx contentJSX={<ChangeCarColor />} />

      <h2 className="text-red-500 font-bold">Demo props children</h2>
      <PropsChildren title="Bài tập demo">
        <h3>ABC</h3>
        <ChangeCarColor />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus,
          nulla!
        </p>
      </PropsChildren>

      <h2 className="text-red-500 font-bold">Demo Props callback</h2>
      <DemoCallback renderCondition={renderLogin()} />
    </div>
  );
};

export default DemoProps;
