/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";

import ButtonCommon from "../buttonCommon";
import { imagesData } from "../data/imagesData";

const Hero = () => {
  const [isOpenAllData, setIsOpenAllData] = useState(1);
  const [filteredData, setFilteredData] = useState({});
  const [isOpenDetails, setIsOpenDetails] = useState(1);
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
    <div className="hidden my-12 lg:block">
      <div className="text-center">
        <h5 className="my-2 text-[#808080] text-sm md:text-lg">
          Buy, Sell and Discover Rare Digital Items
        </h5>
        <h1 className="text-3xl text-black font-semibold mb-5 md:text-3xl">
          The Innovative Solana NFT Marketplace
        </h1>
      </div>
      <div className="grid grid-cols-1 mt-6 lg:grid-cols-3">
        <div className="grid grid-cols-3 gap-1 border-r-4">
          {imagesData.map(({ imgSrc, altText, id }) => (
            <div
              className="flex items-center justify-center mx-1 cursor-pointer "
              key={id}
              onClick={() => handleOpenAllDetails(id)}
            >
              <img
                className="m-2 rounded-xl h-[100px] w-[100px] md:rounded-3xl md:h-[100px] md:w-[100px]"
                src="/images/sampleImageHome.jpg"
                alt={altText}
              />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center mt-5 lg:mt-0">
          <img
            className="rounded-3xl w-64 h-64 lg:w-10/12 lg:h-[100%] sm:w-96 sm:h-96 object-cover"
            src={filteredData.imgSrc}
            alt={filteredData.altText}
          />
        </div>
        <div className="relative flex flex-col lg:items-start">
          <h2 className="px-4 text-base font-semibold lg:text-xl lg:px-0">
            3D Hungry Crows
          </h2>
          <p className="mt-2 lg:mt-1 text-[#808080] text-sm">
            From{" "}
            <span className="mr-2 font-semibold text-black">
              {filteredData.price} SOL
            </span>
            <span className="font-semibold text-black">·</span>
            <span className="ml-2 text-gray-500">
              {" "}
              {filteredData.availableCards} of {filteredData.totalCards}{" "}
              available
            </span>
          </p>
          <div>
            <p className="mt-5 text-[#808080] text-sm">
              Creator:{" "}
              <span className="font-semibold text-black">
                {" "}
                {filteredData.artiste}
              </span>
            </p>
            <p className="mt-1 text-[#808080] text-sm">
              Minted:{" "}
              <span className="font-semibold text-black">
                {" "}
                {filteredData.dateCreated}
              </span>
            </p>
          </div>
          <p className="w-full mt-6 lg:mt-12 xl:line-clamp-6 lg:line-clamp-4 text-[16px] text-[#4F4F4F] absolute bottom-20">
            {filteredData.details}
          </p>
          <div className="absolute bottom-0 flex flex-col justify-center w-11/12 lg:w-full lg:justify-start sm:flex-row">
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
