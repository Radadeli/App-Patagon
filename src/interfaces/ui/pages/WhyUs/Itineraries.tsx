import React from "react";
import styles from "./Itineraries.module.scss";
import itinerary from "/src/assets/images/itinerary.png";

const Itineraries: React.FC = () => {
  return (
    <section className={styles.container}>
      <h1>Create a Travel Plan That's Truly Yours</h1>

      <p>
        No two travelers are the same — and your trip shouldn't be either. Our
        smart itinerary builder, powered by AI and human expertise, helps you
        create a route tailored to your passions, time frame, and budget.
      </p>

      <p>
        Whether you want to climb peaks, explore culture, or relax in nature, we
        build your schedule — day-by-day, hour-by-hour — with zero stress.
      </p>

      <h3>Our itinerary tool lets you:</h3>
      <ul>
        <li>
          🧠 Choose your travel style: Adventure / Culture / Nature / Relax
        </li>
        <li>🗓️ Adjust your days, times, and activity levels</li>
        <li>💬 Chat with our team for suggestions and tweaks</li>
        <li>📍 Integrate maps, transport, and bookings</li>
        <li>💾 Save and export your final plan to PDF or mobile</li>
      </ul>

      <p>
        It's like having a personal Patagonia expert in your pocket. Travel
        smart. Travel prepared. Travel like it was designed for you.
      </p>
      <img src={itinerary} alt="Custom Itinerary" />
    </section>
  );
};

export default Itineraries;
