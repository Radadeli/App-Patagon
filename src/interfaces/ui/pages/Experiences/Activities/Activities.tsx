import React from "react";
import styles from "./activities.module.scss";
const Activities: React.FC = () => {
  return (
    <div className={styles.adventures}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <h1>Adventure Awaits in Patagonia</h1>
        <p>
          Discover the ultimate destination for thrill-seekers. From whale
          watching to glacier trekking, Patagonia offers an unparalleled variety
          of activities across its iconic landscapes.
        </p>
      </div>

      {/* Activities Section */}
      <div className={styles.activities}>
        <h2>Unforgettable Activities</h2>
        <div className={styles.activityGrid}>
          {/* Whale Watching */}
          <div className={styles.activityCard}>
            <img
              src="/src/assets/images/whale_watching.jpg"
              alt="Whale Watching"
            />
            <h3>Whale Watching</h3>
            <p>
              Visit **Puerto Pirámides** and **El Doradillo** to experience
              incredible close encounters with southern right whales in their
              natural habitat.
            </p>
          </div>

          {/* Glacier Trekking */}
          <div className={styles.activityCard}>
            <img
              src="/src/assets/images/glacier_trekking.jpg"
              alt="Glacier Trekking"
            />
            <h3>Glacier Trekking</h3>
            <p>
              Explore the majestic **Perito Moreno Glacier** in **El Calafate**.
              Walk across its icy expanse, marveling at its stunning blue hues
              and massive ice walls.
            </p>
          </div>

          {/* End of the World Adventures */}
          <div className={styles.activityCard}>
            <img
              src="/src/assets/images/ushuaia.jpg"
              alt="Ushuaia Adventures"
            />
            <h3>End of the World Adventures</h3>
            <p>
              In **Ushuaia**, the southernmost city in the world, enjoy hiking,
              kayaking, and scenic boat rides through the **Beagle Channel** and
              nearby national parks.
            </p>
          </div>

          {/* Hiking in Los Alerces */}
          <div className={styles.activityCard}>
            <img
              src="/src/assets/images/los_alerces.jpg"
              alt="Hiking in Los Alerces"
            />
            <h3>Hiking in Los Alerces</h3>
            <p>
              Discover the unspoiled wilderness of **Los Alerces National
              Park**. Hike through ancient forests, crystal-clear lakes, and
              dramatic mountain landscapes.
            </p>
          </div>

          {/* Mountain Biking */}
          <div className={styles.activityCard}>
            <img
              src="/src/assets/images/mountain_biking.jpg"
              alt="Mountain Biking"
            />
            <h3>Mountain Biking</h3>
            <p>
              Ride through stunning trails in **El Bolsón**, **Bariloche**, and
              **Villa La Angostura**, surrounded by the towering peaks of the
              Andes.
            </p>
          </div>

          {/* Kayaking in Puerto Patriada */}
          <div className={styles.activityCard}>
            <img src="/src/assets/images/kayaking.jpg" alt="Kayaking" />
            <h3>Kayaking in Puerto Patriada</h3>
            <p>
              Paddle across the serene waters of **Puerto Patriada**. Surrounded
              by lush forests and towering mountains, it’s a kayaker's paradise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
