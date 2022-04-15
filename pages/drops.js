import Link from "next/link";
import React, { useState, useEffect } from "react";
import DropsTable from "../components/dropsTable";
import SEO from "../components/seo/SEO";
import { useDarkMode } from "../context/darkMode";
const CORS_PROXY = "https://cors-anywhere-usman.herokuapp.com/";

const Drops = () => {
  const [dropData, setDropData] = useState({});
  const [ObjectKey, setObjectKeys] = useState([]);
  const getData = async () => {
    try {
      await fetch(CORS_PROXY + `https://api.howrare.is/v0.1/drops`)
        .then((res) => res.json())
        .then((data) => {
          setDropData(data.result.data);
          setObjectKeys(Object.keys(data.result.data));
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const { darkMode } = useDarkMode();
  return (
    <div className="xl:w-[1156px] mx-auto lg:w-[900px] w-full pt-28 px-4 overflow-hidden md:px-0">
      <SEO />
      <h1 className="text-3xl text-center">Drops</h1>
      <p className="py-4 text-center">
        Projects listed are not an endorsement or a guarantee of a listing on
        AltDeck <br />
        Apply here as an upcoming drop -{" "}
        <span className="text-[#50C9C3]">
          <Link href={"/drops-form"}>Drop Application</Link>
        </span>
      </p>
      {ObjectKey.map((item, i) => {
        return (
          <div key={i} className={`${i !== 0 ? "mt-20" : "mt-8"}`}>
            <div
              className={`text-center text-2xl py-2 rounded-md ${
                darkMode ? "bg-gray-300 text-black" : "text-white bg-gray-400"
              }`}
            >
              {Object.keys(dropData)[i]}
            </div>
            <DropsTable rows={Object.values(dropData)[i]} scroll />
          </div>
        );
      })}
    </div>
  );
};

export default Drops;
