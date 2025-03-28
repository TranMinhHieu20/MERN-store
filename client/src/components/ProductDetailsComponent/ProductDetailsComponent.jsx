import React from "react";
import { Row, Col, Image, Rate } from "antd";
import beautiful from "../../assets/image/beautiful.jpg";
import beautifulSmall from "../../assets/image/beautifulSmall.jpg";
import {
  WrapperStyleImageSmall,
  WrapperStyleCol,
  WrapperStyleNameProduct,
  WrapperStyleBefore,
  WrapperStylePriceProduct,
  WrapperStylePriceTextProduct,
  WrapperStyleAddressProduct,
  WrapperQualityProduct,
  WrapperInputNumber,
} from "./StyleProductDetails";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ProductDetailsComponent = () => {
  return (
    <Row style={{ padding: "16px", background: "#fff" }} gutter={[10, 10]}>
      <Col span={10} style={{ padding: "10px" }}>
        <Image
          src={beautiful}
          alt="Image"
          preview={true}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />

        <Row
          gutter={[10, 10]}
          style={{ paddingTop: "10px", justifyContent: "space-between" }}
        >
          <WrapperStyleCol span={4}>
            <WrapperStyleImageSmall
              src={beautifulSmall}
              alt="Image"
              preview={false}
            />
          </WrapperStyleCol>
          <WrapperStyleCol span={4}>
            <WrapperStyleImageSmall
              src={beautifulSmall}
              alt="Image"
              preview={false}
            />
          </WrapperStyleCol>
          <WrapperStyleCol span={4}>
            <WrapperStyleImageSmall
              src={beautifulSmall}
              alt="Image"
              preview={false}
            />
          </WrapperStyleCol>
          <WrapperStyleCol span={4}>
            <WrapperStyleImageSmall
              src={beautifulSmall}
              alt="Image"
              preview={false}
            />
          </WrapperStyleCol>
          <WrapperStyleCol span={4}>
            <WrapperStyleImageSmall
              src={beautifulSmall}
              alt="Image"
              preview={false}
            />
          </WrapperStyleCol>
          <WrapperStyleCol span={4}>
            <WrapperStyleImageSmall
              src={beautifulSmall}
              alt="Image"
              preview={false}
            />
          </WrapperStyleCol>
        </Row>
      </Col>
      <Col
        span={14}
        style={{
          padding: "15px 15px",
          marginLeft: "0px",
          border: "1px solid rgb(116, 118, 120)",
        }}
      >
        <WrapperStyleNameProduct>title</WrapperStyleNameProduct>
        <div>
          <Rate allowHalf defaultValue={2.5} style={{ fontSize: "14px" }} />
          <WrapperStyleBefore>Đã bán 1000+</WrapperStyleBefore>
        </div>
        <WrapperStylePriceProduct>
          <WrapperStylePriceTextProduct>200.000</WrapperStylePriceTextProduct>
          <WrapperStyleAddressProduct>
            <span>Giao đến-</span>
            <span className="address">Số 8, ngõ 2, Phạm Thận Duật-</span>
            <span className="change-address">Đổi địa chỉ</span>
          </WrapperStyleAddressProduct>
        </WrapperStylePriceProduct>
        <div style={{ marginTop: "15px" }}>
          <div>Số lượng</div>
          <WrapperQualityProduct style={{ marginTop: "15px" }}>
            <button
              style={{
                background: "transparent",
                border: "none",
                padding: "0 4px 0 12px",
              }}
            >
              <MinusOutlined style={{ fontSize: "15px" }} />
            </button>

            <WrapperInputNumber
              min={1}
              defaultValue={1}
              style={{ width: "40px" }}
              controls={false}
            />
            <button
              style={{
                background: "transparent",
                border: "none",
                padding: "0 12px 0 4px",
              }}
            >
              <PlusOutlined style={{ fontSize: "15px" }} />
            </button>
          </WrapperQualityProduct>
        </div>
        <div style={{ marginTop: "15px" }}>
          <ButtonComponent
            border={false}
            size={20}
            styleButton={{
              background: "rgb(255,57,69)",
              color: "#fff",
              height: "48px",
              width: "220px",
              border: "none",
              borderRadius: "4px",
              marginRight: "10px",
            }}
            textButton="Mua ngay"
          />
          <ButtonComponent
            border={false}
            size={20}
            styleButton={{
              background: "rgb(255, 255, 255)",
              color: "#0b74e5",
              height: "48px",
              width: "220px",
              border: "1px solid #0b74e5",
              borderRadius: "4px",
            }}
            textButton="Mua trả sau"
          />
        </div>
      </Col>
    </Row>
  );
};

export default ProductDetailsComponent;
