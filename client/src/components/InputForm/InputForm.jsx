import React, { useState } from "react";
import { Input } from "antd";

const InputForm = (props) => {
  const { placeholder } = props;
  // eslint-disable-next-line
  const [valueInput, setValueInput] = useState("");
  return <Input placeholder={placeholder} valueInput={valueInput} />;
};

export default InputForm;
