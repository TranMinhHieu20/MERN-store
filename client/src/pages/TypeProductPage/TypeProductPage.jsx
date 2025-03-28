import React from "react";
import NavBarComponent from "../../components/NavBarComponent/NavBarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Row, Col, Pagination } from "antd";
import { WrapperProducts, WrapperNavbar } from "./StyleTypeProduct";

const TypeProductPage = () => {
  const onChange = () => {};
  return (
    <div
      style={{
        padding: "20px 120px",
        backgroundColor: "#efefef",
      }}
    >
      <Row
        gutter={[16, 16]}
        style={{
          flexWrap: "nowrap",
          paddingTop: "10px",
        }}
      >
        <WrapperNavbar span={4}>
          <NavBarComponent />
        </WrapperNavbar>
        <Col span={20}>
          <WrapperProducts>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrapperProducts>
          <Pagination
            showQuickJumper
            defaultCurrent={2}
            total={500}
            onChange={onChange}
            style={{ justifyContent: "center", marginTop: "20px" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default TypeProductPage;
