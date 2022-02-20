/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

//Components
import SingleRow from "../singleRow";
import UpcomingCollectionCard from "../upcomingCollectionCard";

const HomeScreenCard = ({ data, heading }) => {
  return (
    <div className="mt-24">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold md:text-[28px]">{heading}</h1>
        <Link href="/" passHref={true}>
          <h3 className="text-[20px] cursor-pointer w-fit whitespace-nowrap">
            See All
          </h3>
        </Link>
      </div>
      <SingleRow 
        data={data} 
        renderItem={(item) => <UpcomingCollectionCard data={item}/>}
      />
    </div>
  );
};

export default HomeScreenCard;
