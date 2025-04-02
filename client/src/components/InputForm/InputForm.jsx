import React from "react";
import { WrapperInputStyle } from "./styleInputForm";

const InputForm = (props) => {
  // eslint-disable-next-line
  const { placeholder, styleInputForm, type, hoverBorderColor } = props;
  return (
    <WrapperInputStyle
      // hoverBorderColor={hoverBorderColor}
      type={type}
      placeholder={placeholder}
      value={props.value}
      onChange={props.handleOnchange}
      style={{
        ...styleInputForm,
      }}
    />
  );
};

export default InputForm;
