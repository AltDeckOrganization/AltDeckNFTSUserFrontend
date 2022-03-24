import React from "react";

const DropdownForm = () => {
  return (
    <>
      <div className="dropdown">
        <input type="checkbox" id="dropdown" />

        <label className="dropdown__face" htmlFor="dropdown">
          <div className="dropdown__text">Select a Package</div>

          <div className="dropdown__arrow"></div>
        </label>

        <ul className="dropdown__items">
          <li className="cursor-pointer"> None</li>
          <li className="cursor-pointer"> Standard</li>
          <li className="cursor-pointer"> Special</li>
          <li className="cursor-pointer"> Luxury</li>
        </ul>
      </div>

      <svg className="hidden">
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </svg>
    </>
  );
};

export default DropdownForm;
