import React from "react";
import {
  WrapperContent,
  WrapperLabelText,
  WrapperTextPrice,
  WrapperTextValue,
} from "./style";
import { Checkbox } from "antd";
import { Rate } from "antd";

const NavBarComponent = () => {
  const renderContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((option) => {
          return <WrapperTextValue key={option}>{option}</WrapperTextValue>;
        });
      case "checkBox":
        return (
          <Checkbox.Group
            style={{ width: "100%", display: "flex", flexDirection: "column" }}
          >
            {options.map((option) => {
              return <Checkbox value={option.value}>{option.label}</Checkbox>;
            })}
          </Checkbox.Group>
        );
      case "star":
        return options.map((option) => {
          return (
            <div>
              <Rate
                style={{ fontSize: "13px", marginRight: "5px" }}
                allowHalf
                defaultValue={option}
              />
              <span>từ {option} sao</span>
            </div>
          );
        });
      case "price":
        return options.map((option) => {
          return <WrapperTextPrice>{option}</WrapperTextPrice>;
        });
      default:
        return;
    }
  };
  return (
    <>
      <div>
        <WrapperLabelText>Danh mục</WrapperLabelText>
        <WrapperContent>
          {renderContent("text", ["Laptop", "TV"])}
        </WrapperContent>
      </div>
      <div>
        <WrapperLabelText>Nơi bán</WrapperLabelText>
        <WrapperContent>
          {renderContent("checkBox", [
            { value: "a", label: "A" },
            { value: "b", label: "B" },
          ])}
        </WrapperContent>
      </div>
      <div>
        <WrapperLabelText>Đánh giá</WrapperLabelText>
        <WrapperContent>{renderContent("star", [3, 4, 5])}</WrapperContent>
      </div>
      <div>
        <WrapperLabelText>Giá</WrapperLabelText>
        <WrapperContent>
          {renderContent("price", ["dưới 50.000đ", "trên 150.000đ"])}
        </WrapperContent>
      </div>
    </>
  );
};

export default NavBarComponent;
