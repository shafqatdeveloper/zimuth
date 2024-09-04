import React from "react";
import samplePic from "../../assets/reslutSample.png";
import horizontalPic from "../../assets/horizontalSampleImage.png";
import { FaBalanceScale, FaGlobeAfrica, FaRegFolderOpen } from "react-icons/fa";
import { BiFileFind } from "react-icons/bi";
const ResultSamples = () => {
  const samples = [
    {
      heading: "An executive summary you can trust",
      description:
        "Let AI read every site for you: our AI synopsis uses dozens of topical sites as sources.  Wave goodbye to hallucinations and generalizations.",
      image: window.innerWidth >= 1024 ? horizontalPic : samplePic,
    },
    {
      heading: "Browse efficiently",
      description:
        "Save time and avoid repetition with our pioneering site-grouping algorithms.",
      image: samplePic,
    },
    {
      heading: "Avoid misclicks",
      description:
        "Find revelant sites with individual bullet point summaries for all pages.",
      image: samplePic,
    },
    {
      heading: "View content by type",
      description:
        "Browse sorted and labelled sites using our site-classification algorithgms.",
      image: samplePic,
    },
    {
      heading: "Your custom search engine",
      description:
        "SCustomize the length, depth, complexity, range, tone and language of your responses.",
      image: samplePic,
    },
  ];
  return (
    <div className="py-28 flex items-center justify-center">
      <div className="w-full md:!w-4/5">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl w-5/6 md:w-4/5 lg:w-3/4 mx-auto  font-semibold">
          Simple, accurate and detailed. All the results you'll need.
        </h1>
        <div className="w-full px-5 md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 pt-20">
          {samples.map((sample, index) => {
            return (
              <div
                key={index}
                className={`flex flex-col gap-2 bg-white rounded-xl pt-8 shadow-md shadow-black/20 ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <h2 className="text-lg text-black font-semibold px-5">
                  {sample.heading}
                </h2>
                <p className="text-xs h-full text-gray-500 px-5">
                  {sample.description}
                </p>
                <img
                  src={sample.image}
                  alt=""
                  className="w-full h-auto rounded-b-xl pt-4 md:pt-0"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResultSamples;
