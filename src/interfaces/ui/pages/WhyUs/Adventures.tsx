import React from "react";
import styles from "./adventures.module.scss";
import Adventure from "/src/assets/images/Adventure.png";

const Adventures: React.FC = () => {
  return (
    <section className={styles.container}>
      <h1>Exclusive Adventures Tailored for Explorers</h1>

      <p>
        Patagonia is not a place you visit — it's a place you conquer. With
        Discover Patagonia, you access curated, adrenaline-pumping experiences
        guided by professionals.
      </p>

      <p>
        Our adventures are not mass-market. We limit group sizes, partner with
        local experts, and go off the beaten path.
      </p>

      <h3>Adventure highlights include:</h3>
      <ul>
        <li>⛏️ Glacier ice trekking with certified guides</li>
        <li>🧗‍♂️ Rock climbing and rappelling in hidden valleys</li>
        <li>🐎 Horseback riding with gauchos</li>
        <li>🚁 Scenic helicopter tours over ice fields</li>
        <li>🌌 Overnight camping under the stars</li>
      </ul>

      <p>
        These aren't bucket list items — they’re memory-makers. Designed for
        thrill-seekers, nature lovers, and curious souls.
      </p>

      <img src={adventure} alt="Adventure" />
    </section>
  );
};

export default Adventures;
