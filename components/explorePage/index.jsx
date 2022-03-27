  import SingleCard from "../collectionCard";
import { exploreData } from "../data/exploreData";
import exploreStyles from "./Explore.module.css";
import { useState, useEffect } from "react";
import SingleRow from "../singleRow";

const filterTypes = [
  "All",
  "PFP",
  "Skull",
  "Banners",
  "Skeleton",
  "Launchpad",
  "Skeleton",
];

const ExplorePage = () => {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilterChange = (event) => {
    let filteredValues;
    if (event.target.value !== filterTypes[0]) {
      filteredValues = exploreData.filter(
        (ele) => ele.type === event.target.value
      );
    } else {
      filteredValues = exploreData;
    }
    setFilteredData(filteredValues);
  };

  useEffect(() => {
    setFilteredData(exploreData);
  }, []);

  return (
    <>
      <div className={`${exploreStyles.customPad} lg:px-20 mt-20 md:mt-28`}>
        <h1 className={`text-[#50C9C3] font-bold mb-5`}>Explore</h1>
        <div className={exploreStyles.filterButtons}>
          <ul className="overflow-x-auto h-15 pb-2 ">
            {filterTypes.map((type, index) => (
              <li key={index}>
                <button
                  value={type}
                  onClick={handleFilterChange}
                  className={`${exploreStyles.activeBtn} mr-5 `}
                >
                  {type}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <SingleRow
          data={filteredData}
          renderItem={(item, index) => <SingleCard data={item} key={index} />}
        />
      </div>
    </>
  );
};

export default ExplorePage;
