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
import { useEffect, useState } from "react";
import axios from "axios";
import { data } from "autoprefixer";

export default function Home() {
  const [launches, setLaunches] = useState([]);
  const [itemData, setItemData] = useState([]);
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const fetchUpcomingLaunches = () => {
    axios
      .get(`${BACKEND_URL}/api/v1/launches`)
      .then((res) => {
        const { data } = res;
        setLaunches(data);
        let tempData = data.map((item) => {
          let form_data = JSON.parse(item.form_data);
          return {
            head: item.name,
            img: item.profile_image_path,
            para: form_data.description,
            date: item.form_data.launch_date,
            id: item.id,
          };
        });
        setItemData(tempData);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchUpcomingLaunches();
  }, [setLaunches]);

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
          {/* <Link href="/explore" passHref={true}>
            <h3 className="text-[20px] cursor-pointer w-fit whitespace-nowrap">
              See All
            </h3>
          </Link> */}
        </div>
        <SingleRow
          data={itemData}
          renderItem={(item, index) => (
            <UpcomingCollectionCard data={item} key={index} />
          )}
        />
      </div>
      {/* <div className="mt-24 mx-[20px]">
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
        <SingleRow 
          data={cardData}
          renderItem={(item, index) => <CollectionCard data={item} key={index}/>}
        />
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
        <SingleRow 
          data={cardData}
          renderItem={(item, index) => <CollectionCard data={item} key={index}/>}
        />
        <SingleRow 
          data={cardData}
          renderItem={(item, index) => <CollectionCard data={item} key={index}/>}
        />
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
        />
        <SingleRow 
          data={cardData}
          renderItem={(item, index) => <CollectionCard data={item} key={index}/>}
        />
      </div> */}
    </div>
  );
}
