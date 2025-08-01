import { http } from "../utils/interceptor";

export const getAllProductAPI = async () => {
  const res = await http.get("api/Product");
  return res.data.content;
  
};
