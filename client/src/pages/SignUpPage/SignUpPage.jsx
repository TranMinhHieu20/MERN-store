import React, { useState } from "react";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperContainerRightClose,
  WrapperContainerRightTitle,
  WrapperStyleLookPassword,
  WrapperStyleLookConfirmPassword,
} from "./StyleSignUp";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Image } from "antd";
import imageSignInSignUp from "../../assets/image/imageSignInSignUp.avif";
import { LockFilled, UnlockFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useMutationHook } from "../../hooks/useMutationHook";
import * as UserService from "../../Services/UseService";
import Loading from "../../components/LoadingComponent/Loading";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true); // State để kiểm soát hiển thị
  const [isLock, setIsLock] = useState(true);
  const [isLockConfirm, setIsLockConfirm] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isSpinLoading, setIsSpinLoading] = useState(false);

  const mutation = useMutationHook((data) => UserService.signUpUser(data));
  console.log("mutationFn: ", mutation);
  // eslint-disable-next-line
  const { data, isLoading } = mutation;

  if (!isOpen) return null; // Nếu isOpen = false, không render gì cả

  const handleOnchangeEmail = (e) => {
    setEmail(e.target.value);
    console.log("Email:", e.target.value);
  };
  const handleOnchangePassword = (e) => {
    setPassword(e.target.value);
    console.log("Password:", e.target.value);
  };
  const handleOnchangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    console.log("Confirm Password:", e.target.value);
  };

  const handleNavigateSignIn = () => {
    navigate("/sign-in");
  };

  const handleSignUp = async () => {
    setIsSpinLoading(true);
    try {
      await mutation.mutateAsync({
        email,
        password,
        confirmPassword,
      });
    } catch (error) {
      console.log("ERROR signUp: ", error);
    }
    setIsSpinLoading(false);
    console.log("sign-up: ", email, password, confirmPassword);
  };

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

          filter: isSpinLoading ? "grayscale(50%) opacity(0.7)" : "none", // Giảm màu và độ trong suốt khi loading
          pointerEvents: isSpinLoading ? "none" : "auto", // Vô hiệu hóa tương tác khi loading

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
            value={email}
            handleOnchange={handleOnchangeEmail}
          />
          <div style={{ position: "relative" }}>
            <InputForm
              // hoverBorderColor={false}
              type={isLock ? "password" : "text"}
              placeholder="Password"
              styleInputForm={{
                marginTop: "10px",
                paddingRight: "50px",
              }}
              value={password}
              handleOnchange={handleOnchangePassword}
            />
            <InputForm
              // hoverBorderColor={false}
              type={isLockConfirm ? "password" : "text"}
              placeholder="Confirm Password"
              styleInputForm={{
                marginTop: "10px",
                paddingRight: "50px",
              }}
              value={confirmPassword}
              handleOnchange={handleOnchangeConfirmPassword}
            />
            <WrapperStyleLookPassword onClick={() => setIsLock(!isLock)}>
              {isLock ? <LockFilled /> : <UnlockFilled />}
            </WrapperStyleLookPassword>
            <WrapperStyleLookConfirmPassword
              onClick={() => setIsLockConfirm(!isLockConfirm)}
            >
              {isLockConfirm ? <LockFilled /> : <UnlockFilled />}
            </WrapperStyleLookConfirmPassword>
            {data?.status === "Ok" && (
              <span style={{ color: "#01debf", marginTop: "5px" }}>
                {data?.message}
              </span>
            )}
            {data?.status === "Err" && (
              <span style={{ color: "red", marginTop: "5px" }}>
                {data?.message}
              </span>
            )}
          </div>

          <ButtonComponent
            onClick={handleSignUp}
            disabled={
              email.length === 0 ||
              password.length === 0 ||
              confirmPassword.length === 0 ||
              isSpinLoading
            }
            // border={false}
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
            textButton={isSpinLoading ? "Đang đăng ký..." : "Đăng ký"}
          />
          <span style={{ position: "relative" }}>
            {isSpinLoading && (
              <span
                style={{ position: "absolute", right: "30px", top: "-90px" }}
              >
                <Loading />
              </span>
            )}
          </span>
          <div style={{ marginTop: "20px" }}>
            <p style={{ fontSize: "12px" }}>
              Đã có tài khoản?{" "}
              <span
                style={{ color: "#01debf", cursor: "pointer" }}
                onClick={handleNavigateSignIn}
              >
                Đăng nhập
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

export default SignUpPage;
