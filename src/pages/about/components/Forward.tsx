import Button from "@/components/ui/Button";
import React from "react";

const forwardData = {
  heading: "We Forward International And Domestic Shipments",
  paragraphs: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    "Better use of existing infrastructure with point to point connections."
  ],
  buttonText: "View More"
};

const Forward = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-start">
        {/* Left side - Heading */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {forwardData.heading.split(' ').map((word, index, array) => (
              <React.Fragment key={index}>
                {word}
                {index !== array.length - 1 && index % 3 === 2 && <br />}
                {' '}
              </React.Fragment>
            ))}
          </h2>
        </div>

        {/* Right side - Content and Button */}
        <div className="w-full md:w-1/2 md:pl-8">
          {forwardData.paragraphs.map((paragraph, index) => (
            <p key={index} className={`mb-4 ${index === forwardData.paragraphs.length - 1 ? 'mb-6' : ''}`}>
              {paragraph}
            </p>
          ))}
          <Button>{forwardData.buttonText}</Button>
        </div>
      </div>
    </div>
  );
};

export default Forward;