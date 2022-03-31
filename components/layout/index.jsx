import Nav from "../navbar";
import Footer from "../footer";
import { useDarkMode } from "../../context/darkMode";

export default function Layout({ children }) {
  const { darkMode } = useDarkMode();
  return (
    <div className={`min-h-screen ${darkMode && "bg-black"}`}>
      <Nav />
      <main className={darkMode && "bg-black text-white"}>{children}</main>
      <Footer />
    </div>
  );
}
