import React from "react";
import { WrapperInputStyle } from "./styleInputForm";

const InputForm = (props) => {
  // eslint-disable-next-line
  const { placeholder, styleInputForm, type, hoverBorderColor, id } = props;
  return (
    <WrapperInputStyle
      id={id}
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
