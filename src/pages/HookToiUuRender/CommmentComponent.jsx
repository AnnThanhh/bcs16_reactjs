import React, { memo } from "react";

const CommmentComponent = (props) => {
  console.log("child render");
  return (
    <div>
      <h3>Commment component</h3>
      {props.renderLike()}
    </div>
  );
};

export default memo(CommmentComponent);
