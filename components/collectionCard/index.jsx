/* eslint-disable @next/next/no-img-element */

const CollectionCard = ({ data }) => {
  return (
    <a
      className="rounded-2xl shadow-[0px_11px_35px_-29px_grey] cursor-pointer"
      href={data.link}
      target={"_blank"}
      rel="noreferrer"
    >
      <div className="flex justify-center pt-4">
        <img
          src={data.img}
          className="w-full h-full mt-4 rounded-2xl"
          alt={data.head}
        />
      </div>
      <div>
        <h2 className="mt-5 text-xl font-medium text-center">{data.head}</h2>
        <p className="text-sm xl:text-base text-center text-gray-600 line-clamp-2">
          {data.para}
        </p>
      </div>
    </a>
  );
};

export default CollectionCard;
