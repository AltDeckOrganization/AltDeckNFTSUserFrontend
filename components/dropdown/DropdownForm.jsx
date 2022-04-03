import React, { useState } from "react";
import { useDarkMode } from "../../context/darkMode";

const DropdownForm = () => {
  const [dropdownVal, setDropdownVal] = useState("None");
  const [inputChecked, setInputChecked] = useState(false);
  const { darkMode } = useDarkMode();
  return (
    <>
      <div className="dropdown z-10">
        <input type="checkbox" id="dropdown" checked={inputChecked} />

        <label
          className={`dropdown__face ${darkMode && "bg-black"}`}
          htmlFor="dropdown"
          onClick={() => setInputChecked(!inputChecked)}
        >
          <div className="dropdown__text">{dropdownVal}</div>

          <div className="dropdown__arrow"></div>
        </label>

        <ul
          className={`dropdown__items ${
            darkMode && "bg-black before:bg-black"
          }`}
          onClick={() => setInputChecked(!inputChecked)}
        >
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
      {inputChecked && (
        <div
          className="z-0 fixed inset-0"
          onClick={() => setInputChecked(!inputChecked)}
        />
      )}
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
