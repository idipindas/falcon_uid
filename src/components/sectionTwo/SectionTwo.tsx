"use client";
import React, { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";

function SectionTwo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false); // State to check if the component is mounted

  useEffect(() => {
    setIsMounted(true); // Set mounted state to true when the component mounts
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          sectionRef.current?.classList.add('animate');
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
    <div
      ref={sectionRef}
      className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-5/12 text-center lg:text-left p-4 sm:p-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6">
            <span className={`inline-block ${isMounted ? "animate-bounce-1" : "hidden"}`}>Fast</span>{' '}
            <span className={`inline-block ${isMounted ? "animate-bounce-2" : "hidden"}`}>Delivery</span>{' '}
            <span className={`inline-block ${isMounted ? "animate-bounce-3" : "hidden"}`}>And</span>{' '}
            <span className={`inline-block ${isMounted ? "animate-bounce-4" : "hidden"}`}>Secure</span>{' '}
            <span className={`inline-block ${isMounted ? "animate-bounce-5" : "hidden"}`}>Packages</span>
          </h1>
          <p className={`text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 ${isMounted ? "animate-fade-in" : "hidden"}`}>
            Lorem ipsum dolor sit amet, id has nihil discere vocibus. No novum
            cu laborpro batus cum, te utamur scripta.
          </p>
          <Button className={`animate-fade-in ${isMounted ? "" : "hidden"}`}>View More</Button>
        </div>
        <div className="w-full lg:w-6/12 mt-8 lg:mt-0 p-4 sm:p-6">
          <img
            src="/images/image3.webp"
            alt="Fast Delivery"
            className={`w-full h-auto rounded-lg shadow-lg animate-slide-in ${isMounted ? "" : "hidden"}`}
          />
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
