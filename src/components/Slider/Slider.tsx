"use client";
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import "./animation.css";

const Slider = () => {
  const carouselItems = [
    {
      type: "image",
      src: "https://wallpapercave.com/wp/wp4233026.jpg",
      alt: "Image 1",
      title: "Professional Safe Delivery",
      bottomTitle: "Air Freight",
    },
    {
      type: "image",
      src: "https://wallup.net/wp-content/uploads/2019/09/344761-boeing-747-airliner-aircraft-plane-airplane-boeing-747-transport-36-2.jpg",
      alt: "Image 2",
      title: "Package Delivery News",
      bottomTitle: "Land Transport",
    },
    {
      type: "video",
      src: "/videos/video-mainhome.mp4",
      title: "Reliable Service Transport",
      bottomTitle: "Transport Logistics",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTitle, setShowTitle] = useState(false);
  const [logoKey, setLogoKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
      setShowTitle(false);
      setLogoKey(prev => prev + 1); // Trigger logo animation
    }, 10000);

    return () => clearInterval(interval);
  }, [carouselItems.length]);

  useEffect(() => {
    const titleTimeout = setTimeout(() => {
      setShowTitle(true);
    }, 2000);

    return () => clearTimeout(titleTimeout);
  }, [currentIndex]);

  const renderItem = (item: any) => {
    if (item.type === "image") {
      return (
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-full object-cover image-fade-in"
        />
      );
    } else if (item.type === "video") {
      return (
        <video
          className="w-full h-full object-cover image-fade-in"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={item.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
    return null;
  };

  const renderTitle = (title: string) => {
    return (
      <div className="title-container">
        {title.split("").map((letter, index) => (
          <span
            key={index}
            style={{ animationDelay: `${0.1 * index}s` }}
            className="title-animation"
          >
            {letter}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-screen overflow-hidden">
      {renderItem(carouselItems[currentIndex])}
      <div key={logoKey} className="absolute top-20 md:top-52 lg:top-56 left-1/2 transform -translate-x-1/2 logo-fade-in-out">
        <Image src="/images/logo-light.webp" alt="Logo" width={150} height={50} />
      </div>
      {showTitle && (
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-8">
          <h1 className="text-white text-xl  md:text-5xl xl:text-8xl font-bold text-center">
            {renderTitle(carouselItems[currentIndex].title)}
          </h1>
        </div>
      )}
      <div className="absolute bottom-4 left-4 text-white px-3 py-1 rounded-full flex space-x-2">
        {carouselItems.map((item, index) => (
          <span
            key={index}
            className={`md:w-40 md:h-20 flex items-center justify-center rounded-md px-4 ${
              index === currentIndex
                ? "backdrop-filter backdrop-blur-sm bg-black bg-opacity-20 text-xs"
                : ""
            }`}
          >
            {item.bottomTitle}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Slider;