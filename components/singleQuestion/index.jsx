import React from "react";
import Link from "next/link";
import { useDarkMode } from "../../context/darkMode";

const SingleQuestion = ({ data }) => {
  const { darkMode } = useDarkMode();
  return (
    <div className="lg:mt-3">
      {data.map(
        ({ id, avatar, quest, ans, ansPara2, questList, ansList, linkans }) => (
          <div key={id}>
            <div className="grid grid-cols-1 px-5 md:grid-cols-12">
              <div className="py-3 md:py-6 lg:py-12 flex md:justify-center lg:block">
                <img
                  src={avatar}
                  alt={id}
                  className="w-[70px] h-[70px] rounded-full shadow-lg lg:h-[50px] lg:w-[50px]"
                />
              </div>
              <div className="col-span-11">
                <div className="py-6 md:py-12">
                  <h6
                    className={`font-bold text-base ${
                      darkMode ? "text-gray-200" : "text-[#808080]"
                    }`}
                  >
                    {quest}
                  </h6>
                  {linkans ? (
                    <p
                      className={`mt-2 text-sm leading-loose leading-6 ${
                        darkMode ? "text-gray-200" : "text-[#808080]"
                      }`}
                    >
                      {ans}
                      <span className="text-[#50C9C3]">
                        <Link href={`/${linkans}`}>{linkans}</Link>
                      </span>
                    </p>
                  ) : (
                    <p
                      className={`mt-2 text-sm leading-loose leading-6 ${
                        darkMode ? "text-gray-200" : "text-[#808080]"
                      }`}
                    >
                      {ans}
                    </p>
                  )}
                  {ansPara2 && (
                    <p
                      className={`mt-3 text-sm leading-loose leading-6 ${
                        darkMode ? "text-gray-200" : "text-[#808080]"
                      }`}
                    >
                      {ansPara2}
                    </p>
                  )}
                  {questList && (
                    <p
                      className={`mt-3 text-sm leading-loose leading-6 ${
                        darkMode ? "text-gray-200" : "text-[#808080]"
                      }`}
                    >
                      {questList}
                    </p>
                  )}
                  {ansList && (
                    <ul className="list-disc ml-6">
                      {ansList.map(({ listData }, i) => (
                        <li
                          key={i}
                          className={`mt-3 text-sm leading-loose leading- ${
                            darkMode ? "text-gray-200" : "text-[#808080]"
                          }`}
                        >
                          {listData}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <hr className="text-gray-300" />
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default SingleQuestion;
