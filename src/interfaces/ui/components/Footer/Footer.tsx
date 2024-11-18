import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <h4>Discover Patagonia</h4>
          <p className={styles.discover}>
            Discover the best of Patagonia, Argentina through unique experiences
            and unforgettable adventures.
          </p>
        </div>
        <div className={styles.footerColumn}>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/destinations">Destinations</a>
            </li>
            <li>
              <a href="/experiences">Experiences</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>Contact Us</h4>
          <p>Email: discoverpatagonia@gmail.com</p>
          <p>Phone: +49 123458783 </p>
          <p>Location: Singen, Germany</p>
        </div>
        <div className={styles.footerColumn}>
          <h4>Follow Us</h4>
          <ul>
            <li>
              <a href="https://instagram.com">Instagram</a>
            </li>
            <li>
              <a href="https://facebook.com">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        © 2024 Explore Argentina. All rights reserved. |{" "}
        <a href="/privacy">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
