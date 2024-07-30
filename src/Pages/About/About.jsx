import React from "react";
import AboutCarousel from "../../Components/AboutCarousel/AboutCarousel";
import GraphImage from "../../assets/graph.png";
import Member1 from "../../assets/TeamMember1.png";
import Member2 from "../../assets/TeamMember2.png";
import Member3 from "../../assets/TeamMember3.png";

const About = () => {
  return (
    <div className="pt-16 w-full flex flex-col items-center bg-[#FAFAFA] dark:bg-darkBlack text-darkBlack dark:text-darkWhite justify-center">
      <div className="w-full">
        <AboutCarousel />
      </div>
      {/* Images Section */}
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-3/4 bg-gradient-to-b from-[#FAFAFA] via-[#FAFAFA] my-10 to-[#D1D1D1] rounded-b-xl flex items-center justify-center">
          <img src={GraphImage} alt="" />
        </div>
        <div className="w-2/4">
          <h1 className="text-4xl font-semibold text-center pt-28">
            Visualize changes in sentiment. Map information across time.
          </h1>
        </div>
        <div className="w-3/4 bg-gradient-to-b from-[#FAFAFA] via-[#FAFAFA] my-10 to-[#D1D1D1] rounded-b-xl flex items-center justify-center">
          <img src={GraphImage} alt="" />
        </div>
        <div className="w-2/4">
          <h1 className="text-4xl font-semibold text-center pt-28">
            Visualize changes in sentiment. Map information across time.
          </h1>
        </div>
        <div className="w-3/4 bg-gradient-to-b from-[#FAFAFA] via-[#FAFAFA] my-10 to-[#D1D1D1] rounded-b-xl flex items-center justify-center">
          <img src={GraphImage} alt="" />
        </div>
      </div>
      {/* Typegraphy */}
      <div className="w-full flex flex-col items-center justify-center pt-28 gap-20">
        {/* Section-1 */}
        <div className="w-3/5 flex flex-col gap-4">
          <h6 className="text-center">Mission</h6>
          <h1 className="text-center pt-3 text-3xl font-semibold">
            Empowering Human Ideas
          </h1>
          <p className="text-center text-pretty">
            Zimuth is a tool that collates and preserves human ideas. Providing
            precise, unbiased results in immaculate format and unprecedented
            depth. Developed by researchers for researchers, Zimuth is a passion
            project dedicated to truth, technology and progress.
          </p>
        </div>
        {/* Section-2 */}
        <div className="w-3/5 flex flex-col gap-4">
          <h6 className="text-center">Vision</h6>
          <h1 className="text-center pt-3 text-3xl font-semibold">
            AI without Sacrifices
          </h1>
          <p className="text-center text-pretty">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et
            faucibus arcu condimentum sed.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat
            volutpat.
          </p>
        </div>
      </div>
      {/* Alternative Typography */}
      <div className="w-3/5 flex flex-col gap-20 pt-28">
        {/* Section-1 */}
        <div className="w-2/4 flex flex-col gap-5 self-start">
          <h6>Technology</h6>
          <h1 className="text-3xl font-semibold">Large Language Models</h1>
          <p className="text-justify">
            Summary algorithm based on open-source projects like llama_cpp and
            LLMs such as Llama3 for automated browsing and summarizing of SERP
            results. Summarization operations will primarily be run by a
            quantized Llama 3 with an extended context window.
          </p>
        </div>
        {/* Section-2 */}
        <div className="w-2/4 flex flex-col gap-5 self-end">
          <h1 className="text-3xl font-semibold">Algorithms</h1>
          <p className="text-justify">
            Summary algorithm based on open-source projects like llama_cpp and
            LLMs such as Llama3 for automated browsing and summarizing of SERP
            results. Summarization operations will primarily be run by a
            quantized Llama 3 with an extended context window.
          </p>
        </div>
        {/* Section-3 */}
        <div className="w-2/4 flex flex-col gap-5 self-start">
          <h1 className="text-3xl font-semibold">Detection Mechanisms</h1>
          <p className="text-justify">
            Summary algorithm based on open-source projects like llama_cpp and
            LLMs such as Llama3 for automated browsing and summarizing of SERP
            results. Summarization operations will primarily be run by a
            quantized Llama 3 with an extended context window.
          </p>
        </div>
      </div>
      {/* Team */}
      <div className="w-2/4 pb-48 flex flex-col gap-20 pt-28">
        <h1 className="text-center text-3xl font-semibold">Team</h1>
        {/* Team Member 1 */}
        <div className="flex items-center gap-16 w-full">
          {/* Image Side */}
          <div className="w-1/5 flex flex-col items-center justify-center">
            <img src={Member1} alt="" className="w-full h-auto" />
            <h1 className="pt-1 font-semibold">Founder</h1>
            <h3 className="text-sm tracking-wide">Shun Kwok</h3>
          </div>
          {/* Description Side */}
          <div className="w-4/5">
            <p className="text-justify">
              Driven by his passion for research (and annoyed at the manual
              scraping it often entailed), Shun came up with Zimuth to
              automating the process. It only took 6 months and a start-up, but
              at least the original problem went away.
            </p>
          </div>
        </div>
        {/* Team Member 2 */}
        <div className="flex items-center gap-16 w-full">
          {/* Description Side */}
          <div className="w-4/5">
            <p className="text-justify">
              Driven by his passion for research (and annoyed at the manual
              scraping it often entailed), Shun came up with Zimuth to
              automating the process. It only took 6 months and a start-up, but
              at least the original problem went away.
            </p>
          </div>
          {/* Image Side */}
          <div className="w-1/5 flex flex-col items-center justify-center">
            <img src={Member2} alt="" className="w-full h-auto" />
            <h1 className="pt-1 font-semibold">Founder</h1>
            <h3 className="text-sm tracking-wide">Yu Wei Ng</h3>
          </div>
        </div>
        {/* Team Member 3 */}
        <div className="flex items-center gap-16 w-full">
          {/* Image Side */}
          <div className="w-1/5 flex flex-col items-center justify-center">
            <img src={Member3} alt="" className="w-3/4" />
            <h1 className="pt-1 font-semibold">Founder</h1>
            <h3 className="text-sm tracking-wide">Yu Wei Ng</h3>
          </div>
          {/* Description Side */}
          <div className="w-4/5">
            <p className="text-justify">
              Driven by his passion for research (and annoyed at the manual
              scraping it often entailed), Shun came up with Zimuth to
              automating the process. It only took 6 months and a start-up, but
              at least the original problem went away.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
