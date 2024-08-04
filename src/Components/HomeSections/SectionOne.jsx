import React from "react";
import SectionImage from "../../assets/section_1.webp";

const SectionOne = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center mt-16">
      <div className="flex w-3/4 gap-[40px]">
        <div className="w-2/4 flex flex-col justify-center">
          <h1 className="text-3xl flex flex-col font-bold mb-4">
            Enhancement,<span> not Replacement</span>
          </h1>
          <h3 className="italic font-semibold mb-4">
            What if AI made human content more accessible?
          </h3>
          <p className="text-sm w-5/6 text-pretty">
            Unlike other AI search solutions, Zimuth aims to highlight and
            support quality human content. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat
            volutpat. Donec placerat nisl magna, et faucibus arcu condimentum
            sed. Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="w-2/4 flex justify-start">
          <img src={SectionImage} alt="Section" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
