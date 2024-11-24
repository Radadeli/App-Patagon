import React from "react";
import styles from "./payments.module.scss";

const Payments: React.FC = () => {
  return (
    <section className={styles.paymentSolutions}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Flexible Payment Solutions</h1>
          <p>
            At Discover Patagonia, we make traveling easier by offering a
            variety of payment options. Whether you prefer paying with your
            debit or credit card, or you are an enthusiast of cryptocurrency,
            we’ve got you covered!
          </p>
        </div>
        <div className={styles.heroImage}></div>
      </div>

      {/* Payment Options Section */}
      <div className={styles.paymentOptions}>
        <h2>Why Choose Our Payment Solutions?</h2>
        <div className={styles.optionsGrid}>
          <div className={styles.optionCard}>
            <img
              src="/src/assets/images/credit-card.png"
              alt="Credit/Debit Card"
            />
            <h3>Pay with Debit or Credit Cards</h3>
            <p>
              Use your Visa, MasterCard, or American Express to book your dream
              adventure quickly and securely.
            </p>
          </div>
          <div className={styles.optionCard}>
            <img
              src="/src/assets/images/crypto.png"
              alt="Cryptocurrency Payment"
            />
            <h3>Pay with Cryptocurrency</h3>
            <p>
              Embrace the future of payments! We accept Bitcoin, Ethereum, and
              other major cryptocurrencies. Enjoy fast, secure, and global
              transactions.
            </p>
          </div>
          <div className={styles.optionCard}>
            <img
              src="/src/assets/images/payment-plans.png"
              alt="Payment Plans"
            />
            <h3>Flexible Payment Plans</h3>
            <p>
              Take advantage of our installment plans, making it easier than
              ever to book now and pay over time.
            </p>
          </div>
        </div>
      </div>

      {/* Security Section */}
      <div className={styles.paymentSecurity}>
        <h2>Your Security is Our Priority</h2>
        <p>
          Our payment system is protected with the latest encryption technology
          to ensure your transactions are safe and secure. Whether you’re paying
          with a card or crypto, your details are in safe hands.
        </p>
        <img src="/src/assets/images/security.png" alt="Secure Payment" />
      </div>

      {/* Call to Action Section */}
      <div className={styles.paymentCTA}>
        <h2>Ready to Book Your Adventure?</h2>
        <p>
          Choose the payment method that works best for you and get ready for an
          unforgettable journey in Patagonia.
        </p>
        <button className={styles.ctaButton}>Start Booking Now</button>
      </div>
    </section>
  );
};

export default Payments;
