import React from "react";
import { Button } from "antd";
const ButtonComponent = ({
  size,
  colorButton,
  styleButton,
  styleTextButton,
  textButton,
  ...rest
}) => {
  return (
    <>
      <Button size={size} style={styleButton} {...rest}>
        {textButton}
      </Button>
    </>
  );
};

export default ButtonComponent;
