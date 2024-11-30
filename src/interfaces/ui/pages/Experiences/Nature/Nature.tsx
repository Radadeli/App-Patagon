import React from "react";
import styles from "./nature.module.scss";
const Nature: React.FC = () => {
  const experiences = [
    {
      title: "Peninsula Valdés: A UNESCO Heritage Site",
      image: "/src/assets/images/peninsula-valdes.jpg",
      description: `Explore the rich biodiversity of Peninsula Valdés, a sanctuary for Southern Right Whales, elephant seals, and sea lions. Witness orcas' unique hunting behaviors along the shoreline and enjoy birdwatching among over 180 species.`,
    },
    {
      title: "El Doradillo: Whale Watching Like Nowhere Else",
      image: "/src/assets/images/el-doradillo.jpg",
      description: `El Doradillo beach is a special place where whales come incredibly close to the shore. Between May and December, the sight of mothers with their calves is a magical experience.`,
    },
    {
      title: "Punta Tombo: Penguin Paradise",
      image: "/src/assets/images/punta-tombo.jpg",
      description: `Punta Tombo is home to the largest colony of Magellanic penguins in South America. Walk along marked trails and observe these charismatic birds in their natural habitat.`,
    },
    {
      title: "Glaciar Perito Moreno: A Living Ice Giant",
      image: "/src/assets/images/perito-moreno.jpg",
      description: `The Perito Moreno Glacier is one of the few advancing glaciers in the world. Watch the awe-inspiring sight of ice chunks breaking off into the turquoise waters of Lago Argentino.`,
    },
    {
      title: "Ushuaia: The End of the World",
      image: "/src/assets/images/ushuaia.jpg",
      description: `Known as the southernmost city in the world, Ushuaia offers access to Tierra del Fuego National Park, Beagle Channel boat tours, and an unforgettable sense of adventure at the edge of the Earth.`,
    },
    {
      title: "The Andes Mountain Range",
      image: "/src/assets/images/andes-mountains.jpg",
      description: `The Andes are a haven for nature lovers. Visit Puerto Patriada, El Bolsón, and Bariloche for serene lakes, towering peaks, and a vibrant cultural atmosphere.`,
    },
    {
      title: "Los Alerces National Park: Ancient Forests",
      image: "/src/assets/images/los-alerces.jpg",
      description: `Discover the ancient larch trees in Los Alerces National Park, a UNESCO World Heritage site. This park features pristine rivers, emerald lakes, and untouched forests.`,
    },
  ];

  return (
    <div className={styles.experiences}>
      <h1>Nature & Wildlife in Patagonia</h1>
      <p>
        Immerse yourself in Patagonia's unspoiled landscapes and encounter
        wildlife found nowhere else on Earth. From glaciers to forests, from
        whales to penguins, every moment in Patagonia is a testament to the
        beauty of the natural world.
      </p>

      <div className={styles.experienceGrid}>
        {experiences.map((experience, index) => (
          <div key={index} className={styles.experienceCard}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${experience.image})` }}
            ></div>
            <div className={styles.content}>
              <h2>{experience.title}</h2>
              <p>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nature;
