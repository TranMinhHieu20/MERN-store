import { Card } from "antd";
import styled from "styled-components";

export const WrapperCardStyle = styled(Card)`
  width: 200px;
  & img {
    width: 200px;
    height: 200px;
  },
  position: relative;

`;

export const ImageSale = styled.span`
  position: absolute;
  min-width: 20px;
  min-height: 16px;
  font-size: 11px;
  background-color: blue;
  color: #fff;
  top: -1px;
  left: -1px;
  padding: 0px 5px;
  border-top-left-radius: 8px;
  // border-bottom-right-radius: 8px;
`;
export const StyleNameProduct = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgb(56, 56, 61);
`;

export const WrapperReportText = styled.div`
  font-size: 11px;
  color: rgb(128, 128, 137);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 6px 0 4px;
`;

export const WrapperPriceText = styled.div`
  color: rgb(255, 66, 78);
  font-size: 16px;
  font-weight: 500;
`;
export const WrapperDiscountText = styled.span`
  color: rgb(255, 66, 78);
  font-size: 12px;
  white-space: nowrap;
  margin-left: 10px;
`;
