"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from "@/components/ui/Button";
import { carouselData } from "@/contants/data";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SliderData = () => {
  const [slidePercentage, setSlidePercentage] = useState(20); // Default for desktop

  useEffect(() => {
    // Function to adjust the centerSlidePercentage based on screen width
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidePercentage(100); // For small screens, show 1 card at a time
      } else if (window.innerWidth < 1024) {
        setSlidePercentage(50); // For tablets, show 2 cards
      } else {
        setSlidePercentage(20); // For desktops, show 5 cards
      }
    };

    // Set the initial percentage
    handleResize();

    // Update on window resize
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white py-10">
      <div className="container mx-auto px-4">
        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          emulateTouch={true}
          swipeable={true}
          centerMode={true}
          centerSlidePercentage={slidePercentage} // Dynamically adjust percentage
          selectedItem={2} // Start with the middle card selected
          renderArrowPrev={(onClickHandler, hasPrev) =>
            hasPrev && (
              <button
                onClick={onClickHandler}
                className="absolute left-4 top-1/2 z-10 -mt-4 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
              >
                <FaArrowLeft className="text-gray-800" />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext) =>
            hasNext && (
              <button
                onClick={onClickHandler}
                className="absolute right-4 top-1/2 z-10 -mt-4 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
              >
                <FaArrowRight className="text-gray-800" />
              </button>
            )
          }
        >
          {carouselData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden mx-2 my-4 transform transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-32 sm:h-40 md:h-48"> {/* Reduced heights for different screens */}
                <Image
                  src={item.image}
                  alt={item.heading}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h2 className="absolute bottom-2 left-2 text-white text-sm font-bold">
                  {item.heading}
                </h2>
              </div>
              <div className="p-3">
                <p className="text-gray-600 text-xs mb-2 line-clamp-2">
                  {item.description}
                </p>
                <Button
                  width="w-full"
                  height="h-8"
                  className="text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default SliderData;
