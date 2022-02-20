import React from "react";

const ButtonCommon = ({ isGreen = false, text }) => {
  return (
    <button
      className={`w-full mt-6 rounded-xl py-2 px-4 mr-4 border-2 border-[#50C9C3] sm:px-2
      ${isGreen ? "text-white bg-[#50C9C3] " : "text-[#50C9C3] bg-white"}
      `}
    >
      {text}
    </button>
  );
};

export default ButtonCommon;
