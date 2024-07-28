import React from "react";
import SectionImage from "../../assets/section_3.webp";

const SectionThree = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center  text-darkBlack">
      <div className="flex w-3/4 justify-end">
        <div className="w-3/5 pl-32 flex flex-col justify-center">
          <h1 className="text-3xl font-semibold">Helping you</h1>
          <h1 className="text-3xl font-semibold mb-7">judge for yourself.</h1>
          <h3 className="italic font-semibold mb-7">
            What if AI deteced rather than reinforced bias?
          </h3>
          <p className="text-sm w-4/5 text-pretty">
            Zimuth's proprietary algorithms allow you to identify systemic bias
            mathematically. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec
            placerat nisl magna, et faucibus arcu condimentum sed.
          </p>
        </div>
        <div className="w-2/5 flex justify-start">
          <img src={SectionImage} alt="Section" className="w-5/6 h-auto" />
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
