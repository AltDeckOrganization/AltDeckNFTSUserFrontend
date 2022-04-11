import { useWallet } from "@solana/wallet-adapter-react";
import React, { useMemo } from "react";
import { ConnectWallet } from "../components/connectWallet";

const Dashboard = () => {
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
    <div className="px-5 md:px-0 xl:w-[1156px] xl:mx-auto lg:px-28 xl:px-0  w-full pt-28">
      <h1 className="text-[#50C9C3] font-bold mb-5 text-3xl text-center">
        Dashboard
      </h1>
    </div>
  );
};

export default Dashboard;
