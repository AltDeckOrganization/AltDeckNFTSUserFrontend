import { GatewayStatus, useGateway } from "@civic/solana-gateway-react";
import React, { useEffect } from "react";

export const MintButton = ({ mintToken, candyMachine }) => {
  const { requestGatewayToken, gatewayStatus } = useGateway();

  useEffect(() => {
    if (
      gatewayStatus === GatewayStatus.COLLECTING_USER_INFORMATION &&
      clicked
    ) {
      // when user approves wallet verification txn
      console.log("verifing");
    } else if (gatewayStatus === GatewayStatus.ACTIVE) {
      console.log("Verified human, now minting...");
      mintToken();
    }
  }, [gatewayStatus, mintToken]);

  return (
    <button
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mt-5 border border-blue-500 hover:border-transparent rounded"
      onClick={async () => {
        if (
          candyMachine?.state.gatekeeper &&
          gatewayStatus !== GatewayStatus.ACTIVE
        ) {
          console.log("Requesting gateway token");

          let test = await requestGatewayToken();
          console.log(test);
        } else {
          console.log("Minting...");
          await mintToken();
        }
      }}
    >
      Mint Now!
    </button>
  );
};
