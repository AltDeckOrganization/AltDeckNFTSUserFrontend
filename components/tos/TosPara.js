import React from "react";

function TosPara({ title, desc, titleNumber }) {
  return (
    <div>
      <p className="text-base text-black text-sm font-bold">
        <span className="text-[#50C9C3]">{titleNumber}. </span>
        {title}
      </p>
      <p className="leading-loose leading-6 mb-5">{desc}</p>
    </div>
  );
}

export default TosPara;
