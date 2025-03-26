import { SearchOutlined, LoadingOutlined } from "@ant-design/icons";
import React from "react";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ButtonInputSearch = (props) => {
  const {
    size,
    placeholder,
    textButton,
    bordered = false,
    backgroundColorInput = "#fff",
    backgroundColorButton = "rgb(13, 92, 182)",
    colorButton = "#fff",
    loading = false,
    // eslint-disable-next-line
    onChange,
  } = props;
  return (
    <div style={{ display: "flex" }}>
      <InputComponent
        size={size}
        placeholder={placeholder}
        bordered={bordered}
        style={{ backgroundColor: backgroundColorInput, borderRadius: 0 }}
        suffix={loading ? <LoadingOutlined style={{ color: "#ccc" }} /> : null}
      />

      <ButtonComponent
        size={size}
        icon={<SearchOutlined style={{ color: colorButton }} />}
        style={{
          backgroundColor: backgroundColorButton,
          borderRadius: 0,
          // border: "none",
          // borderLeft: "1px solid #fff",
          color: colorButton,
        }}
        textButton={textButton}
      >
        {textButton}
      </ButtonComponent>
    </div>
  );
};

export default ButtonInputSearch;
