import React from "react";
import styles from "./acommodation.module.scss";

const Accommodation: React.FC = () => {
  return (
    <div className={styles.accommodationPage}>
      <header className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Your Ideal Stay Awaits</h1>
          <p>
            Discover carefully curated accommodations for every type of
            traveler. Whether you’re looking for rustic charm or modern luxury,
            we’ve got you covered.
          </p>
          <button className={styles.exploreButton}>
            Browse Accommodations
          </button>
        </div>
      </header>

      <section className={styles.features}>
        <h2>Why Choose Us?</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureItem}>
            <img
              src="/src/assets/images/habitacion.jpg"
              alt="Tailored Options"
            />
            <h3>Tailored for You</h3>
            <p>
              Enjoy accommodations that match your unique style, whether you’re
              seeking an adventurous getaway or a relaxing retreat.
            </p>
          </div>
          <div className={styles.featureItem}>
            <img src="/src/assets/images/rayentray.jpg" alt="Global Network" />
            <h3>Extensive Options</h3>
            <p>
              Access a wide range of accommodations, from boutique hotels to
              cozy chalets, all carefully selected for quality and comfort.
            </p>
          </div>
          <div className={styles.featureItem}>
            <img src="/src/assets/images/familia2.jpg" alt="Seamless Booking" />
            <h3>Seamless Booking</h3>
            <p>
              Book with ease and confidence. Our streamlined process ensures a
              hassle-free experience from start to finish.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.bookingSteps}>
        <h2>How It Works</h2>
        <ol className={styles.stepsList}>
          <li>
            <strong>Step 1:</strong> Share your preferences and travel details
            through our form or directly with our team.
          </li>
          <li>
            <strong>Step 2:</strong> Receive a selection of handpicked
            accommodations tailored to your needs.
          </li>
          <li>
            <strong>Step 3:</strong> Choose your favorite and book in just a few
            clicks. It’s that simple!
          </li>
        </ol>
      </section>

      <section className={styles.testimonials}>
        <h2>What Our Guests Say</h2>
        <div className={styles.testimonialCards}>
          <div className={styles.testimonialCard}>
            <p>
              "The process was so simple and efficient. I found a beautiful
              eco-lodge that perfectly matched what I was looking for!"
            </p>
            <h4>- Emily R.</h4>
          </div>
          <div className={styles.testimonialCard}>
            <p>
              "A seamless experience from start to finish. The accommodation
              options were fantastic, and the booking process was effortless."
            </p>
            <h4>- John D.</h4>
          </div>
          <div className={styles.testimonialCard}>
            <p>
              "Highly recommend! They found us a stunning villa with everything
              we wanted. It made our trip unforgettable."
            </p>
            <h4>- Sarah L.</h4>
          </div>
        </div>
      </section>

      <section className={styles.callToAction}>
        <h2>Start Your Journey Today</h2>
        <p>
          Browse our exclusive range of accommodations and find the perfect
          place to stay. Your dream trip is just a few clicks away.
        </p>
        <button className={styles.bookNowButton}>Explore Accommodations</button>
      </section>
    </div>
  );
};

export default Accommodation;
