/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router"

const CollectionCard = ({data}) => {
  const router = useRouter();
  return (
    <div
      className="rounded-2xl shadow-[0px_11px_35px_-29px_grey] cursor-pointer"
      onClick={() => router.push("/mint")}
    >
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
      </div>
    </div>
  );
}

export default CollectionCard
