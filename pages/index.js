import Link from "next/link";

//Components
import Hero from "../components/hero";
import SlideShow from "../components/slideShow";

//SEO
import SEO from "../components/seo/SEO";

//Data

import { cardData } from "../components/data/cardData";
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
      {/* <SlideShow />  */}
      <SingleRow
        data={cardData}
        heading={"Featured Collection"}
        renderItem={(item, index) => <CollectionCard data={item} key={index} />}
      />
      <SingleRow
        data={cardData}
        seeALL
        seeAllLink={`mintpage/37`}
        heading={"Upcoming Launches"}
        renderItem={(item, index) => <CollectionCard data={item} key={index} />}
      />
      <SingleRow
        data={cardData}
        seeALL
        seeAllLink={`mintpage/37`}
        heading={"Launchpad Collections Live"}
        renderItem={(item, index) => <CollectionCard data={item} key={index} />}
      />
    </div>
  );
}
