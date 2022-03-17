import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
// import { Menu, MenuItem } from "@mui/material";
import MenuIcon from "../../public/menu.svg";
import CloseIcon from "../../public/close.svg";
import Logo from "../../public/logo.svg";

import { Fragment } from "react";
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
      <div className="navbar flex items-center justify-between bg-white px-2 md:px-5 py-5 z-50 lg:px-20 fixed left-0 top-0 w-full">
        <div className="flex items-center">
          <div className="logo">
            <Link href="/">
              <a>
                <h1 className="text-xl  font-bold">AltDeck</h1>
              </a>
            </Link>
          </div>
          <div
            className={`mt-1 rounded-lg flex flex-row items-center border border-[#E3E1E3] px-2 py-2 lg:w-[300px] md:w-[510px] xl:w-[450px] ml-10`}
          >
            <Image src={searchIcon} alt="" className="w-full" />
            <input
              type="text"
              name="search"
              id="search"
              className={`w-full border-0 text-gray-700 leading-tight focus:ring-0 focus:outline-none ml-2 text-xs`}
              placeholder="Search item here"
            />
          </div>
        </div>
        <ul className=" items-align hidden lg:flex">
          <li className="mx-3">
            <Dropdown
              title="Apply"
              link1="Apply for launchpad"
              apply="form-launchpad"
            />
          </li>

          <li className="mx-3">
            <Dropdown
              title="Browse"
              link1="Launchpad"
              link2="Stats"
              apply="launchpad"
              apply2="stats"
            />
          </li>
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
              apply="https://www.twitter.com/@AltDeck_io"
              apply2="stats"
              apply3="https://discord.gg/ec9cZCCSHK"
              apply4="email"
            />
          </li>
          <li className="mx-3">
            <ConnectWallet className="inline-flex justify-center w-full border border-[#50C9C3] text-[#50c9c3] shadow-sm px-4 py-2 text-sm font-medium rounded " />
          </li>
        </ul>

        {/* MENU ICON*/}
        <div className="lg:hidden ">
          <Image src={MenuIcon} alt="Menu Icon" onClick={handleMenuClick} />
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
          } bg-white w-2/4 md:w-1/3  h-screen right-0 top-0 z-50 lg:hidden`}
        >
          <div className="flex flex-col py-5 px-5 md:px-10">
            <div className="side flex justify-between items-center">
              <div className="logo ">
                <div className="text-xl font-bold ">AltDeck</div>
              </div>
              <div className="close w-[20px]">
                <Image
                  src={CloseIcon}
                  alt="close Icon"
                  height={25}
                  width={25}
                  onClick={handleMenuClick}
                />
              </div>
            </div>
            <ul>
              <li>
                <DropdownSmall
                  title="Apply"
                  // link1="Apply for collection listing"
                  link2="Apply for launchpad"
                  // apply="form-listing"
                  apply2="form-launchpad"
                  onClick={handleMenuClick}
                />
              </li>
              {/* <li>
                <DropdownSmall
                  title="Browse"
                  link1="launchpad"
                  link2="stats"
                  apply="launchpad"
                  apply2="stats"
                  apply3="launchpad"
                  onClick={handleMenuClick}
                />
              </li> */}
              {/* 
              <li className="" onClick={handleMenuClick}>
                <Link href="/profile">
                  <a className="inline-flex justify-center w-full  shadow-sm px-4 py-2 bg-white text-base  w-full  border rounded rounded-md  mt-5  font-medium text-gray-700 hover:bg-gray-50">
                    Profile
                  </a>
                </Link>
              </li> */}

              <li className="" onClick={handleMenuClick}>
                <DropdownSmall
                  title="Contact"
                  link1="Twitter"
                  link2="Medium"
                  link3="Discord"
                  link4="Email"
                  apply="https://www.twitter.com/@AltDeck_io"
                  apply2="stats"
                  apply3="https://discord.gg/ec9cZCCSHK"
                  apply4="email"
                />
              </li>
              <li className="" onClick={handleMenuClick}>
                <ConnectWallet className="inline-flex justify-center w-full border border-[#50C9C3] text-[#50c9c3] shadow-sm px-4 py-2 text-base  w-full  border rounded rounded-md  mt-5  font-medium rounded " />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Initial */}
      {/* <div
        className={`bg-white py-6 border-b-1 border-b-[#E3E1E3] flex flex-row items-center justify-between xl:w-[1156px] lg:w-[900px] w-full px-[20px] mx-auto`}
      >
        <div className="flex flex-row items-center">
          <Link href="/" passHref={true}>
            <p className="font-bold uppercase text-[18px] cursor-pointer">Altdeck</p>
          </Link>
          <div
            className={`mt-1 rounded-lg flex flex-row items-center border border-[#E3E1E3] px-2 py-2 lg:w-[300px] md:w-[240px] xl:w-[450px] ml-10`}
          >
            <Image src={searchIcon} alt="" className="w-full" />
            <input
              type="text"
              name="search"
              id="search"
              className={`w-full border-0 text-gray-700 leading-tight focus:ring-0 focus:outline-none ml-2 text-[14px]`}
              placeholder="Search item here"
            />
          </div>
        </div>
        <div className="flex flex-row items-center mx-4 space-x-4">
          {navigation.map((item) => (
            <>
              <button
                id={`${item.name.toLowerCase()} button`}
                key={item.name}
                className={`px-2 text-[#888888] m-0`}
                aria-current={item.current ? "page" : undefined}
                onClick={(e) => handleClick(e, item)}
              >
                {item.name}
              </button>
              <Menu
                id="browse-menu"
                anchorEl={browseAnchorEl}
                open={openBrowse}
                onClose={handleBrowseMenuClose}
                MenuListProps={{
                  'aria-labelledby': 'browse button',
                }}
                elevation={1}
              >
                <MenuItem onClick={() => router.push('/explore')} className='uppercase'>Collections</MenuItem>
                <MenuItem onClick={() => router.push("/stats")} className='uppercase'>Stats</MenuItem>
                <MenuItem onClick={() => router.push("/launchpad")} className='uppercase'>Launchpad</MenuItem>
              </Menu>
              <Menu
                id="apply-menu"
                anchorEl={applyAnchorEl}
                open={openApply}
                onClose={handleApplyMenuClose}
                MenuListProps={{
                  'aria-labelledby': 'apply button',
                }}
                elevation={1}
              >
                <MenuItem>Apply For Listing</MenuItem>
                <MenuItem>Apply For Launchpad</MenuItem>
              </Menu>
            </>
          ))}
          <div className="flex flex-row items-center">
            <button
              className={`${navStyles.createbtn} py-2 px-7 rounded-lg text-white`}
              onClick={() => router.push("/create")}
            >
              Create
            </button>

            <ConnectWallet
              className={`${navStyles.connectbtn} py-2 px-6 rounded-lg ml-5 `}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#E3E1E3]"></div> */}
    </>
  );
}
