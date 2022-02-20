import React, { useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";


const AttributesForm = () =>  {
  const [rows, setRows] = useState([1]);

  const addRow = () => {
    const copy = [...rows];
    copy.push(copy.length+1);
    setRows(copy);
  }

  const removeRow = () => {
    const copy = [...rows];
    copy.pop();
    setRows(copy);
  }

  return (
    <div
      className="flex flex-col space-y-4"
    >
      {rows.map((item, index) => (
        <div
          key={index}
          className="flex flex-row items-center justify-between w-full"
        >
          <div
            className="grid w-full grid-cols-3 gap-4"
          >
            <input 
              placeholder="trait_type(Optional)"
              className="border border-[#868686] rounded-2xl p-2 focus:ring-0 focus:outline-none focus:ring-transparent text-[12px]"
            />
            <input 
              placeholder="value"
              className="border border-[#868686] rounded-2xl p-2 focus:ring-0 focus:outline-none focus:ring-transparent text-[12px]"
            />
            <input 
              placeholder="display_type(Optional)"
              className="border border-[#868686] rounded-2xl p-2 focus:ring-0 focus:outline-none focus:ring-transparent text-[12px]"
            />
          </div>
          <button
            onClick={removeRow}
            className="ml-4 fit-content"
          >
            <AiOutlineMinusCircle 
              color="#868686"
              size={20}
            />
          </button>
        </div>
      ))}
      <button
        onClick={addRow}
        className="flex flex-row items-center text-[#868686] mt-4 text-[16px]"
      >
        <AiOutlinePlusCircle 
          color="#868686"
          className="mr-2"
          size={20}
        />
        Add Attribute
      </button>
    </div>
  )
}

export default AttributesForm
