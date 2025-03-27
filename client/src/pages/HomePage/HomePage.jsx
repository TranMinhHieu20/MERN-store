import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperButtonMore, WrapperTypeProduct } from "./style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import tv from "../../assets/image/tv.jpg";
import laptop from "../../assets/image/laptop.png";
import iphone from "../../assets/image/iphone.jpg";
import tv1 from "../../assets/image/tv1.jpg";
import macbook from "../../assets/image/macbook.jpeg";
import CardComponent from "../../components/CardComponent/CardComponent";
import NavBarComponent from "../../components/NavBarComponent/NavBarComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

const HomePage = () => {
  const arrs = [
    "TV",
    "Smart Phone",
    "LapTop",
    "Smart Phone",
    "LapTop",
    "Smart Phone",
    "LapTop",
    "Smart Phone",
    "LapTop",
    "Smart Phone",
    "LapTop",
    "Smart Phone",
  ];
  return (
    <>
      <div style={{ padding: "0 120px" }}>
        <WrapperTypeProduct>
          {arrs.map((arr) => {
            return <TypeProduct name={arr} key={arr} />;
          })}
        </WrapperTypeProduct>
      </div>
      <div
        id="container"
        style={{
          backgroundColor: "#efefef",
          padding: "0 120px",
          minHeight: "1000px",
        }}
      >
        <SliderComponent arrImages={[tv, tv1, iphone, laptop, macbook]} />
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
        <WrapperButtonMore
          textButton="Xem thêm"
          type="outline"
          styleButton={{
            width: "240px",
            height: "38px",
            borderRadius: "5px",
            border: "1px solid rgb(11, 116, 229)",
            color: "rgb(11, 116, 229",
            display: "flex",
            margin: "20px auto 0",
          }}
        />
        {/* <NavBarComponent /> */}
      </div>
    </>
  );
};

export default HomePage;
