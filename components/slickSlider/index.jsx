import React from "react";
import Slider from "react-slick";
import { useDarkMode } from "../../context/darkMode";
function NextArrow(props) {
  const { className, onClick } = props;
  const { darkMode } = useDarkMode();
  return (
    <div
      className={`${className} ${
        darkMode ? "slick_arrows_white" : "slick_arrows_black"
      }`}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  const { darkMode } = useDarkMode();
  return (
    <div
      className={`${className} ${
        darkMode ? "slick_arrows_white" : "slick_arrows_black"
      }`}
      onClick={onClick}
    />
  );
}
const SlickSlider = ({ children }) => {
  const options = {
    dots: false,
    infinite: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return <Slider {...options}>{children}</Slider>;
};

export default SlickSlider;
