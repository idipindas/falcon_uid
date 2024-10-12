import React from "react";

const contactData = {
  title: "Get In Touch",
  description: "Get In Touch Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullam, velit rutrum dictum lobortis turpis.",
  supportCenter: "Support Center",
  phoneNumber: "+767 575 765",
  location: {
    title: "Our Location",
    address: "198 West 21th Street, New York NY City 1010"
  },
  contact: {
    title: "Write to Us",
    details: "+767 575 765 60 freightexpress@mail.com"
  },
  mapImage: "https://images.designtrends.com/wp-content/uploads/2015/12/04065454/World-map-vectors23.jpg"
};

function SectionSeven() {
  return (
    <div className="flex flex-col lg:flex-row w-full bg-white p-4 sm:p-8 md:p-16 lg:p-24 xl:p-32">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-full mb-8 lg:mb-0 overflow-hidden">
        <img
          src={contactData.mapImage}
          alt="World Map"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Text Content Section */}
      <div className="w-full lg:w-1/2 h-full p-4 sm:p-6 md:p-8 flex justify-center text-black">
        <div className="w-full max-w-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{contactData.title}</h1>
          <p className="mb-4 text-sm sm:text-base">{contactData.description}</p>
          <p className="mb-4 text-base sm:text-lg font-semibold">{contactData.supportCenter}</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-6 sm:mt-10">{contactData.phoneNumber}</h1>
          <div className="flex flex-col sm:flex-row justify-between mt-10 sm:mt-20">
            <div className="mb-4 sm:mb-0">
              <p className="font-bold">{contactData.location.title}</p>
              <p className="text-sm sm:text-base">{contactData.location.address}</p>
            </div>
            <div>
              <p className="font-bold">{contactData.contact.title}</p>
              <p className="text-sm sm:text-base">{contactData.contact.details}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionSeven;