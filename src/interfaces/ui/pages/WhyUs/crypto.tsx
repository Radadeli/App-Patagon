import React from "react";
import styles from "./crypto.module.scss";

const Crypto: React.FC = () => {
  return (
    <section className={styles.cryptoContainer}>
      <h1>Pay with Crypto — Modern, Secure & Borderless</h1>

      <p>
        At Discover Patagonia, we believe travel should be as modern and
        frictionless as your lifestyle. That’s why we proudly accept a wide
        range of cryptocurrencies including Bitcoin, Ethereum, and stablecoins
        like USDT and USDC.
      </p>

      <p>
        Whether you're traveling from Argentina or Australia, crypto payments
        remove bank delays, currency exchange fees, and international
        restrictions — giving you freedom, privacy, and speed.
      </p>

      <h3>Why travelers love paying with crypto:</h3>
      <ul>
        <li>💸 No foreign transaction or conversion fees</li>
        <li>🌍 Book from anywhere, without intermediaries</li>
        <li>⚡ Instant confirmations with smart contracts</li>
        <li>🔐 Blockchain-secured and private payments</li>
        <li>🎁 Exclusive discounts when using crypto!</li>
      </ul>

      <p>
        We are one of the few travel agencies in Latin America leading the
        crypto movement. Join the future of travel today — secure, smart and
        decentralized.
      </p>

      <div className={styles.cryptoLogos}>
        <img src="/src/assets/images/crypto.png" alt="Crypto Logos" />
      </div>
    </section>
  );
};

export default Crypto;
