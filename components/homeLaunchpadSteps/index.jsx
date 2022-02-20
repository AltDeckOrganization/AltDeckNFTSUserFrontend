import React from "react";

const HomeLaunchpadSteps = ({ id, heading, para, background = false }) => {
  return (
    <div className={`flex flex-col items-center mt-12 lg:mt-0 lg:items-start ${background ? "bg-[#EFFAF9] rounded-2xl px-8 pt-8 w-[260px] mx-auto" : "w-full"}`}>
      <div className="bg-[#50C9C3] w-[27px] h-[27px] rounded-md text-white font-bold text-center flex items-center justify-center">
        {id}
      </div>
      <div className="flex flex-col items-center my-5 text-center lg:items-start lg:text-left">
        <h3 className="font-bold text-md">{heading}</h3>
        <p className="text-sm text-gray-500">{para}</p>
      </div>
    </div>
  );
};

export default HomeLaunchpadSteps;
