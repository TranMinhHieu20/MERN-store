import React, { useState } from "react";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperContainerRightClose,
  WrapperContainerRightTitle,
} from "./styleSignIn";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Image } from "antd";
import imageSignInSignUp from "../../assets/image/imageSignInSignUp.avif";
import { CloseOutlined } from "@ant-design/icons";

const SignIpPage = () => {
  const [isOpen, setIsOpen] = useState(true); // State để kiểm soát hiển thị

  if (!isOpen) return null; // Nếu isOpen = false, không render gì cả
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0,0, 0.53)",
      }}
    >
      <div
        style={{
          width: "800px",
          height: "445px",
          borderRadius: "6px",
          backgroundColor: "#fff",
          display: "flex",

          // alignItems: "center",
        }}
      >
        <WrapperContainerLeft style={{ padding: "20px" }}>
          <h1>Xin chào</h1>
          <p>Đăng nhập hoặc tạo tài khoản</p>
          <InputForm placeholder="abc@email.com" />
          <InputForm placeholder="******" />
          <ButtonComponent
            border={false}
            size={20}
            styleButton={{
              background: "rgb(255,57,69)",
              color: "#fff",
              height: "40px",
              width: "180px",
              border: "none",
              borderRadius: "4px",
              marginRight: "10px",
            }}
            textButton="Đăng nhập"
          />
        </WrapperContainerLeft>
        <WrapperContainerRight style={{ height: "100%" }}>
          <Image
            preview={false}
            src={imageSignInSignUp}
            style={{
              width: "300px",
              height: "445px",
              borderRadius: "4px",
              objectFit: "contain",
            }}
          />
          <WrapperContainerRightTitle>
            Mua sắm tại Logo
          </WrapperContainerRightTitle>
          <WrapperContainerRightClose onClick={() => setIsOpen(false)} />
        </WrapperContainerRight>
      </div>
    </div>
  );
};

export default SignIpPage;
