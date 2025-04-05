// LoadingComponent/Loading.jsx
import React from "react";
import { Spin } from "antd";

const Loading = () => {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 1000,
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // 👉 Tạo hiệu ứng tối màn hình
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spin size="large" style={{ color: "#fff" }} />
    </div>
  );
};

export default Loading;
