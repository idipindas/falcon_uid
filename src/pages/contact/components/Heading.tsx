import React from "react";
import Image from "next/image";
const Heading = () => {
  return (
    <div className="container mx-auto px-4 py-12 mt-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl">
          <span className="block mb-2">Contact Us.</span>
          <span className="block mb-2">Let's Work</span>
          <span className="flex items-center">
            Together
            <div className="ml-2 inline-flex overflow-hidden">
              <div className="animate-slide-right flex">
                <Image
                  src="/icons/header-arrow.svg"
                  alt="Arrow"
                  width={40}
                  height={40}
                  className="mx-1"
                />
                <Image
                  src="/icons/header-arrow.svg"
                  alt="Arrow"
                  width={40}
                  height={40}
                  className="mx-1"
                />
                <Image
                  src="/icons/header-arrow.svg"
                  alt="Arrow"
                  width={40}
                  height={40}
                  className="mx-1"
                />
              </div>
            </div>
          </span>
        </h1>
      </div>

      {/* Add your contact form or additional content here */}

      <div className="mt-16">
        <p className="text-lg text-gray-600 max-w-3xl">
          Lorem ipsum dolor sit amet, cons ectetur adipiscing elitull am, velit
          rutrum dictum lobortis, turpis.
        </p>
      </div>
    </div>
  )
}

export default Heading
