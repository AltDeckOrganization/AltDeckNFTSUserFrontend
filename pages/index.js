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

export default function Home() {
  return (
    <div className="xl:w-[1156px] mx-auto lg:w-[900px] w-full mt-28">
      <SEO />
      <Hero />
      <SlideShow />
      <SingleRow
        data={cardData}
        heading={"Featured Collection"}
        renderItem={(item, index) => <CollectionCard data={item} key={index} />}
      />
      <SingleRow
        data={cardData}
        seeALL
        seeAllLink={`/launchpad`}
        heading={"Upcoming Launches"}
        renderItem={(item, index) => <CollectionCard data={item} key={index} />}
      />
      <SingleRow
        data={cardData}
        seeALL
        seeAllLink={`/launchpad`}
        heading={"Launchpad Collections Live"}
        renderItem={(item, index) => <CollectionCard data={item} key={index} />}
      />
    </div>
  );
}
