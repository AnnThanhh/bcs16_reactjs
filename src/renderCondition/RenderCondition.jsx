import React from "react";

const RenderCondition = () => {
  const isLogin = true; //true là đã đăng nhập và ngược lại

  const renderLogin = () => {
    if (isLogin) {
      return (
        <div>
          <h1>Hello Nam</h1>
          <ul>
            <li>Thông tin tài khoản</li>
            <li>đăng xuất</li>
          </ul>
        </div>
      );
    }
    return <button>Đăng nhập</button>;
  };
  return (
    <div className="container mx-auto">
      {/* {isLogin === true ? (
        <div>
          <h1>Hello Nam</h1>
          <ul>
            <li>Thông tin tài khoản</li>
            <li>đăng xuất</li>
          </ul>
        </div>
      ) : (
        <button>Đăng nhập</button>
      )} */}
      {renderLogin()}
    </div>
  );
};

export default RenderCondition;
