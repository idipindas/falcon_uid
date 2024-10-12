import React from 'react'
import Image from 'next/image'

const moreAboutData = {
  title: "More About",
  companyName: "ZIPZAP",
  description: "Welcome to the world of ZIPZAP, where you can explore the journey that has shaped our success today. Dive into our key figures, global reach, and the milestones that define our identity.",
  imageSrc: "/images/about1.webp",
  imageAlt: "About ZIPZAP"
}

function MoreAbout() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center">
        {/* Left side - Heading and Paragraph */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-5xl font-bold mb-2">{moreAboutData.title}</h2>
          <h3 className="text-3xl font-semibold mb-4">{moreAboutData.companyName}</h3>
          <p className="text-lg">{moreAboutData.description}</p>
        </div>

        {/* Right side - Image */}
        <div className="w-full md:w-1/2 md:pl-8">
          <div className="relative w-full h-[300px] md:h-[400px]">
            <Image
              src={moreAboutData.imageSrc}
              alt={moreAboutData.imageAlt}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg "
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoreAbout