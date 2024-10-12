"use client";
import React, { useEffect, useRef, useState } from "react";
import "./SectionFive.css";
import Button from "../ui/Button";

function SectionFive() {
  const sectionRef = useRef<HTMLElement>(null);
  const numberRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const [isMounted, setIsMounted] = useState(false); // State to check if the component is mounted

  const solutions = [
    { number: "01", title: "Long Distance Moves" },
    { number: "02", title: "Local Moves" },
    { number: "03", title: "Office Relocations" },
    { number: "04", title: "Specialized Moving" },
  ];

  useEffect(() => {
    setIsMounted(true); // Set mounted state to true when the component mounts
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          numberRefs.current.forEach((numberRef, index) => {
            if (numberRef) {
              // Add the animate class with delay for each number
              numberRef.style.animationDelay = `${index * 0.3}s`;
              numberRef.classList.add("bounce-in");
            }
          });

          // Apply the flip animation to titles without additional delay
          titleRefs.current.forEach((titleRef, index) => {
            if (titleRef) {
              titleRef.style.animationDelay = `${index * 0.3}s`; // Same delay as numbers
              titleRef.classList.add("flip-in");
            }
          });
        }
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
    <section
      ref={sectionRef}
      className="py-8 md:py-12 lg:py-20 px-4 md:px-8 lg:px-44 bg-[#0f313a] section"
    >
      {/* Heading and Button Row */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center sm:text-left">
          Solutions That Make Changes
        </h1>
        <Button>View More</Button>
      </div>

      {/* Columns Section */}
      <div className="space-y-6">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className={`p-4 md:p-6 border-t ${
              index === solutions.length - 1 ? "border-b" : ""
            } border-gray-700 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center`}
          >
            <h2
              ref={(el) => {
                numberRefs.current[index] = el;
              }}
              className={`text-5xl md:text-6xl lg:text-7xl font-bold text-orange-700 mb-2 text-center sm:text-left ${
                isMounted ? "" : "hidden" // Only show if mounted
              }`}
            >
              {solution.number}
            </h2>

            <h3
              ref={(el) => {
                titleRefs.current[index] = el;
              }}
              className={`text-lg md:text-xl font-semibold text-white mb-2 text-center sm:text-left ${
                isMounted ? "" : "hidden" // Only show if mounted
              }`}
            >
              {solution.title}
            </h3>
            <p className="text-gray-400 text-sm md:text-base text-center sm:text-left">
              Lorem ipsum dolor sit amet, id has nihil discere periculis. No
              novum cu labor probatus
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SectionFive;
