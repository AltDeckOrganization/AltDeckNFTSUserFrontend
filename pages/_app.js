import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import dynamic from "next/dynamic";

//components
import Layout from "../components/layout";

//styles
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
require("@solana/wallet-adapter-react-ui/styles.css");

const WalletConnectionProvider = dynamic(
  () =>
    import("../components/walletConnectionProvider/index").then(
      (WalletConnectionProvider) => WalletConnectionProvider
    ),
  {
    ssr: false,
  }
);

function MyApp({ Component, pageProps }) {
  return (
    <WalletConnectionProvider>
      <WalletModalProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </WalletModalProvider>
    </WalletConnectionProvider>
  );
}

export default MyApp;
