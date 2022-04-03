import React from "react";
import { useDarkMode } from "../../context/darkMode";

function TosPara({ title, desc, titleNumber }) {
  const { darkMode } = useDarkMode();
  return (
    <div>
      <p
        className={`text-base text-sm font-bold ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        {titleNumber && <span className="text-[#50C9C3]">{titleNumber}. </span>}
        {title}
      </p>
      <p className="leading-loose leading-6 mb-5">{desc}</p>
    </div>
  );
}

export default TosPara;
