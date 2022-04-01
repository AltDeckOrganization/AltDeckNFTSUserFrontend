/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { useDarkMode } from "../../context/darkMode";

import ButtonCommon from "../buttonCommon";
import { imagesData } from "../data/imagesData";

const Hero = () => {
  const [isOpenAllData, setIsOpenAllData] = useState(1);
  const [filteredData, setFilteredData] = useState({});
  const [isOpenDetails, setIsOpenDetails] = useState(1);
  const { darkMode } = useDarkMode();
  const handleOpenAllDetails = (value) => {
    setIsOpenAllData(value);
  };
  const hanldeFilteredData = () => {
    const filteredDataArray = imagesData.find(
      (value) => value.id === isOpenAllData
    );
    setFilteredData(
      filteredDataArray === undefined ? imagesData[0] : filteredDataArray
    );
  };

  useEffect(() => {
    hanldeFilteredData();
  }, [isOpenAllData]);

  const handleOpenDetails = (value) => {
    setIsOpenDetails(value);
  };

  return (
    <div className="mt-6 mb-28 md:my-12 lg:block">
      <div className="text-center">
        <h5 className="my-2 text-[#808080] text-sm md:text-lg">
          Buy, Sell and Discover Rare Digital Items
        </h5>

        <h1
          className={`text-2xl font-semibold mb-5 md:text-3xl ${
            darkMode ? "text-gray-100" : "text-black "
          }`}
        >
          The Innovative Solana NFT Launchpad
        </h1>
      </div>
      <div className="grid grid-cols-1 md:gap-2 lg:gap-0 mt-6 md:grid-cols-3">
        <div className="hidden md:grid grid-cols-3 md:p-2 lg:p-0 gap-1 border-r-3">
          {imagesData.map(({ imgSrc, altText, id }) => (
            <div
              className="flex items-center justify-center mx-1 cursor-pointer "
              key={id}
              onClick={() => handleOpenAllDetails(id)}
            >
              <img
                className="m-2 rounded-md h-[50px] w-[50px] md:rounded-lg md:h-[80px] md:w-[80px] lg:h-[100px] lg:w-[100px]"
                src="/images/sampleImageHome.jpg"
                alt={altText}
              />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center md:mt-5 lg:my-2">
          <img
            className="rounded-md w-full h-[450px] px-3  mx-5 lg:w-10/12 lg:h-[100%] sm:w-96 sm:h-96 object-cover"
            src={filteredData.imgSrc}
            alt={filteredData.altText}
          />
        </div>
        <div className="overflow-x-auto my-5 md:hidden overflow-hidden">
          <div className="md:hidden gap-2 flex w-[60pc]">
            {imagesData.map(({ imgSrc, altText, id }) => (
              <div
                className=""
                key={id}
                onClick={() => handleOpenAllDetails(id)}
              >
                <img
                  className=""
                  src="/images/sampleImageHome.jpg"
                  alt={altText}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="relative my-5 flex flex-col my- md:my-2 md:px-2 lg:p-0 lg:items-start">
          <h2 className=" text-xl md:text-base font-semibold lg:text-xl md:px-0">
            3D Hungry Crows
          </h2>
          <p className="mt-2 lg:mt-1 text-[#808080] text-base md:text-sm">
            From{" "}
            <span
              className={`mr-2 font-semibold ${
                darkMode ? "text-gray-100" : "text-black"
              }`}
            >
              {filteredData.price} SOL
            </span>
            <span
              className={`font-semibold ${
                darkMode ? "text-gray-100" : "text-black"
              }
            `}
            >
              ·
            </span>
            <span
              className={`ml-2 ${darkMode ? "text-gray-100" : "text-gray-500"}`}
            >
              {" "}
              {filteredData.availableCards} of {filteredData.totalCards}{" "}
              available
            </span>
          </p>
          <div>
            <p className="md:mt-5 text-[#808080] text-base md:text-sm">
              Creator:{" "}
              <span
                className={`font-semibold ${
                  darkMode ? "text-gray-100" : "text-black"
                }
              `}
              >
                {" "}
                {filteredData.artiste}
              </span>
            </p>
            <p className="md:mt-1 text-[#808080] text-base md:text-sm">
              Minted:{" "}
              <span
                className={`font-semibold ${
                  darkMode ? "text-gray-100" : "text-black"
                }
              `}
              >
                {" "}
                {filteredData.dateCreated}
              </span>
            </p>
          </div>
          <p className="w-full mt-6 lg:mt-2 xl:line-clamp-6 leading-loose leading-6 mb-5 lg:line-clamp-4 text-base md:text-xs lg:text-sm text-[#4F4F4F] ">
            {filteredData.details}
          </p>
          <div className="md:absolute bottom-0 flex flex-col  md:mt-20 justify-center w-11/12 lg:w-full lg:justify-start sm:flex-row">
            <ButtonCommon
              isGreen={true}
              text={`Buy for ${filteredData.price} SOL`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
