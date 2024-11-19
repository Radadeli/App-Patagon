import React from "react";
import styles from "./customizedPackages.module.scss";

const CustomizedPackages: React.FC = () => {
  return (
    <div className={styles.customizedPackages}>
      <h1>Customized Travel Packages</h1>
      <p>
        Imagine a trip perfectly tailored to your dreams. At Discover Patagonia,
        we make this a reality with the help of
        <span className="highlight">NalaTravel</span>, our revolutionary
        AI-powered assistant. Just tell us your preferences, and let our
        intelligent system create the ultimate travel experience for you.
      </p>

      <section className={styles.howItWorks}>
        <h2>How It Works</h2>
        <ul>
          <li>
            <strong>Step 1:</strong> Share your preferences. Whether it’s
            through a quick form, a WhatsApp message, or an email, tell us about
            your ideal adventure.
          </li>
          <li>
            <strong>Step 2:</strong> NalaTravel gets to work. Our AI analyzes
            your input and designs a personalized itinerary, selecting the best
            accommodations, activities, and transportation options.
          </li>
          <li>
            <strong>Step 3:</strong> Review and refine. Receive your package
            within minutes and make changes if needed. Once confirmed, we handle
            the rest!
          </li>
        </ul>
      </section>

      <section className={styles.whyChooseUs}>
        <h2>Why Choose Customized Packages?</h2>
        <div className={styles.benefits}>
          <div>
            <h3>100% Tailored to You</h3>
            <p>
              Your adventure, your rules. Whether you want to explore
              Patagonia’s wildlife, embark on a trekking journey, or unwind in a
              luxury lodge, every detail is designed just for you.
            </p>
          </div>
          <div>
            <h3>Time-Saving</h3>
            <p>
              Skip the hours of research. NalaTravel instantly crafts a perfect
              package, leaving you stress-free and excited for your trip.
            </p>
          </div>
          <div>
            <h3>AI-Powered Precision</h3>
            <p>
              Our AI combines your preferences with local insights and real-time
              data to create a truly unique and seamless experience.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.getStarted}>
        <h2>Get Your Personalized Package Today</h2>
        <p>
          Whether you are planning a romantic getaway, an adventure-filled
          family trip, or a solo journey to reconnect with nature, NalaTravel is
          here to help.
        </p>
        <div className={styles.actionButtons}>
          <button className={styles.formButton}>Fill Out a Quick Form</button>
          <button className={styles.whatsappButton}>
            <a href="https://wa.me/yourwhatsappnumber">
              Contact Us on WhatsApp
            </a>
          </button>
          <button className={styles.emailButton}>
            <a href="mailto:info@discoverpatagonia.com">Email Us</a>
          </button>
        </div>
      </section>
    </div>
  );
};

export default CustomizedPackages;
