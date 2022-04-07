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
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeCXpxVbqQpi9MaEbQs_wiZf3gDy6maP1poSyo4LjQmg2SS5g/viewform?embedded=true"
        width="640"
        height="1935"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading…
      </iframe>
      <iframe
        src="https://calendly.com/altdeckmarketing/15min"
        className="h-screen w-full"
      ></iframe>
      <div></div>
    </div>
  );
}

export default Markting;
