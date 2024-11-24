// import React from "react";
// import styles from "./tours.module.scss";

// const Tours: React.FC = () => {
//   const [isExpanded, setIsExpanded] = React.useState<Record<string, boolean>>(
//     {}
//   );

//   const toggleReadMore = (key: string) => {
//     setIsExpanded((prevState) => ({
//       ...prevState,
//       [key]: !prevState[key],
//     }));
//   };

//   return (
//     <div className={styles.guidedTours}>
//       {/* Hero Section */}
//       <div className={styles.hero}>
//         <div className={styles.heroText}>
//           <h1>Guided Tours in Patagonia</h1>
//           <p>
//             Discover Patagonia's unspoiled wilderness with our expertly guided
//             tours. From walking among penguin colonies to trekking majestic
//             glaciers, and from whale watching to serene kayaking adventures,
//             embark on experiences you’ll never forget.
//           </p>
//         </div>
//         <div className={styles.heroImage}></div>
//       </div>

//       {/* Highlights Section */}
//       <div className={styles.highlights}>
//         <h2>Explore the Best of Patagonia</h2>
//         <div className={styles.highlightsGrid}>
//           {/* Penguin Sightings */}
//          <video
//               className={styles.videoCard}
//               src="/src/assets/videos/pinguinos.mp4"
//               autoPlay
//               loop
//               muted
//               playsInline
//               poster="/src/assets/images/pinguinos3.jpg"
//             ></video>
//             <h3>Penguin Sightings in Punta Tombo</h3>

//             <p>
//               Punta Tombo is home to the largest colony of **Magellanic
//               penguins** in South America, a natural spectacle that draws
//               visitors from around the globe. Here, you can walk among thousands
//               of these charming birds as they waddle, feed, and care for their
//               young in their natural habitat.
//             </p>
//             {isExpanded["penguin"] && (
//               <>
//                 <p>
//                   This **protected reserve** stretches over 210 hectares,
//                   offering visitors a close-up look at penguin life, with
//                   specially marked paths allowing safe observation without
//                   disturbing the animals. Along the way, you may also spot
//                   guanacos, ñandús, and a variety of coastal birds that inhabit
//                   this incredible ecosystem.
//                 </p>
//                 <p>
//                   <strong>Best Time to Visit</strong>: The penguins arrive in
//                   Punta Tombo from **September to April**, with the peak season
//                   being **October to February**, when chicks are hatching and
//                   being cared for by their parents.
//                 </p>
//                 <p>
//                   **Nearby Attractions**: Combine your visit with a trip to
//                   **Gaiman**, a charming Welsh town, where you can enjoy
//                   traditional tea houses, or explore **Trelew**, home to the
//                   world-class Paleontological Museum.
//                 </p>
//                 <p>
//                   **Why It’s Unique**: Witnessing the natural behavior of such a
//                   massive penguin colony is an unforgettable experience. Walking
//                   alongside these creatures, observing their rituals and
//                   interactions, makes Punta Tombo one of the most special
//                   wildlife encounters in the world.
//                 </p>
//               </>
//             )}
//             <button
//               className={styles.readMoreButton}
//               onClick={() => toggleReadMore("penguin")}
//             >
//               {isExpanded["penguin"] ? "Read Less" : "Read More"}
//             </button>
//           </div>

