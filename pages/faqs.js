import React from "react";

//Components
import SingleQuestion from "../components/singleQuestion";

//Data
import { FaqsData } from "../components/data/faqsData";
import SEO from "../components/seo/SEO";
import Link from "next/link";

const Faqs = () => {
  return (
    <div className="px-5 md:px-0 xl:w-[1156px] xl:mx-auto lg:px-20 w-full pt-20 md:pt-28">
      <SEO />

      <div className="my-5">
        <div className="mx-5">
          <h1 className="text-[#50C9C3] text-2xl md:text-3xl">User FAQ</h1>
        </div>
        {/* Single Question Component will take only one prop that will be an array of data  */}
        <SingleQuestion data={FaqsData} />
        <div className="text-[#50c9c3] text-center my-5 font-semibold text-lg">
          <Link href="creatorfaq">Creator FAQ</Link>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
