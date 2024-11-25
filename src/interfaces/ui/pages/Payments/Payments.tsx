// import React from "react";
// import styles from "./payments.module.scss";

// const Payments: React.FC = () => {
//   return (
//     <section className={styles.paymentSolutions}>
//       {/* Hero Section */}
//       <div className={styles.hero}>
//         <div className={styles.heroText}>
//           <h1>Flexible Payment Solutions</h1>
//           <p>
//             At Discover Patagonia, we make traveling easier by offering a
//             variety of payment options. Whether you prefer paying with your
//             debit or credit card, or you are an enthusiast of cryptocurrency,
//             we’ve got you covered!
//           </p>
//         </div>
//         <div className={styles.heroImage}></div>
//       </div>

//       {/* Payment Options Section */}
//       <div className={styles.paymentOptions}>
//         <h2>Why Choose Our Payment Solutions?</h2>
//         <div className={styles.optionsGrid}>
//           <div className={styles.optionCard}>
//             <img
//               src="/src/assets/images/credit-card.png"
//               alt="Credit/Debit Card"
//             />
//             <h3>Pay with Debit or Credit Cards</h3>
//             <p>
//               Use your Visa, MasterCard, or American Express to book your dream
//               adventure quickly and securely.
//             </p>
//           </div>
//           <div className={styles.optionCard}>
//             <img
//               src="/src/assets/images/crypto.png"
//               alt="Cryptocurrency Payment"
//             />
//             <h3>Pay with Cryptocurrency</h3>
//             <p>
//               Embrace the future of payments! We accept Bitcoin, Ethereum, and
//               other major cryptocurrencies. Enjoy fast, secure, and global
//               transactions.
//             </p>
//           </div>
//           <div className={styles.optionCard}>
//             <img
//               src="/src/assets/images/payment-plans.png"
//               alt="Payment Plans"
//             />
//             <h3>Flexible Payment Plans</h3>
//             <p>
//               Take advantage of our installment plans, making it easier than
//               ever to book now and pay over time.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Security Section */}
//       <div className={styles.paymentSecurity}>
//         <h2>Your Security is Our Priority</h2>
//         <p>
//           Our payment system is protected with the latest encryption technology
//           to ensure your transactions are safe and secure. Whether you’re paying
//           with a card or crypto, your details are in safe hands.
//         </p>
//         <img src="/src/assets/images/security.png" alt="Secure Payment" />
//       </div>

//       {/* Call to Action Section */}
//       <div className={styles.paymentCTA}>
//         <h2>Ready to Book Your Adventure?</h2>
//         <p>
//           Choose the payment method that works best for you and get ready for an
//           unforgettable journey in Patagonia.
//         </p>
//         <button className={styles.ctaButton}>Start Booking Now</button>
//       </div>
//     </section>
//   );
// };

// export default Payments;

import React from "react";
import styles from "./payments.module.scss";

const Payments: React.FC = () => {
  return (
    <div className={styles.payments}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <h1>Flexible Payment Solutions</h1>
        <p>
          We make it easy for you to secure your adventures in Patagonia with a
          range of payment options. Whether you prefer traditional methods or
          want to explore cutting-edge technologies, we’ve got you covered.
        </p>
      </div>
      {/* Payment Methods Section */}
      <div className={styles.paymentMethods}>
        <h2>Accepted Payment Methods</h2>
        <div className={styles.methodGrid}>
          {/* Credit/Debit Cards */}
          <div className={styles.methodCard}>
            <img
              src="/src/assets/icons/credit-card.svg"
              alt="Credit Card"
              className={styles.icon}
            />
            <h3>Credit/Debit Cards</h3>
            <p>
              We accept all major credit and debit cards, including Visa,
              Mastercard, and American Express. Your payments are secure and
              encrypted for peace of mind.
            </p>
          </div>

          {/* PayPal */}
          <div className={styles.methodCard}>
            <img
              src="/src/assets/icons/paypal.svg"
              alt="PayPal"
              className={styles.icon}
            />
            <h3>PayPal</h3>
            <p>
              Use your PayPal account for quick, secure transactions. Perfect
              for international customers who prefer digital wallets.
            </p>
          </div>

          {/* Bank Transfers */}
          <div className={styles.methodCard}>
            <img
              src="/src/assets/icons/bank-transfer.svg"
              alt="Bank Transfer"
              className={styles.icon}
            />
            <h3>Bank Transfers</h3>
            <p>
              Prefer direct transfers? We support local and international bank
              transfers. Contact us for account details to make your payment.
            </p>
          </div>

          {/* Cryptocurrency */}
          <div className={styles.methodCard}>
            <img
              src="/src/assets/icons/crypto.svg"
              alt="Cryptocurrency"
              className={styles.icon}
            />
            <h3>Cryptocurrency</h3>
            <p>
              We accept popular cryptocurrencies like Bitcoin and Ethereum.
              Fast, secure, and global, crypto lets you pay without additional
              fees.
            </p>
          </div>
        </div>
      </div>
      {/* Why Cryptocurrency Section */}
      <div className={styles.cryptoInfo}>
        <h2>Why Choose Cryptocurrency?</h2>
        <p>
          Cryptocurrency offers a modern and efficient way to pay. Here’s why
          it’s a great option:
        </p>
        <ul>
          <li>
            <strong>Security:</strong> Your transaction is encrypted and secure.
          </li>
          <li>
            <strong>Global Payments:</strong> No matter where you’re from,
            crypto allows seamless cross-border payments.
          </li>
          <li>
            <strong>Lower Fees:</strong> Avoid high processing fees associated
            with traditional payment methods.
          </li>
        </ul>
        <p>
          New to cryptocurrency? Don’t worry! We’re here to guide you through
          the process and ensure your experience is smooth and hassle-free.
        </p>
      </div>
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
    </div>
  );
};

export default Payments;
