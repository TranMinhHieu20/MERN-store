import React from 'react'
import { CheckOutlined, StarFilled } from '@ant-design/icons'
import {
  StyleNameProduct,
  WrapperReportText,
  WrapperPriceText,
  WrapperDiscountText,
  WrapperCardStyle,
  ImageSale
} from './style'

const CardComponent = (props) => {
  const {
    countInStock,
    descripition,
    image,
    name,
    price,
    rating,
    type,
    selled,
    discount
  } = props
  return (
    <WrapperCardStyle
      hoverable
      style={{ width: 200 }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <ImageSale>
        <span>
          <CheckOutlined />
        </span>
        <span>OFFICIAL</span>
      </ImageSale>

      <StyleNameProduct>{name}</StyleNameProduct>
      <WrapperReportText>
        <span>
          <span>{rating}</span>
          <StarFilled
            style={{ fontSize: '10px', color: 'yellow', margin: '0 5px' }}
          />
        </span>
        <span></span>
        <span>Đã bán {selled || 1000} +</span>
      </WrapperReportText>
      <WrapperPriceText>
        <span>{price}</span>
        <span style={{ fontSize: '12px', textDecoration: 'underline' }}>đ</span>
        <WrapperDiscountText>{-discount || -6} %</WrapperDiscountText>
      </WrapperPriceText>
    </WrapperCardStyle>
  )
}

export default CardComponent
