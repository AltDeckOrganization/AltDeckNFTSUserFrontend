import React from "react";
import styles from "../styles/componentStyle/roadmap.module.css";
import { useDarkMode } from "../context/darkMode";

function Roadmap() {
  const { darkMode } = useDarkMode();
  return (
    <div className="px-5 md:px-0 xl:w-[1156px] xl:mx-auto lg:px-28 xl:px-0 w-full pt-28">
      <h1 className={`text-[#50C9C3] font-bold mb-5 text-3xl text-center`}>
        Roadmap
      </h1>
      <div className={styles.container}>
        <div
          className={`${darkMode ? "bg-[#1a1a1a]" : "bg-[#dddddd]"} ${
            styles.wrapper
          }`}
        >
          <h1 className="font-semibold text-xl">Phase 1</h1>
          <ul className={styles.sessions}>
            <li className={darkMode ? "text-[#bbbbbb]" : "text-[#525252]"}>
              <div
                className={`${darkMode ? "text-white" : "text-black"} ${
                  styles.time
                }`}
              >
                Beta Launch of Altdeck
              </div>
              <p>Launching a Beta version of Altdeck</p>
            </li>
            <li className={darkMode ? "text-[#bbbbbb]" : "text-[#525252]"}>
              <div
                className={`${darkMode ? "text-white" : "text-black"} ${
                  styles.time
                }`}
              >
                Public Release of Altdeck Out of Beta
              </div>
              <p>Altdeck made available for people online</p>
            </li>
            <li className={darkMode ? "text-[#bbbbbb]" : "text-[#525252]"}>
              <div
                className={`${darkMode ? "text-white" : "text-black"} ${
                  styles.time
                }`}
              >
                1-2 projects listed per day
              </div>
              <p>Start listing of solana based projects</p>
            </li>
          </ul>
          <h1 className="font-semibold text-xl mt-8">Phase 2</h1>
          <ul className={styles.sessions}>
            <li className={darkMode ? "text-[#bbbbbb]" : "text-[#525252]"}>
              <div
                className={`${darkMode ? "text-white" : "text-black"} ${
                  styles.time
                }`}
              >
                AltDeckNFTS launch (4444 NFT Passes)
              </div>
              <p>Launching NFT passes available for public</p>
            </li>
            <li className={darkMode ? "text-[#bbbbbb]" : "text-[#525252]"}>
              <div
                className={`${darkMode ? "text-white" : "text-black"} ${
                  styles.time
                }`}
              >
                DAO Formed exclusively for holders
              </div>
              <p>Forming a DAO only for those who hold AldeckNFTS</p>
            </li>
            <li className={darkMode ? "text-[#bbbbbb]" : "text-[#525252]"}>
              <div
                className={`${darkMode ? "text-white" : "text-black"} ${
                  styles.time
                }`}
              >
                Launch of full Solana NFT Marketplace
              </div>
              <p>Full fledge Solana NFT Marketplace will be launched</p>
            </li>
            <li className={darkMode ? "text-[#bbbbbb]" : "text-[#525252]"}>
              <div
                className={`${darkMode ? "text-white" : "text-black"} ${
                  styles.time
                }`}
              >
                Coming Soon
              </div>
              <p>
                MORE DETAILS TO BE ANNOUNCED ON BENEFITS TO ALTDECKNFTS HOLDERS
              </p>
            </li>
          </ul>
        </div>
      </div>
      <p className="leading-loose leading-6 mb-5 text-[#808080] text-base ">
        Below explains how we’re developing to be a unique launchpad platform
        and how our development towards an innovative Solana NFT Launchpad.
      </p>
      <h3 className="text-[#50C9C3] font-bold mb-5 text-xl ">
        Publicly Doxxed Projects
      </h3>
      <p className="leading-loose leading-6 mb-5 text-[#808080] text-base ">
        As you may have seen on our mint pages, we only list publicly doxxed
        projects. We display at least one of the team members information
        publicly on their team section of their mint section, this helps deter
        rug pulls
      </p>
    </div>
  );
}

export default Roadmap;
