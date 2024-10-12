"use client";
import React, { useEffect, useRef, useState } from "react";
import "./sectionEight.css";
import { timelineData } from "@/contants/data";

function SectionEight() {
  const sectionRef = useRef<HTMLElement>(null);
  const yearRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const arrowRefs = useRef<(HTMLImageElement | null)[]>([]); // Ref for arrow images
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Set mounted state to true when the component mounts
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate the year elements and arrow image when they come into view
            yearRefs.current.forEach((yearRef, index) => {
              if (yearRef) {
                yearRef.style.animationDelay = `${index * 0.3}s`;
                yearRef.classList.add("flip-animation");
                // Add rotation class to the arrow
                if (arrowRefs.current[index]) {
                  arrowRefs.current[index].classList.add("rotate-animation");
                }
              }
            });
            // Once animated, we can unobserve the section
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0f313a] flex flex-col lg:flex-row">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 p-4 lg:pr-8">
        <div className="space-y-6">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="border-white pb-6 w-full md:w-[40rem] mt-10 lg:mt-20 px-4 lg:pl-32"
            >
              <h2 className="text-white text-xl md:text-2xl font-bold mb-2">
                {item.heading}
              </h2>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 border-t-2 pt-6">
                <div className="year-container">
                  <h1
                    ref={(el) => {
                      yearRefs.current[index] = el;
                    }}
                    className={`text-white text-4xl md:text-6xl font-bold`}
                  >
                    {item.year}
                  </h1>
                </div>
                <img
                  ref={(el) => {
                    arrowRefs.current[index] = el; // Reference for arrow images
                  }}
                  src="/images/arrow.svg"
                  alt="Arrow"
                  className="w-6 h-6 hidden sm:block"
                />
                <p className="text-white text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
        <img
          src="/images/ship.jpg"
          alt="Ship"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}

export default SectionEight;
