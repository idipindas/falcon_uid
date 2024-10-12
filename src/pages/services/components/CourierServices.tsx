import React from 'react'

const courierServicesData = {
  title: "End-to-End Logistics & Dedicated",
  subtitle: "Courier Services",
  description: "Our logistics services cover all facets of the industry, from dedicated same day delivery to international logistics solutions, we've got your business delivery needs covered. Our team are well-versed in specialist logistics services and drivers at our disposal. Our team of experts are here to find the solution to all your logistical challenges."
}

const CourierServices = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Centered Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-2">
            {courierServicesData.title}
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold">
            {courierServicesData.subtitle}
          </h3>
        </div>

        {/* Paragraph */}
        <div className="w-full mx-auto text-center">
          <p className="text-gray-600">
            {courierServicesData.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CourierServices