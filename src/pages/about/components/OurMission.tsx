import React from 'react'
import Image from 'next/image'

const missionData = {
  title: "Our Mission",
  content: [
    "Our mission is to provide high Quality Service and value to our customers through our diverse range of automotive and logistics solutions.",
    "We aim to build lasting relationships with our clients by delivering exceptional products, dependable transport services, and secure storage facilities."
  ],
  imageSrc: "/images/about2.webp",
  imageAlt: "Our Mission"
}

const OurMission = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center">
        {/* Left side - Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div className="relative w-full h-[300px] md:h-[400px]">
            <Image
              src={missionData.imageSrc}
              alt={missionData.imageAlt}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg "
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="w-full md:w-1/2 md:pl-8">
          <h2 className="text-5xl font-bold mb-4">{missionData.title}</h2>
          {missionData.content.map((paragraph, index) => (
            <p key={index} className="mb-4 text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurMission