import React from "react";

const TooltipContent = () => {
  return (
    <div
      style={{ fontSize: "0.5rem", lineHeight: "0.64rem" }}
      className="w-full text-darkBlack h-full flex flex-col gap-3"
    >
      <p>
        <strong>Word Count</strong> is the total number of words in the body
        parapraphs of the webpage. In general, pages with a higher word count
        contain more and deeper content.
      </p>
      <p>
        <strong>Flesch-Kinkaid</strong> Level is a measure of the readability of
        a passage based on its average word and sentence lengths. Pages with a
        lower score are will generally be more difficult to read.
      </p>
      <p>
        <strong>Subjectivity</strong>
        scores measure the subjectivity of a webpage through the frequency at
        which modifying terms such as 'nice' are used. Higher scores indicate
        greater textual subjectivity.
      </p>
      <p>
        <strong>Polarity</strong>
        measures a passage's sentiment through its use of terms with emotional
        connotations. Scores range from -1 for maximum negative sentiment to +1
        for maximum positive sentiment.
      </p>
    </div>
  );
};

export default TooltipContent;
