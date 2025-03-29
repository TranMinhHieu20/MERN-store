import React, { useState } from "react";
import { WrapperInputStyle } from "./styleInputForm";

const InputForm = (props) => {
  const { placeholder, styleInputForm, type, hoverBorderColor } = props;
  // eslint-disable-next-line
  const [valueInput, setValueInput] = useState("");
  return (
    <WrapperInputStyle
      hoverBorderColor={hoverBorderColor}
      type={type}
      placeholder={placeholder}
      valueInput={valueInput}
      style={{
        ...styleInputForm,
      }}
    />
  );
};

export default InputForm;
