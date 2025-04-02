import React from "react";
import { Col, Badge } from "antd";
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
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const handleNavigateLogin = () => {
    navigate("/sign-in");
  };
  return (
    <div>
      <WrapperHeader gutter={0}>
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
            <div onClick={handleNavigateLogin}>
              <WrapperTextHeaderSmall onClick={() => navigate("/sign-in")}>
                Đăng nhập/Đăng ký
              </WrapperTextHeaderSmall>
              <WrapperTextHeaderSmall>/</WrapperTextHeaderSmall>

              <div>
                <span style={{ fontSize: 14, cursor: "pointer" }}>
                  Tài Khoản
                </span>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccount>
          <div
            style={{ display: "flex", alignItems: "center", marginLeft: 10 }}
          >
            <Badge
              count={1000}
              overflowCount={999}
              size="small"
              style={{ fontSize: "10px" }}
            >
              <ShoppingCartOutlined style={{ fontSize: 24, color: "#fff" }} />
            </Badge>
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
