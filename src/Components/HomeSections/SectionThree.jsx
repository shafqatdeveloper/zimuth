import React from "react";
import SectionImage from "../../assets/section_3.webp";

const SectionThree = () => {
  return (
    <div className="w-full h-full flex items-center justify-center mt-16">
      <div className="flex w-full flex-col md:flex-row md:w-3/4 gap-[40px]">
        <div className="md:w-2/4 flex px-5 md:px-0 flex-col justify-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl flex md:flex-col flex-row font-bold mb-4">
            Helping you<span> judge for yourself</span>
          </h1>
          <h3 className="italic font-semibold mb-4">
            What if AI deteced rather than reinforced bias?
          </h3>
          <p className="text-sm w-full md:w-5/6 text-pretty">
            Zimuth's proprietary algorithms allow you to identify systemic bias mathematically. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.
          </p>
        </div>
        <div className="md:w-2/4 w-full flex justify-center md:justify-start ">
          <img src={SectionImage} alt="Section" className="w-3/4 sm:w-2/4 md:w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