//           {/* Whale Watching */}
//           <div className={styles.highlightCard}>
//             <video
//               className={styles.videoCard}
//               src="/src/assets/videos/whales.mp4"
//               autoPlay
//               loop
//               muted
//               playsInline
//               poster="/src/assets/images/ballenas3.png"
//             ></video>
//             <h3>Whale Watching & Marine Life</h3>
//             <p>
//               Few experiences compare to whale watching in Patagonia. The
//               **Peninsula Valdés**, a UNESCO World Heritage Site, is one of the
//               best places in the world to see **Southern Right Whales** as they
//               come to the sheltered waters to breed and raise their calves. From
//               June to December, these majestic creatures can often be seen
//               breaching and swimming with their young.
//             </p>
//             {isExpanded["whales"] && (
//               <>
//                 <p>
//                   For an even more intimate experience, visit **El Doradillo
//                   Beach**, where whales can often be spotted just **5 meters
//                   from the shore**. It’s one of the few places on Earth where
//                   you can watch these giants of the ocean without needing to
//                   board a boat.
//                 </p>
//                 <p>
//                   The marine life in this region doesn’t end with whales. You’ll
//                   also encounter **sea lions, elephant seals, and orcas**, as
//                   well as playful pods of dolphins. Many tours offer boat
//                   excursions, but land-based viewing points are equally
//                   spectacular, offering panoramic views of the marine activity.
//                 </p>
//                 <p>
//                   Beyond marine life, Peninsula Valdés is also home to
//                   breathtaking landscapes of arid steppes, salt flats, and
//                   dramatic coastal cliffs. Pair your trip with a visit to
//                   **Puerto Madryn**, a charming coastal town that serves as the
//                   gateway to these wonders.
//                 </p>
//                 <p>
//                   <strong>Best Time to Visit:</strong> June to December for
//                   whale watching; September and October are the peak months.
//                 </p>
//                 <p>
//                   <strong>Why It’s Unique:</strong> The ability to see whales
//                   from both land and sea, combined with the area’s abundant
//                   marine life and spectacular landscapes, makes it a
//                   world-renowned wildlife destination.
//                 </p>
//               </>
//             )}
//             <button
//               className={styles.readMoreButton}
//               onClick={() => toggleReadMore("whales")}
//             >
//               {isExpanded["whales"] ? "Read Less" : "Read More"}
//             </button>
//           </div>

//           {/* Perito Moreno Glacier */}
//           <div className={styles.highlightCard}>
//             <video
//               className={styles.videoCard}
//               src="/src/assets/videos/perito_moreno.mp4"
//               autoPlay
//               loop
//               muted
//               playsInline
//               poster="/src/assets/images/glaciarperito.jpg"
//             ></video>
//             <h3>Perito Moreno Glacier Trekking</h3>
//             <p>
//               The **Perito Moreno Glacier** is one of the most iconic natural
//               wonders of Patagonia. Located in **Los Glaciares National Park**,
//               this massive glacier stretches 30 kilometers long and is one of
//               the few in the world that is still advancing. Visitors can
//               experience the glacier in several ways, from walking along the
//               panoramic boardwalks to trekking directly on the ice.
//             </p>
//             {isExpanded["glacier"] && (
//               <>
//                 <p>
//                   Guided ice-trekking tours allow you to step onto the glacier
//                   itself, navigating its frozen ridges and crevasses while
//                   soaking in its awe-inspiring beauty. The glacier regularly
//                   calves, with thunderous chunks of ice crashing into Lake
//                   Argentino, offering a dramatic display of nature’s power.
//                 </p>
//                 <p>
//                   A visit to Perito Moreno is often paired with a trip to **El
//                   Chaltén**, Argentina’s trekking capital. Nestled within the
//                   same national park, El Chaltén offers stunning hikes,
//                   including trails to **Mount Fitz Roy**, **Laguna de los Tres**,
//                   and **Laguna Torre**. This picturesque town is a haven for
//                   outdoor enthusiasts, with activities ranging from hiking and
//                   climbing to birdwatching and photography.
//                 </p>
//                 <p>
//                   <strong>Best Time to Visit:</strong> October to April for the
//                   best weather and access to trekking routes. Summer months
//                   offer extended daylight hours for exploration.
//                 </p>
//                 <p>
//                   <strong>Why It’s Unique:</strong> Perito Moreno’s
//                   accessibility, combined with the thrilling experience of ice
//                   trekking and the proximity to El Chaltén’s legendary hiking
//                   trails, makes it a must-visit for adventurers and nature
//                   lovers alike.
//                 </p>
//               </>
//             )}
//             <button
//               className={styles.readMoreButton}
//               onClick={() => toggleReadMore("glacier")}
//             >
//               {isExpanded["glacier"] ? "Read Less" : "Read More"}
//             </button>
//           </div>

