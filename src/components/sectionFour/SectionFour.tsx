import React from "react";
import "./sectionFour.css";
import Button from "../ui/Button";

function SectionFour() {
  const text = "Inland Freight";

  return (
    <div className="relative w-full min-h-screen flex flex-col lg:flex-row">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/image4.jpg"
          alt="Inland Freight Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Overlay */}
      <div className="relative z-10 w-full lg:w-1/2 p-4 sm:p-8 md:p-12 lg:p-16 flex items-end">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 md:gap-6">
          <img
            src="/images/arrow.svg"
            alt="Arrow Icon"
            className="w-12 sm:w-16 md:w-20 lg:w-24 xl:w-32 slide-animation"
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
            <div className="staggered-animation">
              {text.split("").map((char, index) => (
                <span key={index}>{char}</span>
              ))}
            </div>
          </h1>
        </div>
      </div>

      {/* Form Container */}
      <div className="relative z-10 w-full lg:w-1/2 p-4 sm:p-8 md:p-12 lg:p-16 flex items-center justify-center">
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg p-6 sm:p-8 md:p-10 lg:p-12 w-full max-w-md md:max-w-lg lg:max-w-xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-white">
            Request a Free Quote
          </h2>
          <form className="space-y-4 sm:space-y-6 md:space-y-8">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 sm:p-3 md:p-4 text-base md:text-lg border border-white rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="tel"
              placeholder="Number"
              className="w-full p-2 sm:p-3 md:p-4 text-base md:text-lg border border-white rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <select className="w-full p-2 sm:p-3 md:p-4 text-base md:text-lg border border-white rounded-md bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-white">
              <option value="" disabled selected className="text-gray-800">
                Select a service
              </option>
              <option value="air_freight" className="text-gray-800">
                Air Freight
              </option>
              <option value="ocean_freight" className="text-gray-800">
                Ocean Freight
              </option>
              <option value="land_transport" className="text-gray-800">
                Land Transport
              </option>
            </select>
            <Button width="w-full">Request</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
