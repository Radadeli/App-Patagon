import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import styles from "./destinations.module.scss";
import glaciarperito from "/src/assets/images/glaciarperito.jpg";
import glaciarfondo from "/src/assets/images/glaciarfondo.jpg";
import avistaje from "/src/assets/images/avistaje.jpg";
import snorkel from "/src/assets/images/snorkel.jpg";
import montainrange from "/src/assets/images/montainrange.jpg";
import playacordillera from "/src/assets/images/playacordillera.png";
import pinguinos from "/src/assets/images/pinguinos.jpg";
import pinguinos2 from "/src/assets/images/pinguinos2.jpg";
import asado from "/src/assets/images/asado.png";
import asado2 from "/src/assets/images/asado2.png";
const destinations = [
    {
        title: "Glacier Trekking",
        tagline: "Adventure on Ice",
        images: [glaciarperito, glaciarfondo],
        description: "Located in Santa Cruz, Perito Moreno is one of the most famous glaciers in the world. Known for its size and frequent ice calving, it's a breathtaking experience for nature enthusiasts.",
    },
    {
        title: "Whale Watching",
        tagline: "A majestic Experience",
        images: [avistaje, snorkel],
        description: "This UNESCO World Heritage site offers one of the best whale-watching experiences. Get up close with Southern Right Whales, orcas, and other marine wildlife.",
    },
    {
        title: "Mountain Range",
        tagline: "Reach New Heights",
        images: [montainrange, playacordillera],
        description: "The majestic Andes mountain range offers stunning landscapes, trekking adventures, and a chance to explore Argentina’s beautiful highlands.",
    },
    {
        title: "Penguin Tours",
        tagline: "Meet The colonies",
        images: [pinguinos, pinguinos2],
        description: "Home to one of the largest Magellanic penguin colonies, Punta Tombo is a fantastic destination to observe these amazing creatures in their natural habitat.",
    },
    {
        title: "Cultural Immersion",
        tagline: "Discover Local Heritage",
        images: [asado, asado2],
        description: "Experience traditional Argentine culture through asado, the country’s signature barbecue style. It's more than food—it's a social and cultural experience.",
    },
];
const Destinations = () => {
    const [selectedDestination, setSelectedDestination] = useState(null);
    return (React.createElement("section", { className: styles.destinations },
        React.createElement("h2", { className: styles.destinationsTitle }, "Top Destinations"),
        React.createElement("div", { className: styles.destinationsGrid }, destinations.map((destination, index) => (React.createElement("div", { key: index, className: `${styles.destinationCard} ${selectedDestination === index ? styles.expanded : ""}`, onClick: () => setSelectedDestination(selectedDestination === index ? null : index) },
            React.createElement(Swiper, { spaceBetween: 10, slidesPerView: 1, pagination: { clickable: true }, modules: [Pagination], className: styles.swiper }, destination.images.map((img, imgIndex) => (React.createElement(SwiperSlide, { key: imgIndex },
                React.createElement("img", { src: img, alt: `${destination.title} image ${imgIndex + 1}`, className: styles.destinationImage }))))),
            selectedDestination === index && (React.createElement("div", { className: styles.expandedContent },
                React.createElement("h3", { className: styles.destinationTitle }, destination.title),
                React.createElement("h4", { className: styles.destinationTagline }, destination.tagline),
                React.createElement("p", { className: styles.destinationDescription }, destination.description))))))),
        React.createElement("div", { className: styles.exploreMore },
            React.createElement("p", null,
                "Explore these destinations in depth and discover unique experiences. Visit our ",
                React.createElement("a", { href: "/experiences" }, "Experiences"),
                " page to learn more!"))));
};
export default Destinations;
