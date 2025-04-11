import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperButtonMore, WrapperTypeProduct, WrapperProducts } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import tv from '../../assets/image/tv.jpg'
import laptop from '../../assets/image/laptop.png'
import iphone from '../../assets/image/iphone.jpg'
import tv1 from '../../assets/image/tv1.jpg'
import macbook from '../../assets/image/macbook.jpeg'
import CardComponent from '../../components/CardComponent/CardComponent'
import { useQuery } from '@tanstack/react-query'
import * as ProductService from '../../Services/ProductService'

const HomePage = () => {
  const arrs = ['TV', 'Smart Phone', 'LapTop']
  const fetchProductAll = async () => {
    const res = await ProductService.getAllProduct()
    return res
  }
  const { isLoading, data: products } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProductAll,
    retry: 3,
    retryDelay: 1000
  })
  console.log('dataHomePage: ', products)
  return (
    <>
      <div style={{ padding: '0 120px' }}>
        <WrapperTypeProduct>
          {arrs.map((arr) => {
            return <TypeProduct name={arr} key={arr} />
          })}
        </WrapperTypeProduct>
      </div>
      <div
        id="container"
        style={{
          backgroundColor: '#efefef',
          padding: '0 120px',
          minHeight: '1000px',
          width: '100%'
        }}
      >
        <SliderComponent arrImages={[tv, tv1, iphone, laptop, macbook]} />
        <WrapperProducts>
          {products?.data?.map((product) => {
            return (
              <CardComponent
                key={product._id}
                countInStock={product.countInStock}
                description={product.description}
                image={product.image}
                name={product.name}
                price={product.price}
                rating={product.rating}
                type={product.type}
                selled={product.selled}
                discount={product.discount}
              />
            )
          })}
        </WrapperProducts>
        <WrapperButtonMore
          textButton="Xem thêm"
          type="outline"
          styleButton={{
            width: '240px',
            height: '38px',
            borderRadius: '5px',
            border: '1px solid rgb(11, 116, 229)',
            color: 'rgb(11, 116, 229',
            display: 'flex',
            margin: '20px auto 0'
          }}
        />
      </div>
    </>
  )
}

export default HomePage
