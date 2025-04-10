import React from "react";
import styles from "./Security.module.scss";
import encrypted from "/src/assets/images/encrypted.jpg";

const Security: React.FC = () => {
  return (
    <section className={styles.container}>
      <h1>Security Comes Standard — Always</h1>

      <p>
        Booking your dream trip should feel exciting — not risky. That’s why we
        implement best-in-class security across all our transactions, platforms,
        and communications.
      </p>

      <p>
        Whether you're paying with credit card, crypto, or transfer, your data
        is encrypted, private, and never stored in plain text.
      </p>

      <h3>Security features you can trust:</h3>
      <ul>
        <li>🔐 256-bit SSL encryption on all pages</li>
        <li>🔍 Anti-fraud monitoring with every transaction</li>
        <li>📩 Verified communication via secure email channels</li>
        <li>🧾 Transparent receipts and tracking</li>
        <li>🔒 GDPR-compliant data handling</li>
      </ul>

      <p>
        Your trust is everything to us. That’s why we invest in technology — so
        you can invest in unforgettable memories.
      </p>
      <img src={encrypted} alt="Secure Transactions" />
    </section>
  );
};

export default Security;
