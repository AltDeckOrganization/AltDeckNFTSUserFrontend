import React from "react";

const SingleQuestion = ({ data }) => {
  return (
    <div className="lg:mt-6">
      {data.map(({ id, avatar, quest, ans, ansPara2, questList, ansList }) => (
        <div key={id}>
          <div className="grid grid-cols-1 px-5 lg:grid-cols-12">
            <div className="py-6 lg:py-12 flex justify-center lg:block">
              <img
                src={avatar}
                alt={id}
                className="w-[70px] h-[70px] rounded-full shadow-lg lg:h-[50px] lg:w-[50px]"
              />
            </div>
            <div className="col-span-11">
              <div className="py-12">
                <h6 className="font-semibold text-md">{quest}</h6>
                <p className="mt-2">{ans}</p>
                {ansPara2 && <p className="mt-3">{ansPara2}</p>}
                {questList && <p>{questList}</p>}
                {ansList && (
                  <ul className="list-disc ml-6">
                    {ansList.map(({ listData }, i) => (
                      <li key={i}>{listData}</li>
                    ))}
                  </ul>
                )}
              </div>
              <hr className="text-gray-300" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleQuestion;
