import React from "react";
import CardProductComponent from "./CardProductComponent";

const ContentComponent = () => {
  return (
    <div className="bg-green-500 h-100 flex justify-between items-center w-[70%]">
      <CardProductComponent />
      <CardProductComponent />
      <CardProductComponent />
    </div>
  );
};

export default ContentComponent;
