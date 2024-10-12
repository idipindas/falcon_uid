import React from "react";
import AboutUs from "./components/AboutUs";
import Forward from "./components/Forward";
import MoreAbout from "./components/MoreAbout";
import OurMission from "./components/OurMission";
import Counter from "./components/Counter";
import Service from "./components/Service";

const About = () => {
  return (
    <div>
      <AboutUs />
      <Forward />
      <MoreAbout />
      <OurMission />
      <Service />
      <Counter />
    </div>
  );
};

export default About;
