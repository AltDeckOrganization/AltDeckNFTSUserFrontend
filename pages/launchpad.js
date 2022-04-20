/* eslint-disable @next/next/no-img-element */
//mint imports
//SEO
import React, { useState, useEffect } from "react";
import SEO from "../components/seo/SEO";

//components
import LaunchpadTable from "../components/launchpadTable";
import HomeLaunchpadSteps from "../components/homeLaunchpadSteps";

//dummydata
import { launchpadData } from "../components/data/launchpadData";
import { homeLaunchpadData } from "../components/data/homeLaunchpad";

// Connect Wallet Button
import { ConnectWallet } from "../components/connectWallet";
import axios from "axios";
import { useDarkMode } from "../context/darkMode";

const LaunchPad = () => {
  // const [launches, setLaunches] = useState([]);
  // const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  const { darkMode } = useDarkMode();

  // useEffect(() => {
  //   axios.get(`${BACKEND_URL}/api/v1/launches`).then((res) => {
  //     const { data } = res;
  //     setLaunches(data);
  //     console.log(data);
  //   });
  // }, [setLaunches]);

  return (
    <div className="xl:w-[1156px] pt-20 mx-auto xl:w-[1156px] xl:mx-auto lg:px-28 w-full">
      <SEO />
      <div className="min-h-[100vh] py-[20px] mx-[20px]">
        <div className="  bg-gradient-to-r from-[#50C9C3] to-[#197F7A] rounded-md py-5 px-5">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="my-10 px-3">
              <button
                className={`rounded text-xs lg:text-sm font-semibold border-2 py-3 px-2 ${
                  darkMode
                    ? "text-black border-black"
                    : "border-white text-white"
                }`}
              >
                Featured Launch
              </button>
              <h1
                className={`text-3xl lg:text-5xl my-3 font-bold ${
                  darkMode ? "text-white" : "text-white"
                }`}
              >
                Folktales of Lunaria: Blood Moonstones:
              </h1>
              <div className="flex gap-2 lg:gap-3">
                <div
                  className={`flex flex-col px-2 w-[80px] lg:w-[50px] items-center rounded text-sm font-bold py-2 py-1 ${
                    darkMode
                      ? "text-white bg-[#207A76]"
                      : "text-white bg-[#207A76]"
                    // ? "text-black bg-[#4edfd7]"
                  }`}
                >
                  <div className="uppercase">Items</div>
                  <div>2000</div>
                </div>
              </div>
              <p
                className={`text-base my-3 text-regular ${
                  darkMode ? "text-white" : "text-white"
                }`}
              >
                Blood Moonstones have the power to corrupt Lunarians on October
                31st.
              </p>
              <ConnectWallet
                className={`text-[14px] px-14 py-2 rounded font-semibold transition border-2 shadow-md lg:mt-4 mt-4 ${
                  darkMode
                    ? "hover:border-black hover:bg-[#50c9c3] hover:text-black bg-black border-[#50C9C3] text-[#50C9C3]"
                    : "hover:border-white hover:bg-[#50c9c3] hover:text-white bg-white text-[#50C9C3]"
                }`}
              />
            </div>
            <div className=" mt-10">
              <div className="lg:w-[350px] lg:h-[350px] w-[250px] h-[250px] bg-[#50C9C3] m-auto rounded-full mb-8"></div>
            </div>
          </div>
        </div>
        {/* launchpad card */}

        <h2 className="text-[#50C9C3] font-bold text-[36px] text-center mt-20">
          Explore all our launches
        </h2>
        <p className="text-sm leading-loose leading-6 text-[#808080] md:text-center">
          AltDeckNFTS Launchpad will be supporting the following projects to
          launch their collections. We hope to create the right environment for
          success.
        </p>
        <div className="border md:border-[#50C9C3] pb-6 rounded mt-10 px-4 overflow-x-auto">
          <LaunchpadTable rows={launchpadData} />
        </div>
      </div>
    </div>
  );
};

export default LaunchPad;
