import React from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'

const servicesData = [
  {
    title: "Our Logistics",
    subtitle: "Services",
    description: "Welcome to the world of ZIPZAP, where you can explore the journey that has shaped our success today. Dive into our key figures, global reach, and the milestones that define our identity.",
    imageSrc: "/images/Services1.webp",
    imageAlt: "Our Logistics Services",
    buttonText: "View More"
  }
]

const OurServices = () => {
  return (
    <div className="bg-white py-16 mt-16">
      <div className="container mx-auto px-4">
        {servicesData.map((service, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center">
            {/* Left side - Content */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-5xl font-bold mb-2">{service.title}</h2>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">{service.subtitle}</h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <Button>{service.buttonText}</Button>
            </div>

            {/* Right side - Image */}
            <div className="w-full md:w-1/2 md:pl-8">
              <div className="relative w-full h-[300px] md:h-[400px]">
                <Image
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurServices