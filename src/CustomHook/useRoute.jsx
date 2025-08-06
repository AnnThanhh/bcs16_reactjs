import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const useRoute = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [search, setSearch] = useSearchParams();
  return {
    navigate,
    params,
    search,
    setSearch,
  };
};

export default useRoute;
