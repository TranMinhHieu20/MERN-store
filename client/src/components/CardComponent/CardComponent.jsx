import React from "react";
import { Card } from "antd";
import { CheckOutlined, StarFilled } from "@ant-design/icons";
import {
  StyleNameProduct,
  WrapperReportText,
  WrapperPriceText,
  WrapperDiscountText,
  WrapperCardStyle,
  ImageSale,
} from "./style";

const CardComponent = () => {
  return (
    <WrapperCardStyle
      hoverable
      style={{ width: 200 }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <ImageSale>
        <span>
          <CheckOutlined />
        </span>
        <span>OFFICIAL</span>
      </ImageSale>

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
    </WrapperCardStyle>
  );
};

export default CardComponent;
