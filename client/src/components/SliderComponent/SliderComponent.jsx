import React from "react";
import Slider from "react-slick";

const SliderComponent = ({ arrImages }) => {
  const settings = {
    // dots: true, // Hiển thị chấm tròn
    infinite: true, // Vòng lặp vô hạn
    speed: 1000, // Tốc độ chuyển đổi
    slidesToShow: 3, // Hiển thị 3 ảnh một lúc
    slidesToScroll: 1, // Lướt từng ảnh một
    autoplay: true, // Tự động chạy slider
    autoplaySpeed: 1800, // 2 giây đổi slide
    pauseOnHover: false,
    arrows: false,
  };
  return (
    <Slider {...settings} style={{ marginTop: "0", backgroundColor: "#fff" }}>
      {arrImages.map((image, index) => (
        <div key={index}>
          <img
            src={image}
            alt={`slide-${index}`}
            style={{ width: "100%", height: "250px", objectFit: "contain" }}
          />
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
