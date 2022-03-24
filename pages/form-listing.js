import React, { Fragment, useState } from "react";
import Form from "../components/forms";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import { Menu, Transition } from "@headlessui/react";
import SEO from "../components/seo/SEO";

import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const LaunchpadForm = () => {
  const [country, setCountry] = useState("");
  return (
    <div className="launchPad py-5 px-1 mt-20 md:px-10 lg:px-20">
      <SEO />

      <div className="text-[#50C9C3] text-lg  font-semibold  py-3 lg:text-3xl md:text-xl text-center">
        Collection Listing Application
      </div>
      <p className="text-base text-gray-500 px-10 pt-5">
        Please provide details about at least 1 team member (more team members,
        the better).
      </p>

      <form className="w-full  py-5 px-5 md:px-10">
        <h3 className="text-base text-black uppercase my-4 font-bold">
          Personal Details
        </h3>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="name"
              type="text"
              placeholder="Adam Smith"
            />
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block  trackin-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Country
            </label>
            <CountryDropdown
              className="block w-full bg-gray-200 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              onChange={(val) => {
                console.log(val);
                setCountry(val);
              }}
              value={country}
            />
            {/* <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            /> */}
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          {" "}
          <div className="py-3 mb-5  px-3 bg-white md:w-1/2 w-full">
            <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
              <label
                className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Picture(PNG/JPG/JPEG)
              </label>
              <div className="md:flex">
                <div className="w-full">
                  <div className="relative border-dotted h-48 rounded-lg border-dashed border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
                    <div className="absolute">
                      <div className="flex flex-col items-center">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            style={{ color: "#9ca3af" }}
                            d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
                          />
                        </svg>
                        <span className="block text-gray-400 font-normal">
                          Drag and drop picture here
                        </span>{" "}
                      </div>
                    </div>{" "}
                    <input
                      type="file"
                      className="h-full w-full opacity-0"
                      name=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* VIDEO */}
          <div className="py-3  bg-white  px-3 md:w-1/2 w-full">
            <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
              <label
                className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Video(mp3)
              </label>
              <div className="md:flex">
                <div className="w-full">
                  <div className="relative border-dotted h-48 rounded-lg border-dashed border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
                    <div className="absolute">
                      <div className="flex flex-col items-center">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            style={{ color: "#9ca3af" }}
                            d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
                          />
                        </svg>
                        <span className="block text-gray-400 font-normal">
                          Drag and drop video here
                        </span>{" "}
                      </div>
                    </div>{" "}
                    <input
                      type="file"
                      className="h-full w-full opacity-0"
                      name=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex mb-5flex-wrap mb-10">
          <button className="bg-[#50C9C3]  rounded rounded-md py-3 px-10 text-white float-center">
            Add another team member
          </button>
        </div>

        <h3 className="text-base text-black uppercase my-4 font-bold">
          Collection Details
        </h3>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Collection Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="name"
              type="text"
              placeholder="Add collection name"
            />
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block  trackin-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Is your project a derivative?
            </label>
            <Menu as="div" className="relative inline-block text-left w-full">
              <div>
                <Menu.Button className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                  Yes
                  <ChevronDownIcon className="  h-5 w-5" aria-hidden="true" />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1 w-full">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Yes
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          No
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            {/* <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            /> */}
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="email"
              type="email"
              placeholder="youremail@gmail.com"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Discord ID
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="discord__id"
              type="text"
              placeholder="Paste ID here"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Describe what makes your project unique
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="project_unique"
              type="text"
              placeholder="Make it short"
            ></textarea>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Describe long term goals of your project
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="project_unique"
              type="text"
              placeholder="Make it short"
            ></textarea>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-full px-3 mb-6 md:mb-0">
            <label
              className="block tracking-wide text-gray-700 text-xs w-3/4 font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Tell us about your team (how many team members there are working
              on the project daily, current occupation of these team members,
              past accomplishments of core members, how did the team meet,
              LinkedIn of all team members
            </label>
            <textarea
              className="appearance-none block w-full h-50 bg-gray-200 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="project_unique"
              type="text"
              placeholder="Make it short"
            ></textarea>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Partnership proof, please link links or articles to back this up
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="supportlinks"
              type="text"
              placeholder="Paste links here"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Partnerships, who is your project currently partnered with?
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="discord__id"
              type="text"
              placeholder="Paste link here"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Add links that support your previously stated case (articles,
              links, google drive, etc)
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="support"
              type="text"
              placeholder="Paste links here"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Roadmap/whitepaper, please link your roadmap below or list details
              on it. Please also state what you will do if your project doesn’t
              sell out.
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="discord__id"
              type="text"
              placeholder="Paste link here"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-full px-3 mb-6 md:mb-0">
            <label
              className="block tracking-wide text-gray-700 text-xs w-3/4 font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Artwork, is your artwork original? Who’s the artist? How did you
              meet the artist?
            </label>
            <textarea
              className="appearance-none block w-full h-50 bg-gray-200 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="project_unique"
              type="text"
              placeholder="Make it short"
            ></textarea>
          </div>
        </div>

        <h3 className="text-base text-black uppercase my-4 font-bold">
          Socials
        </h3>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Twitter
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="twitter"
              type="text"
              placeholder="Paste links here"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Discord server
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="discord__id"
              type="text"
              placeholder="Paste link here"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Instagram
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="instagram"
              type="text"
              placeholder="Paste links here"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Website
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="website"
              type="text"
              placeholder="Paste link here"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Mint date
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="mint_date"
              type="text"
              placeholder="Paste links here"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Mint Time
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="mint_time"
              type="text"
              placeholder="Paste link here"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Supply count
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="supply_count"
              type="text"
              placeholder="Paste links here"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Mint price in sol
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="mint_time"
              type="text"
              placeholder="200sol"
            />
          </div>
        </div>

        <h3 className="text-base text-black uppercase my-4 font-bold">
          Feedback
        </h3>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-full px-3 mb-6 md:mb-0">
            <label
              className="block tracking-wide text-gray-700 text-xs w-3/4 font-bold mb-2"
              htmlFor="grid-first-name"
            >
              What else should we know?
            </label>
            <textarea
              className="appearance-none block w-full h-50 bg-gray-200 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="project_unique"
              type="text"
              placeholder="Make it short"
            ></textarea>
          </div>
        </div>

        <h3 className="text-base text-black uppercase my-4 font-bold">
          Agreement
        </h3>
        <div className="flex flex-wrap -mx-3 mb-6">
          <label className="inline-flex items-center mt-3 px-3 gap-2">
            <input type="checkbox" className="input-checkbox" id="checkbox1" />
            <label htmlFor="checkbox1" className="input-label">
              Accept out TOS.
            </label>
          </label>

          <label className="inline-flex items-center mt-3 px-3 gap-2">
            <input
              type="checkbox"
              className="input-checkbox bg-red-500"
              id="checkbox1"
            />
            <label htmlFor="checkbox1" className="input-label">
              Accept details provided on your team will be revealed on your
              collection / launchpad page.
            </label>
          </label>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0"></div>
          <div className="w-full md:w-1/2 px-3">
            <button className="bg-[#50C9C3]  rounded rounded-md py-3 px-10 text-white float-right">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LaunchpadForm;
