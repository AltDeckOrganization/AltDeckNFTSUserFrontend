import React from "react";
import Image from "next/image";
import TeamImage from "../../public/girl.jpg";

const MintImageCard = ({ data }) => {
  return (
    <div className="">
      <div className="flex flex-col items-center gap-4">
        <Image
          src={data.profile_image_path}
          alt="Team Image"
          width={500}
          height={400}
        />
        <div className="text-sm flex flex-col items-center ">
          <h3 className="font-bold text-black">{data.name}</h3>
          <p className="text-[#808080]">{data.member_role}</p>
        </div>
      </div>
    </div>
  );
};

export default MintImageCard;
