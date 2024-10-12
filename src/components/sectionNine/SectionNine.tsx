import React from 'react';
import './sectionNine.css';

const slidingTextData = {
  text: "Transport & Logistics",
  repetitions: 12
};

function SectionNine() {
  return (
    <div className="relative bg-red-500 overflow-hidden h-28">
      <div className="slide-container h-full flex items-center">
        <div className="slide-text text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-white whitespace-nowrap">
          {Array(slidingTextData.repetitions).fill(slidingTextData.text).map((text, index) => (
            <React.Fragment key={index}>
              {text}
              <span className="mx-1 sm:mx-2 md:mx-3 lg:mx-4">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionNine;