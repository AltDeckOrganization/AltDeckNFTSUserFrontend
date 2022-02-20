import Link from "next/link";
import React from "react";
import footerStyles from "./Footer.module.css";

function Footer() {
  return (
    <div className={`${footerStyles.footer}`}>
      <div className="">
        &copy; 2021{" "}
        <span className={`text-black font-bold  ${footerStyles.span}`}>
          AltDeck
        </span>
      </div>
      <></>
      <div>
        <ul className={`flex space-x-8  ${footerStyles.footerUl}`}>
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
