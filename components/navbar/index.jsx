import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
// import { Menu, MenuItem } from "@mui/material";
import MenuIcon from "../../public/menu.svg";
import CloseIcon from "../../public/close.svg";
import Logo from "../../public/logo.svg";

import { Fragment, useMemo } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

// styles
import navStyles from "./Navbar.module.css";

//icons
import searchIcon from "../../assets/icons/search.svg";

// Connect Wallet Button
import { ConnectWallet } from "../connectWallet";
import React from "react";
import Dropdown from "../dropdown";
import DropdownSmall from "../dropdown/DropdownSmall";
import { useState } from "react";
import { Button } from "../connectWallet/Button";
import { useDarkMode } from "../../context/darkMode";

const navigation = [
  { name: "Apply", margin: "px-4" },
  { name: "Browse", margin: "px-4" },
  { name: "Profile", href: "/profile", margin: "px-4" },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const router = useRouter();
  const [browseAnchorEl, setBrowseAnchorEl] = React.useState(null);
  const [openMenu, setOpenMenu] = React.useState(false);
  const [applyAnchorEl, setApplyAnchorEl] = React.useState(null);
  const openBrowse = Boolean(browseAnchorEl);
  const openApply = Boolean(applyAnchorEl);
  const { darkMode, setDarkMode } = useDarkMode();

  const handleMenuClick = (e) => {
    setOpenMenu((prevState) => !prevState);
  };
  // const handleClick = (event, item) => {
  //   if (item.name === 'Browse') setBrowseAnchorEl(event.target)
  //   else if (item.name === 'Apply') setApplyAnchorEl(event.target)
  //   else router.push(item.href)
  // }

  // const handleBrowseMenuClose = () => {
  //   setBrowseAnchorEl(null)
  // }

  // const handleApplyMenuClose = () => {
  //   setApplyAnchorEl(null)
  // }

  return (
    <>
      <div
        className={`navbar flex items-center justify-between px-2 md:px-5 py-5 z-50 lg:px-10 fixed left-0 top-0 w-full ${
          darkMode ? "bg-black" : "bg-white"
        }`}
      >
        <div className="flex items-center">
          <div className="logo">
            <Link href="/">
              <a className={darkMode && "text-white"}>
                <h1 className="text-xl font-bold">AltDeck</h1>
              </a>
            </Link>
          </div>

          {/* SEARCH BAR HERE */}
          {/* <div
            className={`mt-1 rounded-lg flex flex-row items-center border border-[#E3E1E3] px-2 py-2 lg:w-[300px] md:w-[510px] xl:w-[450px] ml-10`}
          >
            <Image src={searchIcon} alt="" className="w-full" />
            <input
              type="text"
              name="search"
              id="search"
              className={`w-full border-0 text-gray-700 leading-tight focus:ring-0 focus:outline-none ml-2 text-xs ${
                darkMode ? "bg-black" : "bg-white"
              }`}
              placeholder="Search item here"
            />
          </div> */}
        </div>
        <ul className=" items-align hidden lg:flex">
          <li>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button
                  className={`inline-flex justify-center w-full  shadow-sm px-4 py-2 text-sm font-medium ${
                    darkMode
                      ? "bg-black text-gray-400 hover:bg-black hover:text-white"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Link href="/dashboard">
                    <div>Dashboard</div>
                  </Link>
                </Menu.Button>
              </div>
            </Menu>
            <Dropdown
              title="Browse"
              link1="Launchpad"
              apply="launchpad"
              link2="Drops"
              apply2="drops"
            />
          </li>
          <li className="mx-3">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button
                  className={`inline-flex justify-center w-full  shadow-sm px-4 py-2 text-sm font-medium ${
                    darkMode
                      ? "bg-black text-gray-400 hover:bg-black hover:text-white"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Link href="/roadmap">
                    <div>Roadmap</div>
                  </Link>
                </Menu.Button>
              </div>
            </Menu>

            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button
                  className={`inline-flex justify-center w-full  shadow-sm px-4 py-2 text-sm font-medium ${
                    darkMode
                      ? "bg-black text-gray-400 hover:bg-black hover:text-white"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Link href="/marketing">
                    <div>Marketing</div>
                  </Link>
                </Menu.Button>
              </div>
            </Menu>
          </li>
          <li className="mx-3">
            <Dropdown
              title="Apply"
              link1="Apply for launchpad"
              apply="form-launchpad"
              link2="Apply for drop"
              apply2="drops-form"
            />
          </li>

          {/* <li className="mx-3">
            <Dropdown
              title="Browse"
              link1="Launchpad"
              link2="Stats"
              apply="launchpad"
              apply2="stats"
            />
          </li> */}

          {/* <li className="mx-3">
            <Link href="/profile">
              <a className="inline-flex justify-center w-full  shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                Profile
              </a>
            </Link>
          </li> */}

          <li className="mx-3 ">
            <Dropdown
              title="Contact"
              link1="Twitter"
              link2="Medium"
              link3="Discord"
              link4="Email"
              link5="TOS"
              link6="FAQs"
              apply="https://www.twitter.com/@AltDeck_io"
              apply2="https://medium.com/@AltDeck"
              apply3="https://discord.gg/ec9cZCCSHK"
              apply4="mailto:contact@altdeck.io"
              apply5="tos"
              apply6="faqs"
            />
          </li>
          <li className="mx-3 ">
            <Button
              onClick={() => setDarkMode(!darkMode)}
              className={`inline-flex justify-center w-full border border-[#50C9C3] bg-[#50c9c3] shadow-sm px-4 py-2 text-sm font-medium rounded ${
                darkMode ? "text-black" : "text-white"
              }`}
            >
              {darkMode ? "Dark " : "Light "}Mode
            </Button>
          </li>
          <li className="mx-3">
            <ConnectWallet className="inline-flex justify-center w-full border border-[#50C9C3] text-[#50c9c3] shadow-sm px-4 py-2 text-sm font-medium rounded " />
          </li>
        </ul>

        {/* MENU ICON*/}
        <div className="lg:hidden ">
          {darkMode ? (
            <i
              className="fa fa-bars text-xl text-white mr-3"
              onClick={handleMenuClick}
            ></i>
          ) : (
            <Image src={MenuIcon} alt="Menu Icon" onClick={handleMenuClick} />
          )}
        </div>

        {/* Overlay */}
        <div
          className={`${
            openMenu ? "fixed" : "hidden"
          } bg-gray-700 opacity-5 h-screen left-0 top-0 w-screen z-40`}
        ></div>

        {/* SIDEBAR MENU */}
        <div
          className={`${
            openMenu ? "fixed" : "hidden"
          }  w-2/4 md:w-1/3  h-screen right-0 top-0 z-50 lg:hidden ${
            darkMode ? "bg-black" : "bg-white"
          }`}
        >
          <div className="flex flex-col py-5 px-5 md:px-10">
            <div className="side flex justify-between items-center">
              <div className="logo ">
                <div className="text-xl font-bold "></div>
              </div>
              <div className="close w-[20px]">
                {darkMode ? (
                  <i
                    className="fa fa-times text-white text-xl"
                    onClick={handleMenuClick}
                  ></i>
                ) : (
                  <Image
                    src={CloseIcon}
                    alt="close Icon"
                    height={25}
                    width={25}
                    onClick={handleMenuClick}
                  />
                )}
              </div>
            </div>
            <ul>
              <li>
                <Menu
                  as="div"
                  className="relative inline-block text-left w-full"
                >
                  <div>
                    <Menu.Button
                      className={`inline-flex justify-center w-full  border rounded rounded-md  mt-5 shadow-sm px-4 py-2 text-sm font-medium ${
                        darkMode
                          ? "bg-black text-gray-400 hover:bg-black hover:text-white"
                          : "bg-white text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <Link href="/dashboard">Dashboard</Link>
                    </Menu.Button>
                  </div>
                </Menu>
                <DropdownSmall
                  title="Browse"
                  // link1="Apply for collection listing"
                  link1="Launchpad"
                  // apply="form-listing"
                  apply="launchpad"
                  link2="Drops"
                  apply2="drops"
                  onClick={handleMenuClick}
                />
              </li>
              <li>
                <Menu
                  as="div"
                  className="relative inline-block text-left w-full"
                >
                  <div>
                    <Menu.Button
                      className={`inline-flex justify-center w-full  border rounded rounded-md  mt-5 shadow-sm px-4 py-2 text-sm font-medium ${
                        darkMode
                          ? "bg-black text-gray-400 hover:bg-black hover:text-white"
                          : "bg-white text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <Link href="/roadmap">Roadmap</Link>
                    </Menu.Button>
                  </div>
                </Menu>
                <Menu
                  as="div"
                  className="relative inline-block text-left w-full"
                >
                  <div>
                    <Menu.Button
                      className={`inline-flex justify-center w-full  border rounded rounded-md  mt-5 shadow-sm px-4 py-2 text-sm font-medium ${
                        darkMode
                          ? "bg-black text-gray-400 hover:bg-black hover:text-white"
                          : "bg-white text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <Link href="/marketing">Marketing</Link>
                    </Menu.Button>
                  </div>
                </Menu>
              </li>
              <li>
                <DropdownSmall
                  title="Apply"
                  // link1="Apply for collection listing"
                  link1="Apply for launchpad"
                  // apply="form-listing"
                  apply="form-launchpad"
                  link2="Apply for drop"
                  apply2="drops-form"
                  onClick={handleMenuClick}
                />
              </li>

              <li className="" onClick={handleMenuClick}>
                <DropdownSmall
                  title="Contact"
                  link1="Twitter"
                  link2="Medium"
                  link3="Discord"
                  link4="Email"
                  link5="TOS"
                  link6="FAQs"
                  apply="https://www.twitter.com/@AltDeck_io"
                  apply2="https://medium.com/@AltDeck"
                  apply3="https://discord.gg/ec9cZCCSHK"
                  apply4="mail:contact@altdeck.io"
                  apply5="tos"
                  apply6="faqs"
                />
              </li>
              <li onClick={handleMenuClick}>
                <Button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`mt-5 md:mt-0 inline-flex justify-center w-full border border-[#50C9C3] bg-[#50c9c3] shadow-sm px-4 py-2 text-sm font-medium rounded ${
                    darkMode ? "text-black" : "text-white"
                  }`}
                >
                  {darkMode ? "Dark " : "Light "}Mode
                </Button>
              </li>
              <li className="">
                <ConnectWallet
                  onClickMobile={handleMenuClick}
                  className="inline-flex justify-center w-full border border-[#50C9C3] text-[#50c9c3] shadow-sm px-4 py-2 text-base  w-full  border rounded rounded-md  mt-5  font-medium rounded "
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
