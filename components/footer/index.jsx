import Link from "next/link";
import React from "react";
import { useDarkMode } from "../../context/darkMode";
import footerStyles from "./Footer.module.css";

function Footer() {
  const { darkMode } = useDarkMode();
  return (
    <div
      className={`${footerStyles.footer} flex items-center ${
        darkMode && "bg-black text-white"
      }`}
    >
      <div className="">
        &copy; 2022{" "}
        <span
          className={`text-black font-bold text-sm  ${footerStyles.span} ${
            darkMode && "text-whiteImportant"
          }`}
        >
          AltDeck
        </span>
      </div>
      <></>
      <div>
        <ul
          className={`flex space-x-8 text-[#808080] text-sm font-bold ${footerStyles.footerUl}`}
        >
          <li>
            <Link href="/tos">TOS</Link>
          </li>
          <li>
            <Link href="/faqs">FAQ</Link>
          </li>
          <li>
            <Link href="/privacy">Privacy</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
