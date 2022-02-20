/* eslint-disable @next/next/no-img-element */
import React from "react";

const SingleRow = ({ data, renderItem }) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 md:gap-7 sm:grid-cols-2">
      {data.map((item, i) => (
        renderItem(item, i)
      ))}
    </div>
  );
};

export default SingleRow;
