import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoMdInformationCircle,
} from "react-icons/io";
import { Link } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import TooltipContent from "../TooltipContent/TooltipContent";
import SummaryTwo from "../SummariesSREP/SummaryTwo";
import GenericCorporateTwo from "./GenericCorporateTwo";

const GenericCorporate = ({ sectionsExpaned }) => {
  const [secondGenericOptionExpand, setSecondGenericOptionExpand] =
    useState(false);
  return (
    <div>
      <div className="border-b border-b-black pb-10 dark:border-b-darkWhite">
        <h1 className="text-xl font-semibold">Generic Corporation Sites</h1>
        <ReactTooltip
          className="!w-[380px] !h-[140px] !bg-white border !border-darkBlack !rounded-md"
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
            <div className="flex items-center justify-between">
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
                      <span className="self-end pl-2.5">500</span>
                    </h1>
                    <h1 className="flex items-center gap-3">
                      <span className="font-medium">Flesch Kinkaid</span>
                      <span className="self-end pl-0.5">90/100</span>
                    </h1>
                  </div>
                  {/* Subjectivity */}
                  <div className="">
                    <h1 className="flex items-center gap-3">
                      <span className="font-medium">Subjectivity</span>
                      <span className="self-end pl-2.5">0.4/1</span>
                    </h1>
                    <h1 className="flex items-center gap-3">
                      <span className="font-medium">Polarity</span>
                      <span className="self-end pl-[22px]">-0.9/[-1.1]</span>
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
                <li>
                  Generic Corporation is focused on offering generic services
                  with generic advantages
                </li>
                <li>
                  Generic Corporation was founded by Generic Founder with the
                  generic mission of doing generic thing
                </li>
                <li>Generic Text Line for Testing </li>
              </ol>
            </div>
            {/* Date */}
            <h1
              className="text-gray-500"
              style={{ fontSize: "0.55rem", lineHeight: "0.7rem" }}
            >
              September 11, 2001
            </h1>
          </div>
          {/* 2nd Section */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
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
                      <span className="self-end pl-2.5">500</span>
                    </h1>
                    <h1 className="flex items-center gap-3">
                      <span className="font-medium">Flesch Kinkaid</span>
                      <span className="self-end pl-0.5">90/100</span>
                    </h1>
                  </div>
                  {/* Subjectivity */}
                  <div className="">
                    <h1 className="flex items-center gap-3">
                      <span className="font-medium">Subjectivity</span>
                      <span className="self-end pl-2.5">0.4/1</span>
                    </h1>
                    <h1 className="flex items-center gap-3">
                      <span className="font-medium">Polarity</span>
                      <span className="self-end pl-[22px]">-0.9/[-1.1]</span>
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
                <li>
                  Generic Corporation is focused on offering generic services
                  with generic advantages
                </li>
                <li>
                  Generic Corporation was founded by Generic Founder with the
                  generic mission of doing generic thing
                </li>
                <li>Generic Text Line for Testing </li>
              </ol>
            </div>
            {/* Date */}
            <h1
              className="text-gray-500"
              style={{ fontSize: "0.55rem", lineHeight: "0.7rem" }}
            >
              September 11, 2001
            </h1>
          </div>
          {/* 3rd Section */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
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
                      <span className="self-end pl-2.5">500</span>
                    </h1>
                    <h1 className="flex items-center gap-3">
                      <span className="font-medium">Flesch Kinkaid</span>
                      <span className="self-end pl-0.5">90/100</span>
                    </h1>
                  </div>
                  {/* Subjectivity */}
                  <div className="">
                    <h1 className="flex items-center gap-3">
                      <span className="font-medium">Subjectivity</span>
                      <span className="self-end pl-2.5">0.4/1</span>
                    </h1>
                    <h1 className="flex items-center gap-3">
                      <span className="font-medium">Polarity</span>
                      <span className="self-end pl-[22px]">-0.9/[-1.1]</span>
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
                <li>
                  Generic Corporation is focused on offering generic services
                  with generic advantages
                </li>
                <li>
                  Generic Corporation was founded by Generic Founder with the
                  generic mission of doing generic thing
                </li>
                <li>Generic Text Line for Testing </li>
              </ol>
            </div>
            {/* Date */}
            <h1
              className="text-gray-500"
              style={{ fontSize: "0.55rem", lineHeight: "0.7rem" }}
            >
              September 11, 2001
            </h1>
          </div>
          {/* 4th Section */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
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
                      <span className="self-end pl-2.5">500</span>
                    </h1>
                    <h1 className="flex items-center gap-3">
                      <span className="font-medium">Flesch Kinkaid</span>
                      <span className="self-end pl-0.5">90/100</span>
                    </h1>
                  </div>
                  {/* Subjectivity */}
                  <div className="">
                    <h1 className="flex items-center gap-3">
                      <span className="font-medium">Subjectivity</span>
                      <span className="self-end pl-2.5">0.4/1</span>
                    </h1>
                    <h1 className="flex items-center gap-3">
                      <span className="font-medium">Polarity</span>
                      <span className="self-end pl-[22px]">-0.9/[-1.1]</span>
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
                <li>
                  Generic Corporation is focused on offering generic services
                  with generic advantages
                </li>
                <li>
                  Generic Corporation was founded by Generic Founder with the
                  generic mission of doing generic thing
                </li>
                <li>Generic Text Line for Testing </li>
              </ol>
            </div>
            {/* Date */}
            <h1
              className="text-gray-500"
              style={{ fontSize: "0.55rem", lineHeight: "0.7rem" }}
            >
              September 11, 2001
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenericCorporate;
