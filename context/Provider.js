import dynamic from "next/dynamic";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

const WalletConnectionProvider = dynamic(
  () =>
    import("../components/walletConnectionProvider/index").then(
      (WalletConnectionProvider) => WalletConnectionProvider
    ),
  {
    ssr: false,
  }
);
import React from "react";
import DarkMode from "./darkMode";

const Provider = ({ children }) => {
  return (
    <WalletConnectionProvider>
      <WalletModalProvider>
        <DarkMode>{children}</DarkMode>
      </WalletModalProvider>
    </WalletConnectionProvider>
  );
};

export default Provider;
