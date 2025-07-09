import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Details = () => {
  const param = useParams();
  const [prodDetail, setProdDetail] = useState({});
  console.log(param);
  const getProductByID = async () => {
    const res = await axios.get(
      `https://apistore.cybersoft.edu.vn/api/Product/getbyid?id=${param.prodID}`
    );
    const data = res.data.content;
    console.log(data);
    setProdDetail(data);
  };
  useEffect(() => {
    getProductByID();
  }, []);
  return <div>Details - {param.prodID}</div>;
};

export default Details;
