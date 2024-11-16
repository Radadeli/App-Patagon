import React from "react";
import styles from "./WhyUs.module.scss";
import glaciar from "/src/assets/images/glaciar.png";
import crypto from "/src/assets/images/crypto.png";
import adventure from "/src/assets/images/adventure.png";
import encrypted from "/src/assets/images/encrypted.jpg";
import itinerary from "/src/assets/images/itinerary.png";

interface cardsProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const cardsData: cardsProps[] = [
  {
    title: "Amazing Landscapes",
    description: "Discover breathtaking landscapes and destinations.",
    image: glaciar,
    link: "/landscapes",
  },

  {
    title: "Crypto Payment",
    description: "Pay easily and securely with cryptocurrency.",
    image: crypto,
    link: "/cryptopayment",
  },
  {
    title: "Personalized Itineraries",
    description: "Use AI and create your best travel itinerary.",
    image: itinerary,
    link: "/itinerary",
  },
  {
    title: "Exclusive Adventures",
    description: "Embark on unique adventures curated just for you.",
    image: adventure,
    link: "/adventures",
  },
  {
    title: "Secure Transactions",
    description: "Enjoy safe, encrypted transactions for peace of mind.",
    image: encrypted,
    link: "/security",
  },
];

const WhyUs: React.FC = () => {
  return (
    <section className={styles.whyChooseUs}>
      <h2 className={styles.titleChouseUs}> Why Choose Us?</h2>
      <div className={styles.cardContainer}>
        {cardsData.map((card, index) => (
          <div className={styles.card} key={index}>
            <img
              src={card.image}
              alt={card.title}
              className={styles.cardImage}
            />

            <h3 className={styles.cardTitle}> {card.title}</h3>
            <p className={styles.cardDescription}>{card.description}</p>
            <a href={card.link} className={styles.cardLink}>
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
