import React, { useState } from "react";
import { Table } from "antd";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getAllUserPagingAPI } from "../../API/userAPI";
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    render: (gender) => <span>{gender ? "Male" : "Female"}</span>,
  },
];

const TableUserRQ = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { data, isLoading, error } = useQuery({
    queryKey: ["userPaging", pageIndex, pageSize],
    queryFn: getAllUserPagingAPI,
    staleTime: 15000,
    gcTime: 100000,
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: true,
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Lỗi: {error.message}</div>;
  }
  console.log(data);
  const { items } = data;
  return (
    <Table
      columns={columns}
      dataSource={items}
      rowKey={"id"}
      pagination={{
        pageSize: pageSize,
        current: pageIndex,
        total: data.totalRow,
        onChange: (page, pageSize) => {
          setPageIndex(page);
          setPageSize(pageSize);
        },
      }}
    />
  );
};

export default TableUserRQ;
