import axios from "axios";
import React, { useState } from "react";
import SEO from "../components/seo/SEO";

function Markting() {
  return (
    <div className="px-5 md:px-0 xl:w-[1156px] xl:mx-auto lg:px-28 xl:px-0 w-full pt-28 min-h-screen">
      <SEO />
      <div className="my-5">
        <div className="mx-5">
          <h1 className="text-[#50C9C3] font-bold mb-5 text-3xl text-center">
            Marketing
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeCXpxVbqQpi9MaEbQs_wiZf3gDy6maP1poSyo4LjQmg2SS5g/viewform?embedded=true"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          className="w-full h-[2200px] md:w-full md:h-[1935px]"
        >
          Loading…
        </iframe>
        <iframe
          src="https://calendly.com/altdeckmarketing/15min"
          className="h-[900px] md:h-screen w-full mt-4"
        ></iframe>
      </div>
    </div>
  );
}

export default Markting;
