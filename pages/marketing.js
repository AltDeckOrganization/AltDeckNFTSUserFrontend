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
          All of our services are{" "}
          <a
            href="https://docs.google.com/document/d/10c9krMJSh9ncwiKi4QScsi7maJ0vtRvWYeu0tPxYN8Y/edit"
            className="underline text-[#50C9C3]"
            target={"_blank"}
            rel="noreferrer"
          >
            Here
          </a>
          <br />
          You can also book a meeting with AltDeck. Just select a date and time
          and you are good to go 😀
        </div>
      </div>
      <iframe
        src="https://calendly.com/altdecknfts/15min?month=2022-04"
        className="h-screen w-full"
      ></iframe>
      <div></div>
    </div>
  );
}

export default Markting;
