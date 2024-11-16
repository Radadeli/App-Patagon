import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import WhyUs from "../components/WhyUs/WhyUs";
import Destinations from "../components/Destinations/Destinations";

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <WhyUs />
      <Destinations />
    </div>
  );
};

export default HomePage;
