import React from "react";
import { Col } from "antd";
import {
  WrapperHeader,
  WrapperTextHeader,
  WrapperHeaderAccount,
  WrapperTextHeaderSmall,
} from "./style";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader gutter={10}>
        <Col span={6}>
          <WrapperTextHeader>LOGO</WrapperTextHeader>
        </Col>
        <Col span={12} style={{ gap: 12 }}>
          <ButtonInputSearch
            size="large"
            placeholder="input search text"
            textButton="Tìm kiếm"
          />
        </Col>
        <Col span={6} style={{ display: "flex", gap: 10 }}>
          <WrapperHeaderAccount>
            <UserOutlined style={{ fontSize: 22, marginLeft: 10 }} />
            <div>
              <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
              <div>
                <span style={{ fontSize: 14 }}>Tài Khoản</span>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccount>
          <div
            style={{ display: "flex", alignItems: "center", marginLeft: 10 }}
          >
            <ShoppingCartOutlined style={{ fontSize: 24, color: "#fff" }} />
            <WrapperTextHeaderSmall style={{ marginTop: 11 }}>
              Giỏ hàng
            </WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
