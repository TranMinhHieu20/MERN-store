import React from "react";
import { Card } from "antd";
import { StarFilled } from "@ant-design/icons";
import {
  StyleNameProduct,
  WrapperReportText,
  WrapperPriceText,
  WrapperDiscountText,
} from "./style";

const CardComponent = () => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          bodyStyle={{ padding: "10px" }}
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <StyleNameProduct>Iphone</StyleNameProduct>
      <WrapperReportText>
        <span>
          <span>4.9</span>
          <StarFilled
            style={{ fontSize: "10px", color: "yellow", margin: "0 5px" }}
          />
        </span>
        <span></span>
        <span>Đã bán 1000+</span>
      </WrapperReportText>
      <WrapperPriceText>
        <span>1.000.000</span>
        <span style={{ fontSize: "12px", textDecoration: "underline" }}>đ</span>
        <WrapperDiscountText>-6%</WrapperDiscountText>
      </WrapperPriceText>
    </Card>
  );
};

export default CardComponent;
