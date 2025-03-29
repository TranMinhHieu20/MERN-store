import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperContainerRightClose,
  WrapperContainerRightTitle,
  WrapperStyleLook,
} from "./styleSignIn";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Image } from "antd";
import imageSignInSignUp from "../../assets/image/imageSignInSignUp.avif";
import { LockFilled, UnlockFilled } from "@ant-design/icons";

const SignIpPage = () => {
  const [isOpen, setIsOpen] = useState(true); // State để kiểm soát hiển thị
  const [isLock, setIsLock] = useState(true);
  const navigate = useNavigate();

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
        <WrapperContainerLeft>
          <h1 style={{ fontSize: "30px" }}>Xin chào</h1>
          <p style={{ fontSize: "14px" }}>Đăng nhập hoặc tạo tài khoản</p>
          <InputForm
            type="text"
            placeholder="abc@email.com"
            styleInputForm={{ paddingRight: "50px" }}
          />
          <div style={{ position: "relative" }}>
            <InputForm
              hoverBorderColor={false}
              type={isLock ? "password" : "text"}
              placeholder="Password"
              styleInputForm={{
                marginTop: "10px",
                paddingRight: "50px",
              }}
            />
            <WrapperStyleLook onClick={() => setIsLock(!isLock)}>
              {isLock ? <LockFilled /> : <UnlockFilled />}
            </WrapperStyleLook>
          </div>

          <ButtonComponent
            border={false}
            size={20}
            styleButton={{
              background: "#01debf",
              color: "#fff",
              height: "40px",
              width: "100%",
              border: "none",
              borderRadius: "4px",
              marginRight: "10px",
              marginTop: "20px",
            }}
            textButton="Đăng nhập"
          />
          <div style={{ marginTop: "20px" }}>
            <p
              style={{ color: "#01debf", fontSize: "12px", cursor: "pointer" }}
            >
              Quên mật khẩu
            </p>
            <p style={{ fontSize: "12px" }}>
              Chưa có tài khoản?{" "}
              <span
                style={{ color: "#01debf", cursor: "pointer" }}
                onClick={() => navigate("/sign-up")}
              >
                Tạo tài khoản
              </span>
            </p>
          </div>
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
