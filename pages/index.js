import Link from "next/link";

//Components
import Hero from "../components/hero";
import SlideShow from "../components/slideShow";

//SEO
import SEO from "../components/seo/SEO";

//Data

import { upcomingLaunches, lanchpadCards } from "../components/data/cardData";
import SingleRow from "../components/singleRow";
import CollectionCard from "../components/collectionCard";
import { useDarkMode } from "../context/darkMode";

export default function Home() {
  const { darkMode } = useDarkMode();
  return (
    <div
      className={`px-5 md:px-0 xl:w-[1156px] xl:mx-auto lg:px-28 xl:px-0  w-full pt-28 ${
        darkMode && "bg-black"
      }`}
    >
      <SEO />
      <Hero />
      <SingleRow
        heading={"Featured Collection"}
        renderItem={(item, index) => (
          <CollectionCard data={item} key={index} hover />
        )}
      />
      <SingleRow
        data={upcomingLaunches}
        heading={"Upcoming Launches"}
        renderItem={(item, index) => (
          <CollectionCard data={item} key={index} hover />
        )}
      />
      <SingleRow
        data={lanchpadCards}
        heading={"Launchpad Collections Live"}
        renderItem={(item, index) => (
          <CollectionCard data={item} key={index} hover />
        )}
      />
    </div>
  );
}
