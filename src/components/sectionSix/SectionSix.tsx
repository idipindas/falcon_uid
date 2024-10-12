"use client";
import React from "react";
import "./sectionSix.css";

const teamMembers = [
  {
    id: 1,
    img: "/images/img1.jpg",
    name: "Team Member 1",
    description: "Description or additional info about this team member.",
  },
  {
    id: 2,
    img: "/images/img2.jpg",
    name: "Team Member 2",
    description: "Description or additional info about this team member.",
  },
  {
    id: 3,
    img: "/images/img3.jpg",
    name: "Team Member 3",
    description: "Description or additional info about this team member.",
  },
  {
    id: 4,
    img: "/images/img4.jpg",
    name: "Team Member 4",
    description: "Description or additional info about this team member.",
  },
  {
    id: 5,
    img: "/images/img1.jpg",
    name: "Team Member 5",
    description: "Description or additional info about this team member.",
  },
  {
    id: 6,
    img: "/images/img2.jpg",
    name: "Team Member 6",
    description: "Description or additional info about this team member.",
  },
];

function SectionSix() {
  return (
    <div className="relative w-full py-8 sm:py-10 md:py-12 lg:py-16 bg-white overflow-hidden">
      <div className="text-center mb-6 sm:mb-8 md:mb-10">
        <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-medium  heading-shadow">Meet Our Team</h1>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="flex space-x-4 animate-marquee">
          {teamMembers.concat(teamMembers).map((member, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 sm:w-72 md:w-80 lg:w-96 px-2"
            >
              <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full p-3 sm:p-4 bg-white bg-opacity-10 backdrop-blur-md">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-800 truncate">
                    {member.name}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 line-clamp-2">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionSix;