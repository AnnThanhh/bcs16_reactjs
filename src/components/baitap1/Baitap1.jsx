import React from "react";
import HeaderComponent from "../HeaderComponent";
import NavigationComponent from "../NavigationComponent";
import ContentComponent from "../ContentComponent";

const Baitap1 = () => {
  return (
    <div>
      <HeaderComponent />
      <div className="flex">
        <NavigationComponent />
        <ContentComponent />
      </div>
    </div>
  );
};

export default Baitap1;
