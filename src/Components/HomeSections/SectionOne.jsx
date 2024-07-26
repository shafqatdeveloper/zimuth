import React from "react";
import SectionImage from "../../assets/section_1.webp";

const SectionOne = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center text-darkBlack mt-16">
      <div className="flex w-4/5">
        <div className="w-3/5 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">
            Enhancement, not Replacement
          </h1>
          <h3 className="italic font-semibold mb-4">
            What if AI made human content more accessible?
          </h3>
          <p className="text-sm w-3/5">
            Unlike other AI search solutions, Zimuth aims to highlight and
            support quality human content. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat
            volutpat. Donec placerat nisl magna, et faucibus arcu condimentum
            sed. Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="w-2/5 flex justify-center">
          <img src={SectionImage} alt="Section" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
