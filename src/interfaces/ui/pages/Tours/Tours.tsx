import React from "react";
import styles from "./tours.module.scss";

const Tours: React.FC = () => {
  return (
    <div className={styles.guidedTours}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Guided Tours in Patagonia</h1>
          <p>
            Experience the raw beauty of Patagonia with our expert-guided tours.
            From penguin sightings and whale watching to trekking glaciers and
            kayaking into unforgettable sunrises, let us take you on an
            adventure of a lifetime.
          </p>
        </div>
        <div className={styles.heroImage}></div>
      </div>

      {/* Highlights Section */}
      <div className={styles.highlights}>
        <h2>Explore the Best of Patagonia</h2>
        <div className={styles.highlightsGrid}>
          {/* Penguin Sightings */}
          <div className={styles.highlightCard}>
            <img
              src="/src/assets/images/pinguinos3.jpg"
              alt="Penguins in Punta Tombo"
            />
            <h3>Penguin Sightings in Punta Tombo</h3>
            <p>
              Visit Punta Tombo, home to one of the largest penguin colonies in
              South America. Walk among these incredible creatures in their
              natural habitat.
            </p>
          </div>
          ¡{" "}
          <div className={styles.highlightCard}>
            <img src="/src/assets/images/ballenas3.png" alt="Whale Watching" />
            <h3>Whale Watching & Marine Life</h3>
            <p>
              Witness majestic whales, playful dolphins, and sea lions in the
              pristine waters of Patagonia.
            </p>
          </div>
          {/* Perito Moreno Glacier */}
          <div className={styles.highlightCard}>
            <img
              src="/src/assets/images/glaciarperito.jpg"
              alt="Perito Moreno Glacier"
            />
            <h3>Perito Moreno Glacier Trekking</h3>
            <p>
              Lace up your boots and walk across the iconic Perito Moreno
              Glacier for a once-in-a-lifetime adventure.
            </p>
          </div>
          {/* Ushuaia */}
          <div className={styles.highlightCard}>
            <img src="/src/assets/images/findelmundo.png" alt="Ushuaia" />
            <h3>Discover Ushuaia</h3>
            <p>
              Journey to the southernmost city in the world and embrace the end
              of the earth in Ushuaia.
            </p>
          </div>
          {/* Kayaking Adventures */}
          <div className={styles.highlightCard}>
            <img src="/src/assets/images/kayac.jpg" alt="Kayaking at Sunrise" />
            <h3>Kayaking Sunrises & Sunsets</h3>
            <p>
              Paddle through serene lakes and rivers, soaking in breathtaking
              sunrises and sunsets that will stay with you forever.
            </p>
          </div>
          {/* Forests, Lakes, and Rivers */}
          <div className={styles.highlightCard}>
            <img
              src="/src/assets/images/villaangostura2.jpeg"
              alt="Forests, Lakes, and Rivers"
            />
            <h3>Heritage Forests, Lakes & Rivers</h3>
            <p>
              Explore Patagonia’s unique mountain ranges, ancient forests, and
              crystal-clear rivers, recognized as world heritage sites.
            </p>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className={styles.booking}>
        <h2>Plan Your Dream Tour</h2>
        <p>
          Ready to create unforgettable memories? Choose from a range of guided
          tours and let us take care of the details. Our experts ensure you
          experience Patagonia like never before.
        </p>
        <button className={styles.ctaButton}>Book Your Tour</button>
      </div>
    </div>
  );
};

export default Tours;
