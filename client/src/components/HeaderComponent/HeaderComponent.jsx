import React from "react";
import { Col } from "antd";
import { WrapperHeader } from "./style";

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={6}>Col</Col>
        <Col span={12}>Col</Col>
        <Col span={6}>Col</Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
