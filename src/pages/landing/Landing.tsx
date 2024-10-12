import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import SectionEight from "@/components/sectionEight/SectionEight";
import SectionFive from "@/components/sectionFive/SectionFive";
import SectionFour from "@/components/sectionFour/SectionFour";
import SectionNine from "@/components/sectionNine/SectionNine";
import SectionSeven from "@/components/sectionSeven/SectionSeven";
import SectionSix from "@/components/sectionSix/SectionSix";
import SectionThree from "@/components/sectionThree/SectionThree";
import SectionTwo from "@/components/sectionTwo/SectionTwo";
import Slider from "@/components/Slider/Slider";
import React from "react";

function Landing() {
  return (
    <div>
      <Slider />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
    </div>
  );
}

export default Landing;
