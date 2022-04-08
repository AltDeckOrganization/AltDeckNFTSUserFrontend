import Image from "next/image";
import CollectionItems from "../components/collectionItems/collectionItems";
import CollCard from "../components/profile/collection";
import collectionStyles from "../styles/collection.module.css";
import Select from "../components/select/select";

import SingleRow from "../components/singleRow";
import CollectionCard from "../components/collectionCard";
import Link from "next/link";
import { cardData } from "../components/data/cardData";
import SEO from "../components/seo/SEO";

function collection() {
  return (
    <div>
      <CollCard />
      <SEO />

      <div className={collectionStyles.items}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <CollectionItems number="10k" title="items" />
          <CollectionItems number="4.5k" title="owners" />
          <CollectionItems number="32" title="floor" />
          <CollectionItems number="1M" title="volume" />
        </div>
      </div>
      <div className=" text-center collection__p text-sm">
        Deep in the heart of Dingus Forest echoes the sleepless cries of a troop
        of 10,000 apes. These aren’t just regular apes, however. These are
        degenerate apes.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 main ">
        <div className="px-3">
          <Select />
          <Select />
          <Select />
        </div>
        <div className="col-span-2">
          <div className="flex bg-gray-300 p-7 rounded-lg  justify-between">
            <div className="flex justify-center justify-items-center">
              <Image
                src="/images/Icon.svg"
                width="10"
                height="10"
                alt="filters"
              />
              <div className="text-sans uppercase pl-2 text-xs text-gray-500">
                Filters
              </div>
            </div>
            <div className="flex justify-center justify-items-center">
              <Image
                src="/images/Magnifier.svg"
                width="15"
                height="15"
                alt="Magnifier"
              />
              <div className="text-sans uppercase pl-1 text-xs text-gray-500">
                Price: Low to High
              </div>
            </div>
          </div>
          <div className="text-lg font-bold mt-5">43 items</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"></div>

          <div className="mt-2 ">
            <SingleRow
              data={cardData}
              renderItem={(item) => <CollectionCard data={item} />}
            />
            <SingleRow
              data={cardData}
              renderItem={(item) => <CollectionCard data={item} />}
            />
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .collection__p {
            margin: 10px 25%;
          }
          .main {
            margin: 6%;
          }
          .select {
            width: 100%;
          }
        `}
      </style>
    </div>
  );
}

export default collection;
