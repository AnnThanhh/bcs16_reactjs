import React, { useEffect, useState } from "react";
import { http } from "../utils/interceptor";
// custom hook: tương tự như component tuy nhiên kết trả về không phải là jsx mà là giá trị boolean, string, number, object, array, ...
//tạo custome gọi api
const useGetData = (endpoint) => {
  const [data, setData] = useState(null);
  const fetchAPI = async () => {
    const res = await http.get(endpoint);
    setData(res.data.content);
  };

  useEffect(() => {
    fetchAPI();
  }, []);
  return data;
};

export default useGetData;
