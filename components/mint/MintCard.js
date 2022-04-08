import React from "react";
import { useDarkMode } from "../../context/darkMode";

const MintCard = ({ data }) => {
  const { darkMode } = useDarkMode();
  return (
    <div className="my-3">
      <div className="flex justify-between items-center">
        <div
          className={`bg-[#50C9C3] rounded text-xs p-1 ${
            darkMode ? "text-black" : "text-white"
          }`}
        >
          Whitelist
        </div>
        <div className="text-[#50c0c3] text-xs">{data ? data.time : ""}</div>
      </div>
      <div className="mt-3 flex gap-1 md:gap-2 items-center text-[#808080]">
        <div className="text-xs">
          WHITELIST
          <span className="font-bold text-bold">{data ? data.number : ""}</span>
        </div>
        <div className="w-[5px] h-[5px] bg-[#50C9C3] rounded rounded-full"></div>

        {/* <div className='text-xs'>
					WHITELIST <span className='font-bold text-bold'>2050</span>
				</div>
                <div className="w-[5px] h-[5px] bg-[#50C9C3] rounded rounded-full"></div>
                
				<div className='text-xs'>
					WHITELIST <span className='font-bold text-bold'>2050</span>
				</div> */}
      </div>
    </div>
  );
};

export default MintCard;
