import React from "react";
import samplePic from "../../assets/sample.png";
import { FaBalanceScale, FaGlobeAfrica, FaRegFolderOpen } from "react-icons/fa";
import { BiFileFind } from "react-icons/bi";
const Samples = () => {
  const samples = [
    {
      heading: "more, better results",
      description:
        "Browse dozens of results every query, selected for quality across hundreds of Search Engine returns.",
      image: samplePic,
      sampleIcon: <FaRegFolderOpen />,
    },
    {
      heading: "Broaden your content horizon",
      description:
        "With a single click, search across Google, Bing, Yandex,  and Baidu as well as our custom LLM.",
      image: samplePic,
      sampleIcon: <FaGlobeAfrica />,
    },
    {
      heading: "Objective, neutral content",
      description:
        "BEveryone gets the same standard results: no manipulation based on marketing personas.",
      image: samplePic,
      sampleIcon: <FaBalanceScale />,
    },
    {
      heading: "Find papers with ease",
      description:
        "BQuery millions of articles on world leading academic databases such as BASE and CORE.",
      image: samplePic,
      sampleIcon: <BiFileFind />,
    },
  ];
  return (
    <div className="py-28 flex items-center justify-center">
      <div className="w-full md:!w-4/5">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl w-5/6 md:w-4/5 lg:w-3/4 mx-auto  font-semibold">
          Search the entire worldwide web for high quality sources.
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 pt-20 px-6 md:px-0">
          {samples.map((sample, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md shadow-black/20"
              >
                <div className="flex flex-col gap-0">
                  <div className="p-6 flex flex-col gap-2.5">
                    <div className="flex text-black items-center gap-3 capitalize text-xl">
                      {sample.sampleIcon}
                      <h3 className="">{sample.heading}</h3>
                    </div>
                    <p className="text-sm w-11/12 sm:w-4/5 text-gray-400">
                      {sample.description}
                    </p>
                  </div>
                  <img src={sample.image} alt="" className="rounded-b-2xl" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Samples;
