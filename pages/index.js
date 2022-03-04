import Link from "next/link";

//Components
import Hero from "../components/hero";
import SingleRow from "../components/singleRow";
import HomeSectionLaunchPad from "../components/homeSectionLaunchPad";
import UpcomingCollectionCard from "../components/upcomingCollectionCard";
import CollectionCard from "../components/collectionCard";
import SlideShow from "../components/slideShow";

//SEO
import SEO from "../components/seo/SEO";

//Data
import { cardData } from "../components/data/cardData";

export default function Home() {
  return (
    <div className="xl:w-[1156px] mx-auto lg:w-[900px] w-full">
      <SEO />
      <Hero />
      <SlideShow />
      <div className="mt-24 mx-[20px]">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold md:text-[28px]">
            Upcoming Launches
          </h1>
          <Link href="/explore" passHref={true}>
            <h3 className="text-[20px] cursor-pointer w-fit whitespace-nowrap">
              See All
            </h3>
          </Link>
        </div>
        {/* <SingleRow 
          data={cardData}
          renderItem={(item, index) => <UpcomingCollectionCard data={item} key={index}/>}
        /> */}
      </div>
      <div className="mt-24 mx-[20px]">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold md:text-[28px]">
            Top Collections this Month
          </h1>
          <Link href="/" passHref={true}>
            <h3 className="text-[20px] cursor-pointer w-fit whitespace-nowrap">
              See All
            </h3>
          </Link>
        </div>
        {/* <SingleRow 
          data={cardData}
          renderItem={(item, index) => <CollectionCard data={item} key={index}/>}
        /> */}
      </div>
      <div className="mt-24 mx-[20px]">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold md:text-[28px]">
            Collections on Sale
          </h1>
          <Link href="/" passHref={true}>
            <h3 className="text-[20px] cursor-pointer w-fit whitespace-nowrap">
              See All
            </h3>
          </Link>
        </div>
        {/* <SingleRow 
          data={cardData}
          renderItem={(item, index) => <CollectionCard data={item} key={index}/>}
        />
        <SingleRow 
          data={cardData}
          renderItem={(item, index) => <CollectionCard data={item} key={index}/>}
        /> */}
      </div>
      <div className="mt-24 mx-[20px]">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold md:text-[28px]">
            Featured Collections
          </h1>
          <Link href="/" passHref={true}>
            <h3 className="text-[20px] cursor-pointer w-fit whitespace-nowrap">
              See All
            </h3>
          </Link>
        </div>
        {/* <SingleRow 
          data={cardData}
          renderItem={(item, index) => <CollectionCard data={item} key={index}/>}
        />
        <SingleRow 
          data={cardData}
          renderItem={(item, index) => <CollectionCard data={item} key={index}/>}
        />
        <SingleRow 
          data={cardData}
          renderItem={(item, index) => <CollectionCard data={item} key={index}/>}
        />
        <SingleRow 
          data={cardData}
          renderItem={(item, index) => <CollectionCard data={item} key={index}/>}
        />
        <SingleRow 
          data={cardData}
          renderItem={(item, index) => <CollectionCard data={item} key={index}/>}
        /> */}
      </div>
    </div>
  );
}
