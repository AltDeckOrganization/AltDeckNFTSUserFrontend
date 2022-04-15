/* eslint-disable @next/next/no-img-element */

import React, { useState } from "react";
import { useDarkMode } from "../../context/darkMode";
import Link from "next/link";

const CollectionCard = ({ data, hover = false }) => {
  const [hoverImg, setHover] = useState(true);
  const { darkMode } = useDarkMode();
  return (
    <a
      className="rounded-2xl shadow-[0px_11px_35px_-29px_grey] cursor-pointer"
      href={data.link}
      target={"_blank"}
      rel="noreferrer"
    >
      <div>
        <div className={`flex justify-center pt-4`}>
          {hoverImg ? (
            <img
              src={data.img}
              onMouseEnter={() => setHover(false)}
              onMouseLeave={() => setHover(true)}
              className={`w-full h-full mt-4 rounded-2xl ${
                hover && "hover:hidden"
              }`}
              alt={data.head}
            />
          ) : (
            <div
              className={`
              ${
                hover &&
                "flex items-center justify-center text-center h-[180px] rounded-xl w-full"
              } ${darkMode ? "bg-gray-800" : "bg-gray-200"}
            `}
              onMouseEnter={() => setHover(false)}
              onMouseLeave={() => setHover(true)}
            >
              {data.wlSale} <br />
              {data.publicSale}
            </div>
          )}
        </div>
        <div>
          <h2 className="mt-5 text-xl font-medium text-center">{data.head}</h2>
          <p className="text-sm xl:text-base text-center text-gray-600 line-clamp-2">
            {data.para}
          </p>
        </div>
      </div>
    </a>
  );
};

export default CollectionCard;
