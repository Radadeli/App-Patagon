import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./heroSection.scss";
import ballenas2 from "/src/assets/images/ballenas2.png";
import doradillo from "/src/assets/images/doradillo.png";
import doradillo2 from "/src/assets/images/doradillo2.png";
import fitzRoy from "/src/assets/images/fitzRoy.jpg";
import PeritoMoreno from "/src/assets/images/PeritoMoreno.jpg";
import Madryn from "/src/assets/images/Madryn.png";
import Madryn2 from "/src/assets/images/Madryn2.png";
import Madryn3 from "/src/assets/images/Madryn3.png";
import puertopatriada from "/src/assets/images/puertopatriada.jpg";
import PuntaTombo from "/src/assets/images/PuntaTombo.png";
import trakkingaltaMontaña from "/src/assets/images/trakkingaltamontaña.jpg";
import villalaangostura from "/src/assets/images/villalaangostura.jpg";

const images = [
  ballenas2,
  doradillo,
  doradillo2,
  fitzRoy,
  PeritoMoreno,
  Madryn,
  Madryn2,
  Madryn3,
  puertopatriada,
  PuntaTombo,
  trakkingaltaMontaña,
  villalaangostura,
];
const HeroSection: React.FC = () => {
  // const slides =
  //   images.length >= 3 ? images : [...images, ...images, ...images];
  return (
    <section className="heroSection">
      <Swiper
        modules={[Autoplay, EffectFade]}
        slidesPerView={1}
        spaceBetween={0}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        // pagination={{ clickable: false }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="heroSwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="heroSlide">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="slideImage"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="heroContent">
        <h2 className="heroTitle">Explore Patagonia</h2>
        <p className="heroSubtitle">
          Experience the beauty of Patagonia with flexible payment options.
          Embrace the future by paying with crypto to unlock exclusive savings
          and perks, or stick to traditional methods. Travel sustainably, save
          smartly, and discover unforgettable experiences tailored to you.
        </p>
        <button className="heroButton">Explore Experiences</button>
      </div>
    </section>
  );
};

export default HeroSection;
