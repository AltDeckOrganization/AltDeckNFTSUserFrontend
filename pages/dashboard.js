import { useWallet } from "@solana/wallet-adapter-react";
import React, { useMemo } from "react";

const Dashboard = () => {
  const { publicKey } = useWallet();
  const base58 = useMemo(() => publicKey?.toBase58(), [publicKey]);

  if (base58) {
    return <div className="pt-20">You are logged in</div>;
  } else {
    return <div className="pt-20">Not logged in</div>;
  }
};

export default Dashboard;
