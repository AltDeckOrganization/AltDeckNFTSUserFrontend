import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const UpcomingCollectionCard = ({ data }) => {
  return (
    <Link href={`/launchpad/${data.id}`}>
      <div className=" rounded-2xl shadow-[0px_11px_35px_-29px_grey] cursor-pointer">
        <div className="flex justify-center pt-4">
          <img
            src={data.img}
            className="w-full h-full mt-4 rounded-2xl"
            alt={data.head}
          />
        </div>
        <div className="px-3 pb-4">
          <h2 className="mt-5 text-xl font-medium text-center">{data.head}</h2>
          <p className="text-sm text-center text-gray-600 line-clamp-2">
            {data.para}
          </p>
          <p className="mt-2 text-center text-gray-600">{data.date}</p>
        </div>
      </div>
    </Link>
  );
};

export default UpcomingCollectionCard;
