import React from "react";
import { Button } from "antd";
const ButtonComponent = ({
  size,
  colorButton,
  styleButton = {},
  styleTextButton,
  textButton,
  disabled,
  ...rest
}) => {
  return (
    <>
      <Button
        style={{
          ...styleButton,
          background: disabled ? "#ccc" : styleButton.background,
        }}
        disabled={disabled}
        size={size}
        {...rest}
      >
        {textButton}
      </Button>
    </>
  );
};

export default ButtonComponent;
