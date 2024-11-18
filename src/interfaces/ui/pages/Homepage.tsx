import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import WhyUs from "../components/WhyUs/WhyUs";
import Destinations from "../components/Destinations/Destinations";
import Footer from "../components/Footer/Footer";

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <WhyUs />
      <Destinations />
      <Footer />
    </div>
  );
};

export default HomePage;
