import React, { useState } from "react";
import MintImageCard from "../mint/MintImageCard";

const MintTab = ({ roadmap, team }) => {
  const [visible, setVisible] = useState(false);

  const onTitlehandle = () => {
    setVisible(false);
  };

  const onTitlSecondehandle = () => {
    setVisible(true);
  };

  return (
    <div className="mx-5">
      <div className="flex gap-4 mb-3">
        <div className="flex flex-col gap-2">
          <div
            className={`text-xl font-semibold text-[#50C9C3] `}
            onClick={onTitlehandle}
          >
            Roadmap
          </div>
          <div
            className={`w-full h-[3px] bg-[#50c9c4] ${
              !visible ? "block" : "hidden"
            }`}
          ></div>
        </div>

        <div className="flex flex-col gap-2">
          <div
            className="text-xl font-semibold text-[#50C9C3] "
            onClick={onTitlSecondehandle}
          >
            Team
          </div>
          <div
            className={`w-full h-[3px] bg-[#50c9c4] ${
              visible ? "block" : "hidden"
            }`}
          ></div>
        </div>
      </div>

      {visible ? (
        <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5 ">
          {team.map((item, i) => (
            <MintImageCard data={item} key={i} />
          ))}
        </div>
      ) : (
        <div className="text-sm text-[#808080] my-5 tracking-wide leading-loose leading-6">
          <div className="">
            {roadmap?.map((item, i) => (
              <div key={i}>
                <h3 className="text-black font-semibold">{item.phase}</h3>
                {item.lists.map((row, i) => (
                  <p className="mt-3" key={i}>
                    <span className="h-[20px] w-[20px] bg-[#808080]"></span>-
                    {row.list}
                  </p>
                ))}
                {/* <p className="mt-3">
                  <span className="h-[20px] w-[20px] bg-[#808080]"></span>-
                  HungryCrowsDAO is a decentralized autonomous organization made
                  up of crow holders owning more than 3 crows, while every
                  holder gets the chance to be benefited regardless of if they
                  own more than 1.
                </p>
                <p className="mt-3">
                  <span className="h-[20px] w-[20px] bg-[#808080]"></span>- A
                  council will be made for this DAO 1 week after the release of
                  the DAO voted for 5 members
                </p>
                <p className="mt-3">
                  <span className="h-[20px] w-[20px] bg-[#808080]"></span>- DAO
                  Members (not normal holders) will have voting rights for our
                  phase 1, phase 2, etc
                </p>
                <p className="mt-3">
                  - DAO Members (not normal holders) will have voting rights for
                  our phase 1, phase 2, etc
                </p>
                <p className="mt-3">- 1-3 crows = holders role</p>
                <p className="mt-3">- 3+ crows = holders + DAO role</p> */}
              </div>
            ))}
          </div>
          {/* <div className='mt-5'>
						<h3 className='text-black font-semibold'>Phase 2</h3>
						<p className='mt-3'>
							<span className='font-bold'>Notes:</span> By creating this DAO,
							this gives more authoritative control to the community making us
							more decentralized. This also allows me as the founder for more
							time to build AltDeckNFTS and fund our future roadmap for crows! This
							is just the start!
						</p>
					</div> */}
        </div>
      )}
    </div>
  );
};

export default MintTab;
