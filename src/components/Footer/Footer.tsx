import React from "react";

const footerData = [
  {
    type: "logo",
    logo: "/images/logo-light.webp",
    socialIcons: [
      { src: "/images/instagrams.svg", alt: "Instagram" },
      { src: "/images/fb.svg", alt: "Facebook" },
      { src: "/images/linkdn.svg", alt: "LinkedIn" }
    ],
    copyright: "All Rights Reserved © 2024 Qode Interactive"
  },
  {
    title: "Our Division",
    items: ["About Us", "Our Services", "Our Team", "Open Positions", "Careers", "FAQ Page", "Our Clients"]
  },
  {
    title: "Company Services",
    items: ["Request A Freight", "Our Services", "What We Do", "Abandonment Cart", "Shipments", "Pricing Flexibility", "Online Scheduling"]
  },
  {
    title: "Contact Info",
    items: ["Contact Us", "FAQ Page", "Get In Touch", "Global Network", "Support 24/7"]
  }
];

const Footer = () => {
  return (
    <footer className="bg-[#0f313a] text-white py-8 px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 h-auto">
      {footerData.map((section, index) => (
        <div 
          key={index} 
          className={`flex flex-col ${
            index === 0 ? 'items-center sm:items-start' : ''
          } ${
            index < footerData.length - 1 ? 'border-b sm:border-b-0 sm:border-r' : ''
          } border-gray-600 pb-6 sm:pb-0 sm:pr-4 md:pr-6 lg:pr-8`}
        >
          {section.type === 'logo' ? (
            <>
              <img src={section.logo} alt="Logo" className="mb-4 w-24 sm:w-32" />
              <div className="flex space-x-4 mb-4">
                {section.socialIcons.map((icon, iconIndex) => (
                  <img key={iconIndex} src={icon.src} alt={icon.alt} className="w-5 h-5 sm:w-6 sm:h-6" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
                {section.copyright}
              </p>
            </>
          ) : (
            <>
              <div className="flex items-center gap-3 mb-4">
                <img src="/images/arrow.svg" alt="Arrow" className="w-4 h-4 sm:w-5 sm:h-5" />
                <p className="text-base sm:text-lg font-semibold">{section.title}</p>
              </div>
              <ul className="space-y-1">
                {section?.items?.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a href="#" className="text-sm sm:text-base text-gray-300 hover:text-gray-100 hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </footer>
  );
};

export default Footer;