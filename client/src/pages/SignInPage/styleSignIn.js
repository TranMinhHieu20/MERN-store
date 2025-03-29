import styled from "styled-components";
import { CloseOutlined } from "@ant-design/icons";
export const WrapperContainerLeft = styled.div`
  flex: 1;
  padding: 40px 45px 24px;
  display: flex;
  flex-direction: column;
`;

export const WrapperContainerRight = styled.div`
  position: relative;
  }
`;
export const WrapperContainerRightClose = styled(CloseOutlined)`
  font-size: 20px;
  width: 35px;
  height: 35px;
  background-color: #ccc;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -12px;
  right: -12px;
  border-radius: 50%;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: red;
    color: white;
    cursor: pointer;
  }
`;

export const WrapperContainerRightTitle = styled.h4`
  position: absolute;
  font-size: 16px;
  color: #01debf;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
`;

export const WrapperStyleLook = styled.div`
  font-size: 12px;
  position: absolute;
  top: 10px;
  right: 2px;
  width: 40px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    color: #333;
  }
`;
