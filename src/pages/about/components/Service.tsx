"use client";
import React, { useState } from "react";

const serviceData = [
  {
    title: "Business Events",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: "Development & Transport",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    title: "Analysis",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    title: "Security for Cargo",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus."
  }
]

const Service = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="bg-[#0f313a] py-16">
      <div className="container mx-auto px-4">
        <div className="space-y-4">
          {serviceData.map((service, index) => (
            <div key={index} className="border-b border-gray-700 last:border-b-0">
              <button
                className="w-full text-left p-4 flex justify-between items-center"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-semibold text-white">{service.title}</span>
                <span className="text-white text-2xl font-bold">
                  {expandedIndex === index ? '-' : '+'}
                </span>
              </button>
              {expandedIndex === index && (
                <div className="p-4">
                  <p className="text-gray-300">{service.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Service