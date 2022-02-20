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
      <div className="my-12" >
        <div className="text-center">
          <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
        </div>
        {/* Single Question Component will take only one prop that will be an array of data  */}
        <SingleQuestion data={FaqsData} />
      </div>
    </div>
  );
};

export default Faqs;
