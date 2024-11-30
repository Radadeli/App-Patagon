import React from "react";
import styles from "./season.module.scss";
const Season: React.FC = () => {
  return (
    <div className={styles.seasonalExperiences}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <h1>Special Seasonal Experiences</h1>
        <p>
          Explore Patagonia’s breathtaking landscapes and wildlife throughout
          the year. Each season offers unique adventures for every traveler.
        </p>
      </div>

      {/* Seasons Overview */}
      <div className={styles.seasons}>
        <h2>Seasons in Patagonia</h2>

        <div className={styles.seasonCard}>
          <h3>Spring (September - November)</h3>
          <p>
            Spring is the perfect time to witness the awakening of Patagonia’s
            flora and fauna. Whales are still visible off the coast of **Puerto
            Pirámides**, and penguins return to their colonies in **Punta
            Tombo**. The Andes mountains begin to thaw, opening up trails for
            hiking and exploration.
          </p>
        </div>

        <div className={styles.seasonCard}>
          <h3>Summer (December - February)</h3>
          <p>
            Summer is peak travel season, with warm temperatures and long
            daylight hours. It's ideal for exploring **Los Glaciares National
            Park** and hiking in **Bariloche**, **El Bolsón**, and **Villa La
            Angostura**. Whale season ends, but penguins remain a highlight, and
            the beaches of **Puerto Madryn** and **El Doradillo** shine.
          </p>
        </div>

        <div className={styles.seasonCard}>
          <h3>Autumn (March - May)</h3>
          <p>
            The landscape transforms with stunning autumnal hues. **El
            Calafate** and **Perito Moreno Glacier** are less crowded, offering
            tranquil experiences. Fishing season is in full swing, especially in
            **Puerto Patriada** and **Los Alerces National Park**.
          </p>
        </div>

        <div className={styles.seasonCard}>
          <h3>Winter (June - August)</h3>
          <p>
            Patagonia becomes a winter wonderland. Skiing and snowboarding are
            top activities in **Bariloche**, **Cerro Catedral**, and **Villa La
            Angostura**. Ice trekking on glaciers like **Perito Moreno** is a
            magical experience. Wildlife retreats, but the dramatic landscapes
            remain captivating.
          </p>
        </div>
      </div>

      {/* Wildlife Watching */}
      <div className={styles.wildlife}>
        <h2>Best Seasons for Wildlife Watching</h2>
        <div className={styles.wildlifeGrid}>
          <div className={styles.wildlifeCard}>
            <h3>Whales</h3>
            <p>
              The best time to see southern right whales is between **June and
              December**, particularly from **Puerto Pirámides** and **El
              Doradillo**.
            </p>
          </div>
          <div className={styles.wildlifeCard}>
            <h3>Penguins</h3>
            <p>
              Visit **Punta Tombo** and **Cabo Dos Bahías** from **September to
              March** to see large penguin colonies.
            </p>
          </div>
          <div className={styles.wildlifeCard}>
            <h3>Bird Watching</h3>
            <p>
              Spring and summer are ideal for spotting Andean condors,
              flamingos, and other bird species across the Andes and coastal
              regions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Season;
