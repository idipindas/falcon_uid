import React from 'react'
import Image from 'next/image'

const aboutData = {
  title: "About Us",
  imageSrc: "/images/about.jpg",
  imageAlt: "Zipzap Logistics",
  paragraphs: [
    "Zipzap logistics has grown from a small local carrier to a nationwide logistics. Our journey has been marked by significant milestones and continuous improvement, always aiming to provide better service to our clients. Today, we are proud to be a leader in the road freight transport industry, known for our reliability and customer-centric approach.",
    "Your trusted partner in road freight transport. We are a dedicated team of professionals committed to providing reliable, efficient, and cost-effective transportation solutions."
  ]
}

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-16 mt-20">
      <div className="flex flex-col md:flex-row items-center">
        {/* Left side - Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
            <Image
              src={aboutData.imageSrc}
              alt={aboutData.imageAlt}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="w-full md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold mb-4">{aboutData.title}</h2>
          {aboutData.paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutUs
