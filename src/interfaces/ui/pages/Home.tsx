import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import WhyUs from "../components/WhyUs/WhyUs";
import Destinations from "../components/Destinations/Destinations";
import Footer from "../components/Footer/Footer";

interface HomeProps {
  isAuthenticated: boolean;
}

const Home: React.FC<HomeProps> = ({ isAuthenticated }) => {
  return (
    <div>
      <HeroSection />
      <WhyUs />
      <Destinations />
      <Footer />
    </div>
  );
};

export default Home;