//           {/* Ushuaia */}
//           {/* Discover Ushuaia */}
//           <div className={styles.highlightCard}>
//             <img
//               src="/src/assets/images/findelmundo.png"
//               alt="Ushuaia - The End of the World"
//             />
//             <h3>Discover Ushuaia: The End of the World</h3>
//             <p>
//               Nestled between the snow-capped Andes and the Beagle Channel,
//               **Ushuaia** is famously known as *“The End of the World”*, making
//               it one of the most iconic destinations in Patagonia. This remote
//               city, the southernmost in the world, offers an unparalleled
//               combination of natural beauty, adventure, and rich history.
//             </p>
//             <p>
//               Explore the awe-inspiring **Tierra del Fuego National Park**,
//               where dramatic landscapes of forests, rivers, mountains, and
//               glaciers meet the southernmost edge of South America. Choose from
//               scenic hiking trails, take a catamaran tour along the Beagle
//               Channel, or simply marvel at the unique flora and fauna found
//               nowhere else on Earth.
//             </p>
//             <p>
//               For a journey into history, ride the famous **Train to the End of
//               the World**, a historic railway that once transported prisoners
//               and now offers breathtaking views of Tierra del Fuego's
//               landscapes. Visit **Museo del Fin del Mundo** to learn about the
//               region’s rich history, including stories of its native Yaghan
//               people and early explorers who braved the harsh conditions of this
//               remote land.
//             </p>
//             <p>
//               Ushuaia is also the gateway to **Antarctica**, making it a prime
//               departure point for those venturing to the icy continent. Embark
//               on a once-in-a-lifetime cruise to witness stunning icebergs,
//               penguins, and untouched wilderness.
//             </p>
//             <p>
//               Year-round, Ushuaia offers something for every traveler. In
//               winter, it transforms into a wonderland for snow sports
//               enthusiasts with its premier ski resort, **Cerro Castor**, where
//               you can ski or snowboard surrounded by pristine Patagonian beauty.
//               In summer, long daylight hours make it perfect for hiking,
//               kayaking, and wildlife watching, including sea lions, seals, and a
//               variety of seabirds.
//             </p>
//             <p>
//               <strong>Best Time to Visit:</strong>
//             </p>
//             <ul>
//               <li>
//                 <strong>Summer (December to March):</strong> Ideal for outdoor
//                 activities such as hiking in Tierra del Fuego, Beagle Channel
//                 tours, and wildlife watching.
//               </li>
//               <li>
//                 <strong>Winter (June to September):</strong> Perfect for skiing
//                 and snowboarding at Cerro Castor, as well as enjoying the
//                 magical snowy landscapes of Patagonia.
//               </li>
//             </ul>
//             <p>
//               <strong>Why It’s Unique:</strong> Ushuaia’s location at the
//               southernmost tip of the Americas, its proximity to Antarctica, and
//               its blend of natural beauty, adventure, and rich cultural history
//               make it a destination like no other in the world.
//             </p>
//           </div>

