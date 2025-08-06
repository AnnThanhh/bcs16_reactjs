import React from "react";
import useGetData from "./useGetData";
import useRoute from "./useRoute";
import useQueryCustom from "./useQueryCustom";

const CustomHookDemo = () => {
  const data1 = useGetData("/api/Product");
  const { navigate, setSearch, search } = useRoute();
  console.log(search.get("keyword"));
  const { data } = useQueryCustom("getAllProd", "/api/Product");
  console.log(data);
  return (
    <div>
      CustomHookDemo
      <input
        type="text"
        className="border-2"
        onChange={(e) => setSearch({ keyword: e.target.value })}
      />
      <button className="bg-blue-500 px-10 py-4" onClick={() => navigate("/")}>
        go home
      </button>
    </div>
  );
};

export default CustomHookDemo;
