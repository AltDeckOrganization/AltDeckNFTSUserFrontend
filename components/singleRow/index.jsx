/* eslint-disable @next/next/no-img-element */
import React from "react";
import SlickSlider from "../slickSlider";

const SingleRow = ({ data, renderItem }) => {
  return (
    <div className="">
      <SlickSlider>
        {data.map((item, i) => (
          <div key={i} className="px-4">
            {renderItem(item, i)}
          </div>
        ))}
      </SlickSlider>
    </div>
  );
};

export default SingleRow;