//           {/* Kayaking Adventures */}
//           <div className={styles.highlightCard}>
//             <img
//               src="/src/assets/images/kayac.jpg"
//               alt="Kayaking at Sunrise in Puerto Madryn"
//             />
//             <h3>Kayaking Sunrises & Sunsets in Puerto Madryn</h3>
//             <p>
//               Glide across the tranquil coastal waters of Puerto Madryn, one of
//               Patagonia’s most breathtaking marine locations. Paddle as the
//               first light of sunrise or the warm hues of sunset paint the sky,
//               creating a magical backdrop over the Atlantic Ocean.
//             </p>
//             <p>
//               <strong>Best Time to Visit:</strong> October to March, when
//               weather conditions are ideal and marine life is abundant.
//             </p>
//             <p>
//               <strong>Why It’s Unique:</strong> Puerto Madryn’s waters are calm
//               and clear, making it an exceptional place to spot marine life such
//               as sea lions, dolphins, and even whales during their migration
//               season (June to December). Few places in the world allow you to
//               kayak so close to these incredible creatures, surrounded by
//               stunning coastal landscapes.
//             </p>
//           </div>
//           {/* Forests, Lakes, and Rivers */}
//           {/* Heritage Forests, Lakes, and Rivers */}
//           <div className={styles.highlightCard}>
//             <img
//               src="/src/assets/images/villaangostura2.jpeg"
//               alt="Heritage Forests, Lakes, and Rivers"
//             />
//             <h3>Heritage Forests, Lakes & Rivers of Patagonia</h3>
//             <p>
//               Discover the pristine beauty of Patagonia’s natural treasures,
//               including the majestic Parque Nacional Los Alerces. Recognized as
//               a UNESCO World Heritage Site, this park is home to ancient alerce
//               trees, some of which are over 2,600 years old, and boasts
//               shimmering glacial lakes like Lago Futalaufquen and Lago Menéndez.
//               The park offers an unparalleled connection to nature, with
//               breathtaking hiking trails, boat tours, and wildlife observation
//               opportunities.
//             </p>
//             <p>
//               In the summer, Immerse yourself in Patagonia’s unique ecosystems.
//               Explore ancient forests, crystal-clear rivers, and turquoise lakes
//               in places like Bariloche and Villa La Angostura. These lakes are
//               perfect for kayaking, swimming, or simply enjoying a peaceful
//               retreat amidst nature.
//             </p>
//             <p>
//               For winter adventurers, the region transforms into a snow-covered
//               wonderland. Visit **Bariloche**, Argentina’s premier winter
//               destination, renowned for its world-class skiing and snowboarding
//               opportunities at **Cerro Catedral**. After a day on the slopes,
//               enjoy the charming alpine-style town with its rich chocolate shops
//               and cozy mountain lodges.
//             </p>
//             <p>
//               <strong>Best Time to Visit:</strong>
//             </p>
//             <ul>
//               <li>
//                 <strong>Summer (December to March):</strong> Ideal for hiking,
//                 lake activities, and exploring UNESCO heritage sites like Los
//                 Alerces.
//               </li>
//               <li>
//                 <strong>Winter (June to September):</strong> Perfect for skiing
//                 and snowboarding in Bariloche or enjoying Patagonia’s serene
//                 snow-covered landscapes.
//               </li>
//             </ul>
//             <p>
//               <strong>Why It’s Unique:</strong> From ancient forests and UNESCO
//               heritage sites to thrilling ski resorts, Patagonia offers a
//               diverse range of experiences that are unmatched anywhere else in
//               the world.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Weather Section */}
//       <div className={styles.weather}>
//         <h2>Patagonian Weather: What to Expect</h2>
//         <p>
//           Patagonia’s weather is famously unpredictable. Summers (December to
//           February) are mild, with temperatures ranging from 10°C to 20°C (50°F
//           to 68°F), making it the best time for outdoor activities. Winters
//           (June to August) bring snow and colder temperatures, ideal for snow
//           sports in places like Ushuaia.
//         </p>
//         <p>
//           <strong>Pro Tip:</strong> Always pack layers, as you may experience
//           four seasons in a single day!
//         </p>
//       </div>

//       {/* Booking Section */}
//       <div className={styles.booking}>
//         <h2>Plan Your Dream Tour</h2>
//         <p>
//           Ready to create unforgettable memories? Choose from a range of guided
//           tours and let us take care of the details. Our knowledgeable guides
//           ensure you experience Patagonia like never before, with safety and
//           comfort in mind.
//         </p>
//         <button className={styles.ctaButton}>Book Your Tour</button>
//       </div>

