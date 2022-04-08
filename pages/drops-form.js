import React, { Fragment, useState, useEffect } from "react";
import { CountryDropdown } from "react-country-region-selector";
import axios from "axios";
import SEO from "../components/seo/SEO";
import { useDarkMode } from "../context/darkMode";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const DropsForm = () => {
  const [projectName, setProjectName] = useState("");
  const [picture, setPicture] = useState("");
  const [twitterLink, setTwitterLink] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [discordLink, setDiscordLink] = useState("");
  const [websiteLink, setWebsiteLink] = useState("");
  const [mintDate, setMintDate] = useState("");
  const [mintTime, setMintTime] = useState("");
  const [supplyCount, setSupplyCount] = useState("");
  const [mintPrice, setMintPrice] = useState("");
  const [description, setDescription] = useState("");
  const [acceptTOS, setAcceptTOS] = useState("");
  const [submissionSuccessful, setSubmissionSuccesful] = useState("");
  const [pictureName, setPictureName] = useState("");
  const server_url = process.env.NEXT_PUBLIC_BACKEND_URL;

  const handleFiles = (e) => {
    const fileInput = document.getElementById(e.target.id);
    setPictureName(fileInput.value.split("\\").pop());

    var reader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);

    reader.onload = function () {
      setPicture(reader.result);
      console.log(reader.result); //base64encoded string
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  const submitForm = (e) => {
    e.preventDefault();

    const form_data = {
      projectName,
      twitterLink,
      description,
      instagramLink,
      discordLink,
      websiteLink,
      mintDate,
      mintTime,
      supplyCount,
      mintPrice,
      acceptTOS,
    };

    const data = {
      name: projectName,
      profile_image_path: picture,
      form_data: JSON.stringify(form_data),
    };

    axios
      .post(`${server_url}/api/v1/drops`, data)
      .then((res) => {
        setSubmissionSuccesful("true");
        window.scrollTo(0, 0);
        console.log(res.data);
      })
      .catch((e) => {
        setSubmissionSuccesful("false");
        window.scrollTo(0, 0);
        console.log(e);
      });
  };

  const { darkMode } = useDarkMode();

  return (
    <div>
      <SEO />

      <div className="xl:w-[1156px] mx-auto lg:w-[900px] w-full pt-28 px-4 overflow-hidden md:px-0 launchPad ">
        <div className="launchPad py-5 px-1 md:px-10 lg:px-20">
          {submissionSuccessful === "false" && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Holy smokes!</strong>
              <span className="block sm:inline">Form submission failed.</span>
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg
                  className="fill-current h-6 w-6 text-red-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>
          )}

          {submissionSuccessful === "true" && (
            <div
              className="bg-green-100 border border-green-700 text-green-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Thanks For Applying!</strong>
              <span className="block sm:inline">Form submission received.</span>
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg
                  className="fill-current h-6 w-6 text-green-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>
          )}

          <div className="text-[#50C9C3]  text-lg  font-semibold  py-3 lg:text-3xl md:text-xl text-center">
            Drops application
          </div>

          <form className="w-full  py-5 px-5 md:px-10" onSubmit={submitForm}>
            <h3
              className={`text-base uppercase my-4 font-bold ${
                darkMode ? "text-white" : "text-dark"
              }`}
            >
              Project Details
            </h3>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className={`block tracking-wide text-xs font-bold mb-2 ${
                    darkMode ? "text-gray-200" : "text-gray-700"
                  }`}
                  htmlFor="grid-first-name"
                >
                  Project Name
                </label>
                <input
                  required
                  className={`appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none ${
                    darkMode
                      ? "bg-black text-gray-200 focus:bg-black border-gray-900"
                      : "bg-gray-200 text-gray-700 focus:bg-white border-gray-100"
                  }`}
                  id="name"
                  type="text"
                  placeholder="Add project name"
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </div>
              <div
                className={`py-3 mb-5  px-3 md:w-1/2 w-full ${
                  darkMode ? "bg-black" : "bg-white"
                }`}
              >
                <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
                  <label
                    className={`block tracking-wide text-xs font-bold mb-2 ${
                      darkMode ? "text-gray-200" : "text-gray-700"
                    }`}
                    htmlFor="grid-first-name"
                  >
                    Picture(PNG/JPG/JPEG)
                  </label>
                  <div className="md:flex">
                    <div className="w-full">
                      <div
                        className={`relative h-48 rounded-lg border-dashed border-2 flex justify-center items-center ${
                          darkMode ? "bg-black" : "bg-gray-100"
                        }`}
                      >
                        <div className="absolute">
                          <div className="flex flex-col items-center">
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
                            <span
                              className={`block font-normal ${
                                darkMode ? "text-gray-100" : "text-gray-400"
                              }`}
                            >
                              Drag and drop picture here
                            </span>{" "}
                          </div>
                        </div>{" "}
                        <input
                          required
                          id="profile_image"
                          type="file"
                          className="h-full w-full opacity-0"
                          name=""
                          onChange={handleFiles}
                        />
                      </div>
                      {` Image name: ${pictureName}`}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className={`block tracking-wide text-xs font-bold mb-2 ${
                    darkMode ? "text-gray-200" : "text-gray-700"
                  }`}
                  htmlFor="grid-first-name"
                >
                  Twitter
                </label>
                <input
                  required
                  className={`appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none ${
                    darkMode
                      ? "bg-black text-gray-200 focus:bg-black border-gray-900"
                      : "bg-gray-200 text-gray-700 focus:bg-white border-gray-100"
                  }`}
                  id="twitter"
                  type="text"
                  placeholder="Paste links here"
                  onChange={(e) => setTwitterLink(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className={`block tracking-wide text-xs font-bold mb-2 ${
                    darkMode ? "text-gray-200" : "text-gray-700"
                  }`}
                  htmlFor="grid-first-name"
                >
                  Discord server
                </label>
                <input
                  required
                  className={`appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none ${
                    darkMode
                      ? "bg-black text-gray-200 focus:bg-black border-gray-900"
                      : "bg-gray-200 text-gray-700 focus:bg-white border-gray-100"
                  }`}
                  id="discord__id"
                  type="text"
                  placeholder="Paste link here"
                  onChange={(e) => setDiscordLink(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className={`block tracking-wide text-xs font-bold mb-2 ${
                    darkMode ? "text-gray-200" : "text-gray-700"
                  }`}
                  htmlFor="grid-first-name"
                >
                  Instagram
                </label>
                <input
                  required
                  className={`appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none ${
                    darkMode
                      ? "bg-black text-gray-200 focus:bg-black border-gray-900"
                      : "bg-gray-200 text-gray-700 focus:bg-white border-gray-100"
                  }`}
                  id="instagram"
                  type="text"
                  placeholder="Paste links here"
                  onChange={(e) => setInstagramLink(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className={`block tracking-wide text-xs font-bold mb-2 ${
                    darkMode ? "text-gray-200" : "text-gray-700"
                  }`}
                  htmlFor="grid-first-name"
                >
                  Website
                </label>
                <input
                  required
                  className={`appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none ${
                    darkMode
                      ? "bg-black text-gray-200 focus:bg-black border-gray-900"
                      : "bg-gray-200 text-gray-700 focus:bg-white border-gray-100"
                  }`}
                  id="website"
                  type="text"
                  placeholder="Paste link here"
                  onChange={(e) => setWebsiteLink(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className={`block tracking-wide text-xs font-bold mb-2 ${
                    darkMode ? "text-gray-200" : "text-gray-700"
                  }`}
                  htmlFor="grid-first-name"
                >
                  Mint date
                </label>
                <input
                  required
                  className={`appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none ${
                    darkMode
                      ? "bg-black text-gray-200 focus:bg-black border-gray-900"
                      : "bg-gray-200 text-gray-700 focus:bg-white border-gray-100"
                  }`}
                  id="mint_date"
                  type="text"
                  placeholder="Paste links here"
                  onChange={(e) => setMintDate(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className={`block tracking-wide text-xs font-bold mb-2 ${
                    darkMode ? "text-gray-200" : "text-gray-700"
                  }`}
                  htmlFor="grid-first-name"
                >
                  Mint Time
                </label>
                <input
                  required
                  className={`appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none ${
                    darkMode
                      ? "bg-black text-gray-200 focus:bg-black border-gray-900"
                      : "bg-gray-200 text-gray-700 focus:bg-white border-gray-100"
                  }`}
                  id="mint_time"
                  type="text"
                  placeholder="Paste link here"
                  onChange={(e) => setMintTime(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className={`block tracking-wide text-xs font-bold mb-2 ${
                    darkMode ? "text-gray-200" : "text-gray-700"
                  }`}
                  htmlFor="grid-first-name"
                >
                  Supply count
                </label>
                <input
                  required
                  className={`appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none ${
                    darkMode
                      ? "bg-black text-gray-200 focus:bg-black border-gray-900"
                      : "bg-gray-200 text-gray-700 focus:bg-white border-gray-100"
                  }`}
                  id="supply_count"
                  type="text"
                  placeholder="Paste links here"
                  onChange={(e) => setSupplyCount(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className={`block tracking-wide text-xs font-bold mb-2 ${
                    darkMode ? "text-gray-200" : "text-gray-700"
                  }`}
                  htmlFor="grid-first-name"
                >
                  Mint price in sol
                </label>
                <input
                  required
                  className={`appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none ${
                    darkMode
                      ? "bg-black text-gray-200 focus:bg-black border-gray-900"
                      : "bg-gray-200 text-gray-700 focus:bg-white border-gray-100"
                  }`}
                  id="mint_time"
                  type="text"
                  placeholder="200sol"
                  onChange={(e) => setMintPrice(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                <label
                  className="block tracking-wide text-gray-700 text-xs w-3/4 font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Description
                </label>
                <textarea
                  className={`appearance-none block w-full h-50 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none  ${
                    darkMode
                      ? "bg-black text-gray-200 focus:bg-black border-gray-900"
                      : "focus:bg-white border-gray-100 bg-gray-200 text-gray-700"
                  }`}
                  id="project_unique"
                  type="text"
                  placeholder="Write all description of your project"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>

            <h3
              className={`text-base uppercase my-4 font-bold ${
                darkMode ? "text-white" : "text-dark"
              }`}
            >
              Agreement
            </h3>
            <div className="flex flex-wrap -mx-3 mb-6">
              <label className="inline-flex items-center mt-3 px-3 gap-2">
                <input
                  required
                  type="checkbox"
                  className="input-checkbox"
                  id="checkbox2"
                  onChange={(e) => setAcceptTOS(e.target.value)}
                />
                <label htmlFor="checkbox2" className="input-label text-sm">
                  Accept our TOS.
                </label>
              </label>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0"></div>
              <div className="w-full md:w-1/2 px-3">
                <button
                  className={`bg-[#50C9C3] rounded rounded-md py-3 px-10 float-right ${
                    darkMode ? "text-black" : "text-white"
                  }`}
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DropsForm;
