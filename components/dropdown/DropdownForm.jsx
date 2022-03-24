import React, { useState } from "react";

const DropdownForm = () => {
  const [dropdownVal, setDropdownVal] = useState("Select a Package");
  return (
    <>
      <div className="dropdown">
        <input type="checkbox" id="dropdown" />

        <label className="dropdown__face" htmlFor="dropdown">
          <div className="dropdown__text">{dropdownVal}</div>

          <div className="dropdown__arrow"></div>
        </label>

        <ul className="dropdown__items">
          <li className="cursor-pointer" onClick={() => setDropdownVal("None")}>
            None
          </li>
          <li
            className="cursor-pointer"
            onClick={() => setDropdownVal("Standard")}
          >
            Standard
          </li>
          <li
            className="cursor-pointer"
            onClick={() => setDropdownVal("Special")}
          >
            Special
          </li>
          <li
            className="cursor-pointer"
            onClick={() => setDropdownVal("Luxury")}
          >
            Luxury
          </li>
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