// export default Tours;

import React from "react";
import styles from "./tours.module.scss";

const Tours: React.FC = () => {
  const [isExpanded, setIsExpanded] = React.useState<Record<string, boolean>>(
    {}
  );
  const [videoState, setVideoState] = React.useState<Record<string, boolean>>(
    {}
  );

  const toggleReadMore = (key: string) => {
    setIsExpanded((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const handleVideoClick = (
    event: React.MouseEvent<HTMLVideoElement>,
    videoId: string
  ) => {
    const video = event.currentTarget; // Get the clicked video element

    if (video.paused) {
      video.play();
      setVideoState((prev) => ({ ...prev, [videoId]: true })); // Mark video as playing
    } else {
      video.pause();
      setVideoState((prev) => ({ ...prev, [videoId]: false })); // Mark video as paused
    }
  };

  return (
    <div className={styles.guidedTours}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Guided Tours in Patagonia</h1>
          <p>
            Discover Patagonia's unspoiled wilderness with our expertly guided
            tours. From walking among penguin colonies to trekking majestic
            glaciers, and from whale watching to serene kayaking adventures,
            embark on experiences you’ll never forget.
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
            <h3>Penguin Sightings in Punta Tombo</h3>
            <div className={styles.videoWrapper}>
              {!videoState["pinguinos"] && (
                <div className={styles.playSignal}>▶</div> // Show play icon if the video is paused
              )}
              <video
                className={styles.videoCard}
                src="/src/assets/videos/pinguinos.mp4"
                loop
                muted
                playsInline
                onClick={(e) => handleVideoClick(e, "pinguinos")}
                poster="/src/assets/images/pinguinos3.jpg"
              ></video>
              <p>
                Punta Tombo is home to the largest colony of **Magellanic
                penguins** in South America, a natural spectacle that draws
                visitors from around the globe.
              </p>
              {isExpanded["penguin"] && (
                <p>
                  This protected reserve stretches over 210 hectares, offering
                  visitors a close-up look at penguin life, with specially
                  marked paths allowing safe observation without disturbing the
                  animals.
                </p>
              )}
              <button
                className={styles.readMoreButton}
                onClick={() => toggleReadMore("penguin")}
              >
                {isExpanded["penguin"] ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>

          {/* Whale Watching */}
          <div className={styles.highlightCard}>
            <h3>Whale Watching & Marine Life</h3>
            <div className={styles.videoWrapper}>
              {!videoState["ballenas"] && (
                <div className={styles.playSignal}>▶</div> // Show play icon if the video is paused
              )}
              <video
                className={styles.videoCard}
                src="/src/assets/videos/ballenas.mp4"
                loop
                muted
                playsInline
                onClick={(e) => handleVideoClick(e, "ballenas")}
                poster="/src/assets/images/ballenas3.png"
              ></video>
              <p>
                Few experiences compare to whale watching in Patagonia. The
                **Peninsula Valdés**, a UNESCO World Heritage Site, is one of
                the best places in the world to see **Southern Right Whales**.
              </p>
              {isExpanded["whales"] && (
                <p>
                  Visit El Doradillo Beach, where whales can often be spotted
                  just 5 meters from the shore, for an intimate and eco-friendly
                  experience.
                </p>
              )}
              <button
                className={styles.readMoreButton}
                onClick={() => toggleReadMore("whales")}
              >
                {isExpanded["whales"] ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>

          {/* Mountain Range Adventures */}
          <div className={styles.highlightCard}>
            <h3>Adventures in the Andes Mountain Range</h3>
            <div className={styles.videoWrapper}>
              {!videoState["cordillera"] && (
                <div className={styles.playSignal}>▶</div> // Show play icon if the video is paused
              )}
              <video
                className={styles.videoCard}
                src="/src/assets/videos/cordillera.mp4"
                loop
                muted
                playsInline
                onClick={(e) => handleVideoClick(e, "cordillera")}
                poster="/src/assets/images/villalaangostura.jpg"
              ></video>
              <p>
                The Andes Mountains offer some of the most dramatic landscapes
                in Patagonia. Explore Fitz Roy and Torres del Paine for iconic
                trekking routes.
              </p>
              {isExpanded["mountains"] && (
                <p>
                  These stunning peaks provide incredible hiking opportunities,
                  stunning viewpoints, and world-renowned photography locations.
                </p>
              )}
              <button
                className={styles.readMoreButton}
                onClick={() => toggleReadMore("mountains")}
              >
                {isExpanded["mountains"] ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>

          {/* Ushuaia and Tierra del Fuego */}
          <div className={styles.highlightCard}>
            <h3>Ushuaia: The End of the World</h3>
            <div className={styles.videoWrapper}>
              {!videoState["ushuaia"] && (
                <div className={styles.playSignal}>▶</div> // Show play icon if the video is paused
              )}
              <video
                className={styles.videoCard}
                src="/src/assets/videos/ushuaia.mp4"
                loop
                muted
                playsInline
                onClick={(e) => handleVideoClick(e, "ushuaia")}
                poster="/src/assets/images/findelmundo.png"
              ></video>
              <p>
                Known as the southernmost city in the world, Ushuaia offers
                access to the stunning Tierra del Fuego National Park.
              </p>
              {isExpanded["ushuaia"] && (
                <p>
                  Experience the Beagle Channel, walk through rugged landscapes,
                  and take boat tours to explore nearby islands teeming with
                  wildlife.
                </p>
              )}
              <button
                className={styles.readMoreButton}
                onClick={() => toggleReadMore("ushuaia")}
              >
                {isExpanded["ushuaia"] ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>

          {/* Glacier Trekking */}
          <div className={styles.highlightCard}>
            <h3>Perito Moreno Glacier Trekking</h3>
            <div className={styles.videoWrapper}>
              {!videoState["glaciar"] && (
                <div className={styles.playSignal}>▶</div> // Show play icon if the video is paused
              )}
              <video
                className={styles.videoCard}
                src="/src/assets/videos/glaciar.mp4"
                loop
                muted
                playsInline
                onClick={(e) => handleVideoClick(e, "glaciar")}
                poster="/src/assets/images/glaciarperito.jpg"
              ></video>
              <p>
                The Perito Moreno Glacier in Los Glaciares National Park is one
                of the most iconic destinations in Patagonia.
              </p>
              {isExpanded["glacier"] && (
                <p>
                  Guided ice-trekking tours let you step onto the glacier
                  itself, navigating its frozen ridges and crevasses.
                </p>
              )}
              <button
                className={styles.readMoreButton}
                onClick={() => toggleReadMore("glacier")}
              >
                {isExpanded["glacier"] ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>

          {/* Kayaking Adventures */}
          <div className={styles.highlightCard}>
            <h3>Kayaking in Patagonia's </h3>
            <div className={styles.videoWrapper}>
              {!videoState["kayak"] && (
                <div className={styles.playSignal}>▶</div> // Show play icon if the video is paused
              )}
              <video
                className={styles.videoCard}
                src="/src/assets/videos/kayak.mp4"
                loop
                muted
                playsInline
                onClick={(e) => handleVideoClick(e, "kayak")}
                poster="/src/assets/images/kayac.jpg"
              ></video>
              <p>
                Paddle through pristine waters surrounded by majestic
                landscapes. Popular spots include Lago Gutierrez and fjords in
                Chilean Patagonia.
              </p>
              {isExpanded["kayaking"] && (
                <p>
                  Whether you're exploring turquoise lakes or sea kayaking along
                  rugged coastlines, the experience is unforgettable.
                </p>
              )}
              <button
                className={styles.readMoreButton}
                onClick={() => toggleReadMore("kayaking")}
              >
                {isExpanded["kayaking"] ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;
