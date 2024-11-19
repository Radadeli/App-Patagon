import React from "react";
import styles from "./transport.module.scss";

const Transport: React.FC = () => {
  return (
    <div className={styles.transportServices}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Effortless and Reliable Transport Services</h1>
          <p>
            Explore Patagonia without limits. From luxury private cars to group
            shuttles and eco-friendly options, we ensure your journey is smooth,
            safe, and memorable.
          </p>
        </div>
        <div className={styles.heroImage}></div>
      </section>

      <section className={styles.features}>
        <h2>Why Choose Our Transport Services?</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <img
              src="/src/assets/images/Madryn.png"
              alt="Private transport service"
            />
            <h3>Luxury & Privacy</h3>
            <p>
              Enjoy tailored transport solutions with private cars, premium
              SUVs, and exclusive charters for a personalized experience.
            </p>
          </div>
          <div className={styles.featureCard}>
            <img
              src="/path-to-image/group-transport.jpg"
              alt="Group transport service"
            />
            <h3>Group Convenience</h3>
            <p>
              Travel with your group seamlessly. We offer spacious shuttles and
              vans for families, friends, or corporate retreats.
            </p>
          </div>
          <div className={styles.featureCard}>
            <img
              src="/path-to-image/eco-friendly.jpg"
              alt="Eco-friendly transport"
            />
            <h3>Eco-Friendly Rides</h3>
            <p>
              Embrace sustainability with our eco-friendly transport options,
              including hybrid and electric vehicles.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.booking}>
        <h2>How to Book Your Ride?</h2>
        <ol className={styles.bookingSteps}>
          <li>
            <strong>Step 1:</strong> Choose your transport type (private, group,
            or eco-friendly).
          </li>
          <li>
            <strong>Step 2:</strong> Let us know your schedule, destinations,
            and preferences.
          </li>
          <li>
            <strong>Step 3:</strong> Get confirmation and relax. We handle the
            rest!
          </li>
        </ol>
      </section>

      <section className={styles.testimonials}>
        <h2>What Our Clients Say</h2>
        <div className={styles.testimonialCards}>
          <div className={styles.testimonialCard}>
            <p>
              "The private car service was exceptional! The driver was punctual,
              friendly, and the car was luxurious. Highly recommend!"
            </p>
            <span>- Sophia R.</span>
          </div>
          <div className={styles.testimonialCard}>
            <p>
              "We used their group transport for a family trip, and it made
              everything so easy. Spacious and comfortable!"
            </p>
            <span>- Daniel M.</span>
          </div>
          <div className={styles.testimonialCard}>
            <p>
              "I loved their eco-friendly option. It's great to know I could
              enjoy my trip while caring for the planet."
            </p>
            <span>- Emily T.</span>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Ready to Travel in Style?</h2>
        <p>
          Whether you need private luxury, group comfort, or eco-friendly rides,
          we’ve got you covered. Plan your journey today.
        </p>
        <button className={styles.ctaButton}>Book Now</button>
      </section>
    </div>
  );
};

export default Transport;
