import React from "react";
import { http } from "../utils/interceptor";
import { useQuery } from "@tanstack/react-query";

const useQueryCustom = (qryKey, url, st = 60000) => {
  const fn = async () => {
    const res = await http.get(url);
    return res.data.content;
  };
  const { data, isLoading, error } = useQuery({
    queryKey: qryKey,
    queryFn: fn,
    staleTime: st,
  });
  return { data, isLoading, error };
};

export default useQueryCustom;
