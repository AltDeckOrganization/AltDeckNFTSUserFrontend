import React from "react";
import { useDarkMode } from "../../context/darkMode";

const ButtonCommon = ({ isGreen = false, text }) => {
  const { darkMode } = useDarkMode();
  return (
    <button
      className={`w-full md:mt-6 rounded-md py-2 px-4  border-2 border-[#50C9C3] sm:px-2
      ${
        isGreen
          ? darkMode
            ? "text-black bg-[#50C9C3]"
            : "text-white bg-[#50C9C3]"
          : "text-[#50C9C3] bg-white"
      }
      `}
    >
      {text}
    </button>
  );
};

export default ButtonCommon;
