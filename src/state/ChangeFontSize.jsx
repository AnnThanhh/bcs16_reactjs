import React, { useState } from "react";

const ChangeFontSize = () => {
  const [fontSize, setFontSize] = useState(17);
  return (
    <div className="container mx-auto">
      <h1>Change font size</h1>
      <p style={{ fontSize: fontSize }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas qui
        aspernatur porro debitis voluptate cumque dolorem excepturi! Soluta,
        quam accusantium?
      </p>
      <button
        className="py-3.5 px-6 bg-green-400"
        onClick={() => {
          setFontSize(fontSize + 1);
        }}
      >
        Increase
      </button>
      <button
        className="py-3.5 px-6 bg-red-400"
        onClick={() => {
          setFontSize(fontSize - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
};

export default ChangeFontSize;
