import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const CustomSelect = ({options, value = "", label, onSelect, emptyLabel = "", nested = false, valueKey = 'name'}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = (event) => {
    if(event.target.contains(event.relatedTarget))
      return;
    setAnchorEl(null);
  };

  const handleFocus = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleSelect = (item) => {
    onSelect(item);
    setAnchorEl(null);
  }

  return (
    <div
      tabIndex={1}
      onFocus={handleFocus}
      onBlur={handleClose}
      className="w-full h-[50px] border border-[#888888] rounded-lg flex flex-col justify-center px-4 relative ring-0 focus:ring-0 focus:ring-transparent"
    >
      {(value === "" || value === null) ? (
        <p
          className="text-[16px] text-[#888888]"
        >{label}</p>
      ) : (
        <p
          className="text-[16px] text-black1"
        >{value}</p>
      )}
      {options.length > 0 ? (
        <div
          hidden={!Boolean(anchorEl)}
          className="absolute bottom-[-140px] left-0 w-full bg-white shadow py-2 z-10"
        >
          {options.map((item, index) => (
            <button
              key={index}
              onClick={() => handleSelect(item)}
              className="w-full px-4 py-2 cursor-pointer hover:bg-[#50C9C3]/10 flex items-start"
            >
              {nested ? (
                <p>{item["valueKey"]}</p>
              ): (
                <p>{item}</p>
              )}
            </button>
          ))}
        </div>
      ) : (
        <div
          hidden={!Boolean(anchorEl)}
          className="absolute bottom-[-60px] left-0 z-10 w-full py-4 bg-white shadow ring-0 focus:ring-0 focus:ring-transparent"
        >
          <p
            className="text-center"
          >{emptyLabel}</p>
        </div>
      )}
      <span
        className="absolute right-4"
      >
        <IoIosArrowDown />
      </span>
    </div>
  )
}

export default CustomSelect;
