import React from "react";
import Baitap1 from "./components/baitap1/Baitap1";
import Databinding from "./databinding/Databinding";
import DemoHandleEvent from "./eventHandler/DemoHandleEvent";
import RenderCondition from "./renderCondition/RenderCondition";
import State from "./state/State";
import ChangeFontSize from "./state/ChangeFontSize";
import Tinker from "./state/Tinker";
import ChangeCarColor from "./state/ChangeCarColor";
import DemoProps from "./props/DemoProps";
import RenderWithMap from "./renderWithMap/RenderWithMap";
import RenderShoeShop from "./renderWithMap/BTMap/RenderShoeShop";

const App = () => {
  return (
    <>
      {/* <Baitap1 />
      <Databinding /> */}
      {/* <DemoHandleEvent /> */}
      {/* <RenderCondition /> */}
      {/* <State /> */}
      {/* <ChangeFontSize /> */}
      {/* <Tinker /> */}
      {/* <ChangeCarColor /> */}
      {/* <DemoProps /> */}
      {/* <RenderWithMap /> */}
      <RenderShoeShop />
    </>
  );
};

export default App;
