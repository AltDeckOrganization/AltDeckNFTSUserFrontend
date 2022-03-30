import Nav from "../navbar";
import Footer from "../footer";
import { useDarkMode } from "../../context/darkMode";

export default function Layout({ children }) {
  const { darkMode } = useDarkMode();
  return (
    <>
      <SEO />
      <Nav />
      <main className={darkMode && "bg-black text-white"}>{children}</main>
      <Footer />
    </>
  );
}
