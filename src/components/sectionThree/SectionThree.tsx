"use client";
import React, { useEffect, useRef, useState } from 'react';
import './SectionThree.css';

function SectionThree() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    { 
      icon: "icon1.svg", 
      title: "Air Freight", 
      description: "Fast and reliable air freight services for all your shipping needs, ensuring timely delivery anywhere in the world." 
    },
    { 
      icon: "icon2.svg", 
      title: "Ocean Freight", 
      description: "Cost-effective ocean freight solutions for large shipments, with global coverage and flexible shipping options." 
    },
    { 
      icon: "icon3.svg", 
      title: "Land Transport", 
      description: "Efficient land transport services, including trucking and rail, to ensure safe delivery across regions." 
    },
    { 
      icon: "icon4.svg", 
      title: "Warehousing", 
      description: "Secure and spacious warehousing solutions, offering storage and distribution for your goods with top-notch management." 
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
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
    <div ref={sectionRef} className="bg-gray-100 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`
              bg-gray-200 relative flex flex-col 
              min-h-[300px] sm:min-h-[320px] lg:min-h-[340px]
              border-b border-gray-400 sm:border-b-0
              ${index % 2 === 0 ? 'sm:border-r' : ''}
              ${index < services.length - 2 ? 'sm:border-b' : ''}
              ${index < services.length - 1 ? 'lg:border-r lg:border-b-0' : ''}
            `}
          >
            <img 
              src={`/images/${service.icon}`} 
              alt={`${service.title} Icon`} 
              className="absolute top-8 right-8 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain" 
            />
            <div className="flex flex-col justify-end p-6 sm:p-8 flex-grow">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                {isVisible && (
                  <span className="typing-effect" style={{animationDelay: `${index * 0.5}s`}}>
                    {service.title}
                  </span>
                )}
              </h2>
              {isVisible && (
                <p className="text-sm sm:text-base text-gray-600 mb-2 fade-in-out-in" style={{animationDelay: `${index * 0.5 + 3.5}s`}}>
                  {service.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionThree;