import React from "react";
import AboutCarousel from "../../Components/AboutCarousel/AboutCarousel";
import GraphImage from "../../assets/graph.png";
import Member1 from "../../assets/TeamMember1.png";
import Member2 from "../../assets/TeamMember2.png";
import Member3 from "../../assets/TeamMember3.png";

const About = () => {
  return (
    <div className="relative w-full flex flex-col items-center bg-static-bg-img justify-center bg-repeat-y bg-cover bg-fixed">
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/40 dark:bg-black/40"></div>
      <div className="relative w-full">
        <AboutCarousel />
      </div>
      <div className="relative w-full flex flex-col items-center justify-center text-darkBlack dark:text-white">
        {/* Images Section */}
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-[90%] md:w-3/4 rounded-b-xl bg-gradient-to-b from-transparent py-2  to-[#DFDFDF] flex items-center justify-center">
            <img src={GraphImage} className="w-4/5 md:w-3/5" alt="" />
          </div>
          <div className="w-full md:w-2/4">
            <h1 className="text-2xl px-2 md:px-0 md:text-4xl font-semibold text-center pb-10 pt-28">
              Visualize changes in sentiment. Map information across time.
            </h1>
          </div>
          <div className="w-[90%] md:w-3/4 my-10 rounded-b-xl flex items-center justify-center bg-gradient-to-b from-transparent py-2  to-[#DFDFDF]">
            <img src={GraphImage} className="w-4/5 md:w-3/5" alt="" />
          </div>
          <div className="w-full md:w-2/4">
            <h1 className="text-2xl px-2 md:px-0 md:text-4xl font-semibold text-center pb-10 pt-28">
              Visualize changes in sentiment. Map information across time.
            </h1>
          </div>
          <div className="w-[90%] md:w-3/4 my-10 rounded-b-xl flex items-center justify-center bg-gradient-to-b from-transparent py-2  to-[#DFDFDF]">
            <img src={GraphImage} className="w-4/5 md:w-3/5" alt="" />
          </div>
        </div>
        {/* Typegraphy */}
        <div className="w-full flex flex-col items-center justify-center pt-28 gap-20">
          {/* Section-1 */}
          <div className="w-[90%] md:w-3/5 flex flex-col gap-4">
            <h6 className="text-center text-xl">Mission</h6>
            <h1 className="text-center py-3 text-3xl md:text-5xl font-semibold">
              Empowering Human Ideas
            </h1>
            <p className="md:text-center text-justify md:text-lg leading-relaxed">
              Zimuth is a tool that collates and preserves human ideas.
              Providing precise, unbiased results in immaculate format and
              unprecedented depth. Developed by researchers for researchers,
              Zimuth is a passion project dedicated to truth, technology and
              progress.
            </p>
          </div>
          {/* Section-2 */}
          <div className="w-[90%] md:w-3/5 flex flex-col gap-4">
            <h6 className="text-center text-xl">Vision</h6>
            <h1 className="text-center py-3 text-3xl md:text-5xl font-semibold">
              AI without Sacrifices
            </h1>
            <p className="text-center text-pretty text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              at porttitor sem. Aliquam erat volutpat. Donec placerat nisl
              magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Aliquam at porttitor sem.
              Aliquam erat volutpat.
            </p>
          </div>
        </div>
        {/* Alternative Typography */}
        <div className="w-full md:w-3/5 flex flex-col gap-20 pt-28">
          {/* Section-1 */}
          <div className="w-[90%] md:w-2/4 flex flex-col gap-5 self-center md:self-start">
            <h6 className="text-xl">Technology</h6>
            <h1 className="text-3xl font-semibold">Large Language Models</h1>
            <p className="text-justify">
              Summary algorithm based on open-source projects like llama_cpp and
              LLMs such as Llama3 for automated browsing and summarizing of SERP
              results. Summarization operations will primarily be run by a
              quantized Llama 3 with an extended context window.
            </p>
          </div>
          {/* Section-2 */}
          <div className="w-[90%] md:w-2/4 flex flex-col self-center gap-5 md:self-end">
            <h1 className="text-3xl font-semibold">Algorithms</h1>
            <p className="text-justify">
              Summary algorithm based on open-source projects like llama_cpp and
              LLMs such as Llama3 for automated browsing and summarizing of SERP
              results. Summarization operations will primarily be run by a
              quantized Llama 3 with an extended context window.
            </p>
          </div>
          {/* Section-3 */}
          <div className="w-[90%] md:w-2/4 flex flex-col gap-5 self-center md:self-start">
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
        <div className="w-full md:w-2/5 pb-48 flex flex-col gap-20 pt-28 leading-relaxed">
          <h1 className="text-center text-4xl font-semibold">Team</h1>
          {/* Team Member 1 */}
          <div className="flex items-center flex-col md:flex-row gap-8 md:!gap-16 w-full">
            {/* Image Side */}
            <div className="w-full md:w-1/5 flex flex-col items-center justify-center">
              <img src={Member1} alt="" className="w-2/5 md:w-full h-auto" />
              <h1 className="pt-1 font-semibold">Founder</h1>
              <h3 className="text-sm tracking-wide">Shun Kwok</h3>
            </div>
            {/* Description Side */}
            <div className="w-[90%] md:w-4/5">
              <p className="text-justify">
                Driven by his passion for research (and annoyed at the manual
                scraping it often entailed), Shun came up with Zimuth to
                automating the process. It only took 6 months and a start-up,
                but at least the original problem went away.
              </p>
            </div>
          </div>
          {/* Team Member 2 */}
          {/* Mobile Version */}
          <div className="flex items-center flex-col md:flex-row gap-8 md:gap-16 md:hidden w-full">
            {/* Image Side */}
            <div className="w-full md:w-1/5 flex flex-col items-center justify-center">
              <img src={Member2} alt="" className="w-2/5 md:w-full h-auto" />
              <h1 className="pt-1 font-semibold">Founder</h1>
              <h3 className="text-sm tracking-wide">Yu Wei Ng</h3>
            </div>
            {/* Description Side */}
            <div className="w-[90%] md:w-4/5">
              <p className="text-justify">
                After hearing Shun's initial idea, Yu Wei decided to build a
                demo version within a week. Big mistake. Against his better
                judgement, he was now roped into Zimuth with no escape but
                success. A warning to all programmers: don't build things unless
                you're ready to become a technical founder.
              </p>
            </div>
          </div>
          <div className="hidden md:!flex items-center gap-16 w-full">
            {/* Description Side */}
            <div className="w-4/5">
              <p className="text-justify">
                After hearing Shun's initial idea, Yu Wei decided to build a
                demo version within a week. Big mistake. Against his better
                judgement, he was now roped into Zimuth with no escape but
                success. A warning to all programmers: don't build things unless
                you're ready to become a technical founder.
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
          {/* Mobile Version */}
          <div className="flex items-center flex-col md:flex-row gap-8 md:gap-16 md:hidden w-full">
            {/* Image Side */}
            <div className="w-full md:w-1/5 flex flex-col items-center justify-center">
              <img src={Member3} alt="" className="w-2/5 md:w-full h-auto" />
              <h1 className="pt-1 font-semibold">Founder</h1>
              <h3 className="text-sm tracking-wide">Fei Leung</h3>
            </div>
            {/* Description Side */}
            <div className="w-[90%] md:w-4/5">
              <p className="text-justify">
                Fei's the only one of us with any common sense. He's also the
                only one who prefers UI that doesn't look like the early 2000s.
                Apparently, bat and txt files don't represent the pinnacle of
                design. Do hate mail contact@searcherai.net to express your
                disagreement.
              </p>
            </div>
          </div>
          {/* Desktop Version */}
          <div className="hidden md:!flex items-center gap-16 w-full">
            {/* Image Side */}
            <div className="w-1/5 flex flex-col items-center justify-center">
              <img src={Member3} alt="" className="w-3/4" />
              <h1 className="pt-1 font-semibold">Founder</h1>
              <h3 className="text-sm tracking-wide">Fei Leung</h3>
            </div>
            {/* Description Side */}
            <div className="w-4/5">
              <p className="text-justify">
                Fei's the only one of us with any common sense. He's also the
                only one who prefers UI that doesn't look like the early 2000s.
                Apparently, bat and txt files don't represent the pinnacle of
                design. Do hate mail contact@searcherai.net to express your
                disagreement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
