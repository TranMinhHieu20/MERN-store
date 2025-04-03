import React from "react";
import { Spin } from "antd";

const Loading = ({ delay = 500 }) => {
  return <Spin delay={delay}></Spin>;
};

export default Loading;
