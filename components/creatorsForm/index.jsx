import React, {useState} from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

//components
import CustomSlider from "../CustomSlider";

const CreatorsForm = ({creator}) => {
  const [rows, setRows] = useState([{ creator: creator, share: 100 }]);
  const [newCreator, setNewCreator] = useState("");

  const addRow = () => {
    if(newCreator === "")
      return;
    const copy = [...rows];
    copy.push({
      creator: newCreator,
      share: 0
    });
    setNewCreator("");
    setRows(copy);
  }

  const handleChange = (_, newValue, __, index) => {
    const newRows = [...rows];
    newRows.map((item, i) => {
      if(i === index)
        item.share = newValue
    });
    setRows(newRows);
  }

  return (
    <div className="flex flex-col">
      {rows.map((item, index) => (
        <div
          key={index}
        >
          <p
            className="text-gray1 font-semibold text-[16px] mt-6"
          >{item.creator}</p>
          <div
            className="flex flex-row w-[50%] items-center mt-2 space-x-10"
          >
            <div
              className="w-[150px] h-[34px]"
            >
              <CustomSlider 
                size="small"
                defaultValue={item.share}
                aria-label="royalty slider"
                valueLabelDisplay="off"
                onChange={(e, newValue, activeThumb) => handleChange(e, newValue, activeThumb, index)}
              />
            </div>
            <p
              className="text-[#888888] font-semibold"
            >{rows[index].share}%</p>
          </div>
        </div>
      ))}
      <div
        className="flex flex-row items-center mt-8 space-x-8"
      >
        <input 
          value={newCreator}
          onChange={(e) => setNewCreator(e.target.value)}
          placeholder="Add another creator wallet address"
          className="border border-gray1 rounded-lg h-[50px] w-[415px] pl-4 ring-0 focus:ring-0 focus:ring-transparent focus:outline-none"
        />
        <button
          onClick={addRow}
          className="flex flex-row items-center text-gray1"
        >
          <AiOutlinePlusCircle 
            color="#868686"
            className="mr-2"
          />
          Add Creator
        </button>
      </div>
    </div>
  )
}

export default CreatorsForm;
