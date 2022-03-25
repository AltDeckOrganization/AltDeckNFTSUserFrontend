import React from "react";
import { dropData } from "../components/data/dropsData";
import DropsTable from "../components/dropsTable";

const Drops = () => {
  return (
    <div className="xl:w-[1156px] mx-auto lg:w-[900px] w-full mt-28 px-4 overflow-hidden md:px-0">
      <h1 className="text-3xl">Drops</h1>
      <p className="py-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
        quaerat? Molestiae eligendi odio, eos placeat praesentium, porro
        repellat quis, assumenda vero architecto exercitationem dolorum! Quis
        quam deleniti laboriosam, quibusdam distinctio assumenda eos! Assumenda
        hic quas fugiat quaerat adipisci, dolorem porro magnam amet nostrum nemo
        dolore, dignissimos eveniet, ad repudiandae alias?
      </p>
      {dropData.map((item, i) => (
        <div key={i} className={`${i !== 0 ? "mt-20" : "mt-8"}`}>
          <div className="text-center text-2xl py-2 bg-gray-400 text-white rounded-md">
            {item.date}
          </div>
          <DropsTable rows={item.data} scroll />
        </div>
      ))}
    </div>
  );
};

export default Drops;
