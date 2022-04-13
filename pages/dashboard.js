import { useWallet } from "@solana/wallet-adapter-react";
import React, { useMemo, useState } from "react";
import { ConnectWallet } from "../components/connectWallet";

const Dashboard = () => {
  const [value, setValue] = useState(0);
  const { publicKey } = useWallet();
  const base58 = useMemo(() => publicKey?.toBase58(), [publicKey]);

  if (!base58) {
    return (
      <div className="px-5 md:px-0 xl:w-[1156px] xl:mx-auto lg:px-28 xl:px-0 text-center w-full pt-28">
        <h1 className="text-[#50C9C3] font-bold mb-5 text-3xl">
          You are not Logged In.
        </h1>
        Please Connect your wallet
        <div className="flex items-center justify-center">
          <ConnectWallet className="flex justify-center items-center w-fit border border-[#50C9C3] text-[#50c9c3] shadow-sm px-4 py-2 text-base  w-full  border rounded rounded-md  mt-5  font-medium rounded " />
        </div>
      </div>
    );
  }
  return (
    <div className="px-5 md:px-0 xl:w-[1156px] xl:mx-auto lg:px-28 xl:px-0 w-full pt-28">
      <h1 className="text-[#50C9C3] font-bold mb-5 text-3xl text-center">
        Dashboard
      </h1>
      <div className="grid grid-cols-6 h-[50vh] gap-x-4">
        <div className="flex flex-col justify-between">
          <div>
            <div
              className={`my-2 text-white py-2 px-2 text-center rounded-xl cursor-pointer hover:bg-[#50c9c3] hover:text-black border border-[#50C9C3] ${
                value === 0 && "text-black bg-[#50c9c3]"
              }`}
              onClick={() => setValue(0)}
            >
              Statistics
            </div>
            <div
              className={`my-2 text-white py-2 px-2 text-center rounded-xl cursor-pointer hover:bg-[#50c9c3] hover:text-black border border-[#50C9C3] ${
                value === 1 && "text-black bg-[#50c9c3]"
              }`}
              onClick={() => setValue(1)}
            >
              My Applications
            </div>
          </div>
          <div
            className={`my-2 text-white py-2 px-2 text-center rounded-xl cursor-pointer hover:bg-[#50c9c3] hover:text-black border border-[#50C9C3] ${
              value === 2 && "text-black bg-[#50c9c3]"
            }`}
            onClick={() => setValue(2)}
          >
            Support
          </div>
        </div>
        <div className="col-span-5 my-2">
          {value === 0 && (
            <div className="grid grid-rows-3 grid-flow-col gap-4 h-full">
              <div className="col-span-2 bg-[#1a1a1a] rounded-xl flex items-center justify-center h-full w-full">
                02
              </div>
              <div className="row-span-2 col-span-2 bg-[#1a1a1a] rounded-xl flex items-center justify-center h-full w-full">
                03
              </div>
              <div className="row-span-2 col-span-2 bg-[#1a1a1a] rounded-xl flex items-center justify-center h-full w-full">
                03
              </div>
              <div className="col-span-2 bg-[#1a1a1a] rounded-xl flex items-center justify-center h-full w-full">
                02
              </div>
            </div>
          )}
          {value === 1 && (
            <div className="grid grid-rows-3 grid-flow-col gap-4 h-full">
              <div className="col-span-2 bg-[#1a1a1a] rounded-xl flex items-center justify-center h-full w-full">
                02
              </div>
              <div className="row-span-2 col-span-2 bg-[#1a1a1a] rounded-xl flex items-center justify-center h-full w-full">
                03
              </div>
              <div className="row-span-2 col-span-2 bg-[#1a1a1a] rounded-xl flex items-center justify-center h-full w-full">
                03
              </div>
              <div className="col-span-2 bg-[#1a1a1a] rounded-xl flex items-center justify-center h-full w-full">
                02
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
