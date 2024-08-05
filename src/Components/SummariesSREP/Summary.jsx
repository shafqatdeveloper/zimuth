import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Tooltip as ReactTooltip } from "react-tooltip";
import TooltipContent from "../TooltipContent/TooltipContent";
import { FaGoogle } from "react-icons/fa";

const Summary = ({ sectionsExpaned, handleSectionsExpand }) => {
  const openCloseSections = () => {
    handleSectionsExpand(!sectionsExpaned);
  };
  return (
    <div className="w-full pb-10 ">
      <ReactTooltip
        className="!w-[380px] !h-[140px] !bg-white border !border-darkBlack !rounded-md"
        place="right"
        effect="solid"
        id="generic-info"
        offset={3}
      >
        <TooltipContent />
      </ReactTooltip>
      {/* First Section Summaries about Generic Corporation */}
      <div className="w-full border-b border-b-black">
        <div className="flex items-center justify-between">
          <h1 className="text-sm lg:text-base font-semibold">
            Summaries about Generic Corporation
          </h1>
          {/* Right Side Information */}
          <div
            data-tooltip-id="generic-info"
            data-tooltip-place="bottom"
            className="flex items-center gap-2 text-xs"
          >
            <h1 className="font-semibold">Metrics</h1>
            <div className="w-[2px] h-8 bg-gray-600"></div>
            {/* Word Count */}
            <div className="text-xs">
              <h1 className="flex items-center gap-3">
                <span className="font-medium">Word Count</span>
                <span className="self-end pl-2.5">500</span>
              </h1>
              <h1 className="flex items-center gap-3">
                <span className="font-medium">Flesch Kinkaid</span>
                <span className="self-end">90/100</span>
              </h1>
            </div>
            {/* Subjectivity */}
            <div className="text-xs">
              <h1 className="flex items-center gap-3">
                <span className="font-medium">Subjectivity</span>
                <span className="self-end pl-2.5">0.4/1</span>
              </h1>
              <h1 className="flex items-center gap-3">
                <span className="font-medium">Polarity</span>
                <span className="self-end pl-7">-0.9/[-1.1]</span>
              </h1>
            </div>
            <div className="text-gray-500 cursor-pointer">
              {sectionsExpaned ? (
                <IoIosArrowUp onClick={openCloseSections} size={28} />
              ) : (
                <IoIosArrowDown onClick={openCloseSections} size={28} />
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
              <li>
                Founded in 2001 by generic founder, generic corporation is a
                generic country industry company
              </li>
              <li>
                Generic Corporation was founded by Generic Founder with the
                generic mission of doing generic thing
              </li>
              <li>Generic text line for testing with additional length</li>
              <li>Generic testing text line</li>
            </ol>
          </div>
        </div>
        {!sectionsExpaned && (
          <div className="pb-6 flex items-center gap-5">
            <div className="flex flex-col items-center gap-0.5">
              <div className="bg-white p-1 border border-darkBlack rounded-lg text-red-500 w-max">
                <FaGoogle />
              </div>
              <p
                style={{ fontSize: "0.5rem", lineHeight: "0.64rem" }}
                className="text-darkBlack font-medium"
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
                className="text-darkBlack font-medium"
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
                className="text-darkBlack font-medium"
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
                className="text-darkBlack font-medium"
              >
                Generic Corp...
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Summary;
