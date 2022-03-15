/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} before:text-blackImportant`}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} before:text-blackImportant`}
      onClick={onClick}
    />
  );
}
const SingleRow = ({ data, renderItem }) => {
  const options = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
  return (
    <div className="">
      <Slider {...options}>
        {data.map((item, i) => (
          <div key={i} className="px-4">
            {renderItem(item, i)}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SingleRow;
