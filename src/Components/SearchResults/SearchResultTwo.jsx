import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import TooltipContent from "../TooltipContent/TooltipContent";
import { FaGoogle } from "react-icons/fa";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoMdInformationCircle,
} from "react-icons/io";

const GenericCorporateTwo = ({ searchResult, genericSummary }) => {
  const [secondGenericOptionExpand, setSecondGenericOptionExpand] =
    useState(false);
  return (
    <>
      <div>
        <div className="w-full border-b border-b-black pt-10 dark:border-b-darkWhite">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 lg:tems-center lg:justify-between">
            <h1 className="text-sm lg:text-base font-semibold">
              Summaries about Generic Corporation
            </h1>
            {/* Right Side Information */}
            <div className="flex items-center justify-between gap-4">
              <div
                style={{ fontSize: "0.55rem", lineHeight: "0.7rem" }}
                data-tooltip-id="generic-info"
                data-tooltip-place="bottom"
                className="flex items-center gap-2"
              >
                <h1 className="font-semibold">Metrics</h1>
                <div className="w-[1.1px] h-6 bg-gray-600"></div>
                {/* Word Count */}
                <div className="">
                  <h1 className="flex items-center gap-3">
                    <span className="font-medium">Word Count</span>
                    <span className="self-end pl-2.5">{genericSummary.wordCount}</span>
                  </h1>
                  <h1 className="flex items-center gap-3">
                    <span className="font-medium">Flesch Kinkaid</span>
                    <span className="self-end pl-0.5">{genericSummary.fleschKinkaid}</span>
                  </h1>
                </div>
                {/* Subjectivity */}
                <div className="">
                  <h1 className="flex items-center gap-3">
                    <span className="font-medium">Subjectivity</span>
                    <span className="self-end pl-2.5">{genericSummary.subjectivity}</span>
                  </h1>
                  <h1 className="flex items-center gap-3">
                    <span className="font-medium">Polarity</span>
                    <span className="self-end pl-[22px]">{genericSummary.polarity}</span>
                  </h1>
                </div>
              </div>
              <div className="text-gray-500 cursor-pointer">
                {secondGenericOptionExpand ? (
                  <IoIosArrowUp
                    onClick={() =>
                      setSecondGenericOptionExpand(!secondGenericOptionExpand)
                    }
                    size={28}
                  />
                ) : (
                  <IoIosArrowDown
                    onClick={() =>
                      setSecondGenericOptionExpand(!secondGenericOptionExpand)
                    }
                    size={28}
                  />
                )}
              </div>
            </div>
          </div>
          {/* Typography */}
          <div className="py-9 flex flex-col gap-7">
            <div className="flex items-center gap-[93px] text-sm">
              <h1 className="font-semibold">Info</h1>
              <ol className="list-disc">

                <li>
                  Webpages summarizing the operations, mission, history and
                  products of Generic Corporation
                </li>
              </ol>
            </div>
            <div className="flex items-start gap-14 text-sm">
              <h1 className="font-semibold">Summary</h1>
              <ol className="list-disc">
                {
                  genericSummary.summary.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))
                }
              </ol>
            </div>
          </div>
          {!secondGenericOptionExpand && (
            <div className="pb-6 text-darkBlack dark:text-darkWhite flex items-center gap-5">
              <div className="flex flex-col items-center gap-0.5">
                <div className="bg-white p-1 border border-darkBlack rounded-lg text-red-500 w-max">
                  <FaGoogle />
                </div>
                <p
                  style={{ fontSize: "0.5rem", lineHeight: "0.64rem" }}
                  className="font-medium"
                >
                  Generic Corp...
                </p>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <div className="bg-white p-1 border border-darkBlack rounded-lg text-red-500 w-max">
                  <FaGoogle />
                </div>
                <p
                  style={{ fontSize: "0.5rem", lineHeight: "0.64rem" }}
                  className="font-medium"
                >
                  Generic Corp...
                </p>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <div className="bg-white p-1 border border-darkBlack rounded-lg text-red-500 w-max">
                  <FaGoogle />
                </div>
                <p
                  style={{ fontSize: "0.5rem", lineHeight: "0.64rem" }}
                  className="font-medium"
                >
                  Generic Corp...
                </p>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <div className="bg-white p-1 border border-darkBlack rounded-lg text-red-500 w-max">
                  <FaGoogle />
                </div>
                <p
                  style={{ fontSize: "0.5rem", lineHeight: "0.64rem" }}
                  className=" font-medium"
                >
                  Generic Corp...
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      {secondGenericOptionExpand && (
        <div className="border-b border-b-black py-10 dark:border-b-darkWhite">
          <h1 className="text-xl font-semibold">Generic Corporation Sites</h1>
          <ReactTooltip
            className="!w-[350px] !h-[155px] !bg-white border !border-darkBlack !rounded-md"
            place="right"
            effect="solid"
            id="generic-info"
            offset={3}
          >
            <TooltipContent />
          </ReactTooltip>
          <div className="pt-8 flex flex-col gap-10">
            {/* 1st Section */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-7 lg:gap-0 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="text-red-500 border border-gray-400 rounded-full p-1 w-max">
                      <FaGoogle size={22} />
                    </div>
                    <div className="flex flex-col">
                      <h1 className="text-sm">Generic</h1>
                      <Link
                        target="_blank"
                        className="text-xs"
                        to={"https://generic.corp.com"}
                      >
                        generic.corp.com
                      </Link>
                    </div>
                  </div>
                  <h6
                    style={{ fontSize: "0.4rem", lineHeight: "0.5rem" }}
                    className="italic flex items-center pt-1.5"
                  >
                    generic.corp.com is a commerical website operated by Generic,
                    an Generic Country Corporation
                    <IoMdInformationCircle />
                  </h6>
                </div>
                {/* Right Side Information */}
                <div className="flex items-center gap-4">
                  <div
                    style={{ fontSize: "0.55rem", lineHeight: "0.7rem" }}
                    data-tooltip-id="generic-info"
                    data-tooltip-place="bottom"
                    className="flex items-center gap-2"
                  >
                    <h1 className="font-semibold">Metrics</h1>
                    <div className="w-[1.1px] h-6 bg-gray-600"></div>
                    {/* Word Count */}
                    <div className="">
                      <h1 className="flex items-center gap-3">
                        <span className="font-medium">Word Count</span>
                        <span className="self-end pl-2.5">{searchResult.wordCount}</span>
                      </h1>
                      <h1 className="flex items-center gap-3">
                        <span className="font-medium">Flesch Kinkaid</span>
                        <span className="self-end pl-0.5">{searchResult.fleschKinkaid}</span>
                      </h1>
                    </div>
                    {/* Subjectivity */}
                    <div className="">
                      <h1 className="flex items-center gap-3">
                        <span className="font-medium">Subjectivity</span>
                        <span className="self-end pl-2.5">{searchResult.subjectivity}</span>
                      </h1>
                      <h1 className="flex items-center gap-3">
                        <span className="font-medium">Polarity</span>
                        <span className="self-end pl-[22px]">{searchResult.polarity}</span>
                      </h1>
                    </div>
                  </div>
                  <div className="text-gray-500 opacity-0 cursor-pointer">
                    <IoIosArrowUp size={28} />
                  </div>
                </div>
              </div>
              {/* Points */}
              <div className="flex flex-col gap-3">
                <Link
                  className="text-xl w-max font-semibold text-blue-700"
                  target="_blank"
                  to={"https://generic.corp.com"}
                >
                  Go to Generic
                </Link>
                <ol className="list-disc text-xs pl-3.5">
                  {
                    searchResult.summary.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))
                  }
                </ol>
              </div>
              {/* Date */}
              <h1
                className="text-gray-500"
                style={{ fontSize: "0.55rem", lineHeight: "0.7rem" }}
              >
                {searchResult.date}
              </h1>
            </div>
            {/* 2nd Section */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-7 lg:gap-0 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="text-red-500 border border-gray-400 rounded-full p-1 w-max">
                      <FaGoogle size={22} />
                    </div>
                    <div className="flex flex-col">
                      <h1 className="text-sm">Generic</h1>
                      <Link
                        target="_blank"
                        className="text-xs"
                        to={"https://generic.corp.com"}
                      >
                        generic.corp.com
                      </Link>
                    </div>
                  </div>
                  <h6
                    style={{ fontSize: "0.4rem", lineHeight: "0.5rem" }}
                    className="italic flex items-center pt-1.5"
                  >
                    generic.corp.com is a commerical website operated by Generic,
                    an Generic Country Corporation
                    <IoMdInformationCircle />
                  </h6>
                </div>
                {/* Right Side Information */}
                <div className="flex items-center gap-4">
                  <div
                    style={{ fontSize: "0.55rem", lineHeight: "0.7rem" }}
                    data-tooltip-id="generic-info"
                    data-tooltip-place="bottom"
                    className="flex items-center gap-2"
                  >
                    <h1 className="font-semibold">Metrics</h1>
                    <div className="w-[1.1px] h-6 bg-gray-600"></div>
                    {/* Word Count */}
                    <div className="">
                      <h1 className="flex items-center gap-3">
                        <span className="font-medium">Word Count</span>
                        <span className="self-end pl-2.5">{searchResult.wordCount}</span>
                      </h1>
                      <h1 className="flex items-center gap-3">
                        <span className="font-medium">Flesch Kinkaid</span>
                        <span className="self-end pl-0.5">{searchResult.fleschKinkaid}</span>
                      </h1>
                    </div>
                    {/* Subjectivity */}
                    <div className="">
                      <h1 className="flex items-center gap-3">
                        <span className="font-medium">Subjectivity</span>
                        <span className="self-end pl-2.5">{searchResult.subjectivity}</span>
                      </h1>
                      <h1 className="flex items-center gap-3">
                        <span className="font-medium">Polarity</span>
                        <span className="self-end pl-[22px]">{searchResult.polarity}</span>
                      </h1>
                    </div>
                  </div>
                  <div className="text-gray-500 opacity-0 cursor-pointer">
                    <IoIosArrowUp size={28} />
                  </div>
                </div>
              </div>
              {/* Points */}
              <div className="flex flex-col gap-3">
                <Link
                  className="text-xl w-max font-semibold text-blue-700"
                  target="_blank"
                  to={"https://generic.corp.com"}
                >
                  Go to Generic
                </Link>
                <ol className="list-disc text-xs pl-3.5">
                  {
                    searchResult.summary.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))
                  }
                </ol>
              </div>
              {/* Date */}
              <h1
                className="text-gray-500"
                style={{ fontSize: "0.55rem", lineHeight: "0.7rem" }}
              >
                {searchResult.date}
              </h1>
            </div>
            {/* 3rd Section */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-7 lg:gap-0 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="text-red-500 border border-gray-400 rounded-full p-1 w-max">
                      <FaGoogle size={22} />
                    </div>
                    <div className="flex flex-col">
                      <h1 className="text-sm">Generic</h1>
                      <Link
                        target="_blank"
                        className="text-xs"
                        to={"https://generic.corp.com"}
                      >
                        generic.corp.com
                      </Link>
                    </div>
                  </div>
                  <h6
                    style={{ fontSize: "0.4rem", lineHeight: "0.5rem" }}
                    className="italic flex items-center pt-1.5"
                  >
                    generic.corp.com is a commerical website operated by Generic,
                    an Generic Country Corporation
                    <IoMdInformationCircle />
                  </h6>
                </div>
                {/* Right Side Information */}
                <div className="flex items-center gap-4">
                  <div
                    style={{ fontSize: "0.55rem", lineHeight: "0.7rem" }}
                    data-tooltip-id="generic-info"
                    data-tooltip-place="bottom"
                    className="flex items-center gap-2"
                  >
                    <h1 className="font-semibold">Metrics</h1>
                    <div className="w-[1.1px] h-6 bg-gray-600"></div>
                    {/* Word Count */}
                    <div className="">
                      <h1 className="flex items-center gap-3">
                        <span className="font-medium">Word Count</span>
                        <span className="self-end pl-2.5">{searchResult.wordCount}</span>
                      </h1>
                      <h1 className="flex items-center gap-3">
                        <span className="font-medium">Flesch Kinkaid</span>
                        <span className="self-end pl-0.5">{searchResult.fleschKinkaid}</span>
                      </h1>
                    </div>
                    {/* Subjectivity */}
                    <div className="">
                      <h1 className="flex items-center gap-3">
                        <span className="font-medium">Subjectivity</span>
                        <span className="self-end pl-2.5">{searchResult.subjectivity}</span>
                      </h1>
                      <h1 className="flex items-center gap-3">
                        <span className="font-medium">Polarity</span>
                        <span className="self-end pl-[22px]">{searchResult.polarity}</span>
                      </h1>
                    </div>
                  </div>
                  <div className="text-gray-500 opacity-0 cursor-pointer">
                    <IoIosArrowUp size={28} />
                  </div>
                </div>
              </div>
              {/* Points */}
              <div className="flex flex-col gap-3">
                <Link
                  className="text-xl w-max font-semibold text-blue-700"
                  target="_blank"
                  to={"https://generic.corp.com"}
                >
                  Go to Generic
                </Link>
                <ol className="list-disc text-xs pl-3.5">
                  {
                    searchResult.summary.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))
                  }
                </ol>
              </div>
              {/* Date */}
              <h1
                className="text-gray-500"
                style={{ fontSize: "0.55rem", lineHeight: "0.7rem" }}
              >
                {searchResult.date}
              </h1>
            </div>
            {/* 4th Section */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-7 lg:gap-0 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="text-red-500 border border-gray-400 rounded-full p-1 w-max">
                      <FaGoogle size={22} />
                    </div>
                    <div className="flex flex-col">
                      <h1 className="text-sm">Generic</h1>
                      <Link
                        target="_blank"
                        className="text-xs"
                        to={"https://generic.corp.com"}
                      >
                        generic.corp.com
                      </Link>
                    </div>
                  </div>
                  <h6
                    style={{ fontSize: "0.4rem", lineHeight: "0.5rem" }}
                    className="italic flex items-center pt-1.5"
                  >
                    generic.corp.com is a commerical website operated by Generic,
                    an Generic Country Corporation
                    <IoMdInformationCircle />
                  </h6>
                </div>
                {/* Right Side Information */}
                <div className="flex items-center gap-4">
                  <div
                    style={{ fontSize: "0.55rem", lineHeight: "0.7rem" }}
                    data-tooltip-id="generic-info"
                    data-tooltip-place="bottom"
                    className="flex items-center gap-2"
                  >
                    <h1 className="font-semibold">Metrics</h1>
                    <div className="w-[1.1px] h-6 bg-gray-600"></div>
                    {/* Word Count */}
                    <div className="">
                      <h1 className="flex items-center gap-3">
                        <span className="font-medium">Word Count</span>
                        <span className="self-end pl-2.5">{searchResult.wordCount}</span>
                      </h1>
                      <h1 className="flex items-center gap-3">
                        <span className="font-medium">Flesch Kinkaid</span>
                        <span className="self-end pl-0.5">{searchResult.fleschKinkaid}</span>
                      </h1>
                    </div>
                    {/* Subjectivity */}
                    <div className="">
                      <h1 className="flex items-center gap-3">
                        <span className="font-medium">Subjectivity</span>
                        <span className="self-end pl-2.5">{searchResult.subjectivity}</span>
                      </h1>
                      <h1 className="flex items-center gap-3">
                        <span className="font-medium">Polarity</span>
                        <span className="self-end pl-[22px]">{searchResult.polarity}</span>
                      </h1>
                    </div>
                  </div>
                  <div className="text-gray-500 opacity-0 cursor-pointer">
                    <IoIosArrowUp size={28} />
                  </div>
                </div>
              </div>
              {/* Points */}
              <div className="flex flex-col gap-3">
                <Link
                  className="text-xl w-max font-semibold text-blue-700"
                  target="_blank"
                  to={"https://generic.corp.com"}
                >
                  Go to Generic
                </Link>
                <ol className="list-disc text-xs pl-3.5">
                  {
                    searchResult.summary.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))
                  }
                </ol>
              </div>
              {/* Date */}
              <h1
                className="text-gray-500"
                style={{ fontSize: "0.55rem", lineHeight: "0.7rem" }}
              >
                {searchResult.date}
              </h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GenericCorporateTwo;
