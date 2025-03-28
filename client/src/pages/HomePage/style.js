import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
  padding: 12px 0;
  font-size: 15px;
  border-bottom: 1px solid rgb(26, 148, 255);
  white-space: nowrap;
  overflow: hidden;
  background-color: #fff;
`;

export const WrapperButtonMore = styled(ButtonComponent)`
  &:hover {
    background-color: rgb(11, 116, 229);
    color: #fff !important;
  }
`;

export const WrapperProducts = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 16px; /* Thêm khoảng cách giữa các card */
`;
