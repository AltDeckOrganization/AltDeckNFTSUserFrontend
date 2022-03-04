import React from "react";

//Components
import SingleQuestion from "../components/singleQuestion";

//Data
import { FaqsData } from "../components/data/faqsData";

const Faqs = () => {
  return (
    <div 
      className="xl:w-[1156px] mx-auto lg:w-[900px] w-full"
    >
      <div className="my-5" >
        <div className="mx-5">
          <h1 className="text-[#50C9C3] text-2xl md:text-3xl">Frequently Asked Questions</h1>
        </div>
        {/* Single Question Component will take only one prop that will be an array of data  */}
        <SingleQuestion data={FaqsData} />
      </div>
    </div>
  );
};

export default Faqs;
