import React from "react";
import { Rate } from "antd";

const AntDesignDemo = () => {
  return (
    <div className="mt-5">
      <Rate
        allowHalf
        defaultValue={3.5}
        character={<i className="fa-solid fa-heart" />}
      />
    </div>
  );
};

export default AntDesignDemo;
