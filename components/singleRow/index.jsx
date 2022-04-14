/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import SlickSlider from "../slickSlider";

const SingleRow = ({
  data,
  renderItem,
  heading,
  seeALL = false,
  seeAllLink,
}) => {
  return (
    <div className="mt-10 mx-[20px]">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold md:text-[28px]">{heading}</h1>
        {seeALL && seeAllLink && (
          <Link href={seeAllLink} passHref={true}>
            <h3 className="text-[20px] cursor-pointer w-fit whitespace-nowrap">
              <Link href="/launchpad">See All</Link>
            </h3>
          </Link>
        )}
      </div>
      <div className="">
        {data ? (
          <SlickSlider>
            {data.map((item, i) => (
              <div key={i} className="px-4">
                {renderItem(item, i)}
              </div>
            ))}
          </SlickSlider>
        ) : (
          <div className="min-h-[300px] flex items-center justify-center text-2xl font-semibold">
            Coming Soon
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleRow;
