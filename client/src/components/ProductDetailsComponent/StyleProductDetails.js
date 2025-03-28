import { Image, Col, InputNumber } from "antd";
import styled from "styled-components";

export const WrapperStyleImageSmall = styled(Image)`
  width: 100px !important;
  height: 100px !important;
  object-fit: cover;
  aspect-ratio: 1/1;
`;
export const WrapperStyleCol = styled(Col)`
  display: flex;
  flex-basis: unset;
`;

export const WrapperStyleNameProduct = styled.h1`
  color: rgb(36, 36, 36);
  font-size: 24px;
  font-weight: 300;
  line-height: 32px;
  work-break: break-word;
`;

export const WrapperStyleBefore = styled.span`
  position: relative;
  font-size: 14px;
  left: 10px;
  &: before {
    position: absolute;
    content: "";
    width: 1px;
    height: 100%;
    background-color: black;
    top: 0;
    left: -5px;
  }
`;

export const WrapperStylePriceProduct = styled.div`
  background-color: rgb(250, 250, 250);
  border-radius: 4px;
`;

export const WrapperStylePriceTextProduct = styled.h1`
  font-size: 32px;
  line-height: 40px;
  margin-right: 8px;
  font-weight: 500;
  padding: 10px;
  margin-top: 10px;
`;

export const WrapperStyleAddressProduct = styled.div`
  span.address {
    text-decoration: underline;
    font-size: 15px;
    line-height: 24px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  span.change-address {
    color: rgb(11, 116, 229);
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    flex-shrink: 0;
  }
`;

export const WrapperQualityProduct = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: fit-content;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const WrapperInputNumber = styled(InputNumber)`
  width: 40px;
  border-top: none;
  border-bottom: none;
  border-radius: 0;
`;
