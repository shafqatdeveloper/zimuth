import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Summary = () => {
  return (
    <div className="w-full pb-10">
      {/* First Section Summaries about Generic Corporation */}
      <div className="w-full">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">
            Summaries about Generic Corporation
          </h1>
          {/* Right Side Information */}
          <div className="flex items-center gap-4 text-sm">
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
            <div className="text-gray-500">
              <IoIosArrowDown size={28} />
            </div>
          </div>
        </div>
        {/* Typography */}
        <div className="py-9 flex flex-col gap-7 border-b border-b-black">
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
      </div>
    </div>
  );
};

export default Summary;
