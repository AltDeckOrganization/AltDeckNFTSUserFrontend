import React from "react";
import SEO from "../components/seo/SEO";
import { useDarkMode } from "../context/darkMode";

const SingleCard = ({ heading, para }) => {
  const { darkMode } = useDarkMode();
  return (
    <div
      className={`rounded-xl mx-8 px-6 py-4 min-h-[200px] md:flex-[0_25%] mt-5 ${
        darkMode ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <h2 className="font-semibold text-xl text-center">{heading}</h2>
      <p className="mt-3 text-center">{para}</p>
    </div>
  );
};

const WhyUs = () => {
  const { darkMode } = useDarkMode();
  return (
    <div
      className={`px-5 md:px-0 xl:w-[1156px] xl:mx-auto lg:px-28 xl:px-0  w-full pt-24 ${
        darkMode && "bg-black"
      }`}
    >
      <SEO />
      <div className="my-5">
        <div className="mx-5">
          <h1 className="text-[#50C9C3] font-bold mb-5 text-3xl text-center">
            Why Choose AltdeckNFTS
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap pt-8 items-center justify-center">
        <SingleCard
          heading={"Everything Handled"}
          para={
            "This is no code experience you simple provide project details and we handle the frontend & backend for you"
          }
        />
        <SingleCard
          heading={"Customizable Smart Contracts"}
          para={
            "We can customize the smart contracts to your liking, this may include whitelisting, royalty splitting, and more!"
          }
        />
        <SingleCard
          heading={"Control"}
          para={"You can control the mechanics of your mint, during your mint"}
        />
        <SingleCard
          heading={"Live Support"}
          para={
            "We are here to assist 24/7 before, during and after your mint. So stay in constant control of the flow of things"
          }
        />
        <SingleCard
          heading={"Minimal Upfront Cost"}
          para={
            "Other than required costs to setup your mint, we take no upfront costs to profit but rather take our fee during or after the mint"
          }
        />
      </div>
    </div>
  );
};

export default WhyUs;
