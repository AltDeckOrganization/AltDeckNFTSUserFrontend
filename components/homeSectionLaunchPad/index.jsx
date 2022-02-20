import React from "react";

//Components
import HomeLaunchpadSteps from "../homeLaunchpadSteps";

//Data
import {homeLaunchpadData} from '../data/homeLaunchpad'

const HomeSectionLaunchPad = () => {
  return (
    <div className="mb-20 mx-[20px]">
      <div className="flex items-center my-20">
        <div className="bg-[#50C9C3] text-white rounded-xl w-full h-[400px] px-[5%] flex flex-col justify-center">
          <h1 className="text-3xl font-bold sm:text-6xl w-[40%]">
            ALT DECK LAUNCHPAD
          </h1>
          <p className="text-md w-fit">
            A simple process to create and sell your NFTs
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2">
      {homeLaunchpadData.map(({stepNumber, heading, para}) => (
        <HomeLaunchpadSteps key={stepNumber} id={stepNumber} heading={heading} para={para}/>
      ))}
      </div>
    </div>
  );
};

export default HomeSectionLaunchPad;
