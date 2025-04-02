import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const Loading = ({ children, isLoading, delay = 200 }) => {
  return <Spin indicator={<LoadingOutlined spin />} size="small" />;
};

export default Loading;
