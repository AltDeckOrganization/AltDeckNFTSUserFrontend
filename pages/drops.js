import React from "react";
// import { dropData } from "../components/data/dropsData";
import DropsTable from "../components/dropsTable";
import SEO from "../components/seo/SEO";
import { useDarkMode } from "../context/darkMode";

export async function getStaticProps() {
  const res = await fetch(`https://api.howrare.is/v0.1/drops`);
  const data = await res.json();
  const dropsData = data.result.data;
  const keys = Object.keys(data.result.data);
  // console.log(dropsData)

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { dropData: dropsData, ObjectKeys: keys },
  };
}

const Drops = ({ dropData, ObjectKeys }) => {
  let i;
  console.log(dropData);
  const { darkMode } = useDarkMode();
  return (
    <div className="xl:w-[1156px] mx-auto lg:w-[900px] w-full pt-28 px-4 overflow-hidden md:px-0">
      <SEO />
      <h1 className="text-3xl text-center">Drops</h1>
      <p className="py-4 text-center">
        Projects listed are not an endorsement or a guarantee of a listing on
        AltDeck <br />
        Apply here as an upcoming drop - Drop Application
      </p>
      {ObjectKeys.map((item, i) => {
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
