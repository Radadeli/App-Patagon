import React from "react";
import styles from "./culinary.module.scss";

const Culinary: React.FC = () => {
  return (
    <div className={styles.culturalCulinary}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Cultural & Culinary Delights of Patagonia</h1>
          <p>
            Explore Patagonia’s vibrant culture and unique gastronomy. From its
            world-class meats and fresh seafood to traditional sweets like
            **alfajores**, Patagonia offers an unforgettable culinary journey.
          </p>
        </div>
        <div className={styles.heroImage}></div>
      </div>

      {/* Highlights Section */}
      <div className={styles.highlights}>
        <h2>Patagonia's Culinary Gems</h2>

        <div className={styles.highlightsGrid}>
          {/* Meats */}
          <div className={styles.highlightCard}>
            <img
              className={styles.imageCard}
              src="/src/assets/images/asado.jpg"
              alt="Patagonian Lamb Asado"
            />
            <h3>Patagonian Lamb Asado</h3>
            <p>
              Patagonia is famous for its **lamb asado**, slow-cooked over an
              open flame. The meat is tender, juicy, and infused with natural
              flavors from the region's pristine pastures.
            </p>
          </div>

          {/* Fresh Seafood */}
          <div className={styles.highlightCard}>
            <img
              className={styles.imageCard}
              src="/src/assets/images/seafood.jpg"
              alt="Patagonian Seafood"
            />
            <h3>Fresh Seafood</h3>
            <p>
              Patagonia’s coasts offer some of the best seafood in the world,
              including **king crab (centolla)**, **salmon**, and **hake**.
              Enjoy freshly caught delicacies prepared with traditional
              techniques.
            </p>
          </div>

          {/* Alfajores */}
          <div className={styles.highlightCard}>
            <img
              className={styles.imageCard}
              src="/src/assets/images/alfajores.jpg"
              alt="Alfajores"
            />
            <h3>Alfajores</h3>
            <p>
              A classic Argentine sweet, **alfajores** are made with layers of
              buttery cookies filled with creamy dulce de leche and coated in
              chocolate or powdered sugar. In Patagonia, they are made with
              local ingredients for a unique twist.
            </p>
          </div>

          {/* Chocolates */}
          <div className={styles.highlightCard}>
            <img
              className={styles.imageCard}
              src="/src/assets/images/chocolate.jpg"
              alt="Patagonian Chocolate"
            />
            <h3>Artisan Chocolate</h3>
            <p>
              The Andean towns of Bariloche and Villa La Angostura are renowned
              for their handcrafted chocolates, often blended with local berries
              like **calafate** and raspberries.
            </p>
          </div>

          {/* Craft Beer */}
          <div className={styles.highlightCard}>
            <img
              className={styles.imageCard}
              src="/src/assets/images/craft_beer.jpg"
              alt="Craft Beer"
            />
            <h3>Patagonian Craft Beer</h3>
            <p>
              The pure glacial waters of Patagonia create perfect conditions for
              brewing exceptional craft beers. Bariloche, El Bolsón, and Esquel
              are home to breweries producing unique flavors.
            </p>
          </div>

          {/* Traditional Cuisine */}
          <div className={styles.highlightCard}>
            <img
              className={styles.imageCard}
              src="/src/assets/images/curanto.jpg"
              alt="Curanto"
            />
            <h3>Curanto</h3>
            <p>
              A traditional dish with indigenous roots, **curanto** is a mix of
              meats, vegetables, and seafood slow-cooked in a pit covered with
              hot stones and leaves. It’s a communal feast you must experience.
            </p>
          </div>
        </div>
      </div>

      {/* Cultural Highlights */}
      <div className={styles.culturalSection}>
        <h2>Celebrate Patagonian Culture</h2>
        <p>
          Beyond the food, immerse yourself in Patagonia’s rich cultural
          heritage. From the indigenous Mapuche traditions to the European
          influences brought by immigrants, Patagonia is a melting pot of
          history and culture. Don’t miss traditional festivals, music, and
          handcrafts.
        </p>
      </div>
    </div>
  );
};

export default Culinary;
