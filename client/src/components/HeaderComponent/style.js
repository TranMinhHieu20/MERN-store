import styled from "styled-components";
import { Row } from "antd";

export const WrapperHeader = styled(Row)`
  padding: 15px 120px;
  background-color: rgb(26, 148, 255);
  align-items: center;
  gap: 16px
  flex-wrap: nowrap;
`;

export const WrapperTextHeader = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  text-align: left;
  display: flex;
  justify-content: center;
`;

export const WrapperHeaderAccount = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  gap: 10px;
  font-size: 12px;
`;

export const WrapperTextHeaderSmall = styled.span`
  color: #fff;
  font-size: 12px;
  white-space: nowrap;
`;
