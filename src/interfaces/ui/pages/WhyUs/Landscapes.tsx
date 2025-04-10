import React from "react";
import styles from "./Landscapes.module.scss";
import glaciar from "/src/assets/images/glaciar.png";

const Landscapes: React.FC = () => {
  return (
    <section className={styles.container}>
      <h1>Experience Patagonia’s Most Breathtaking Landscapes</h1>

      <p>
        Towering glaciers, infinite sky, emerald forests, and windswept plains —
        Patagonia is pure, raw, and unforgettable. We take you beyond tourist
        postcards into real wilderness experiences.
      </p>

      <p>
        Whether you dream of standing in front of the majestic Perito Moreno
        Glacier, hiking through Torres del Paine, or kayaking across
        crystal-clear lakes, our itineraries make it real.
      </p>

      <h3>Our landscape experiences include:</h3>
      <ul>
        <li>🧊 Glacier exploration and mini-trekking</li>
        <li>🏔️ Scenic hikes to panoramic viewpoints</li>
        <li>🛶 Lakeside kayaking in silence</li>
        <li>📷 Photography tours with golden-hour access</li>
        <li>🌄 Sunrise & sunset viewpoints with private access</li>
      </ul>

      <p>
        All experiences are guided by locals who understand the rhythm of the
        land, the seasons, and the stories Patagonia holds.
      </p>
      <img src={glaciar} alt="Patagonia Glacier" />
    </section>
  );
};

export default Landscapes;
