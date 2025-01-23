import React from "react";
import styles from "./signUp.module.scss";

const SignUpModal: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.signUpContainer}>
        <h3 className={styles.title}>Sign Up</h3>
        <form className={styles.form}>
          <label>First Name:</label>
          <input
            className={styles.input}
            type="text"
            placeholder="First name"
            required
          />

          <label>Last Name:</label>
          <input
            className={styles.input}
            type="text"
            placeholder="Last name"
            required
          />

          <label>Email:</label>
          <input
            className={styles.input}
            type="email"
            placeholder="Email"
            required
          />

          <label>Password:</label>
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            required
          />

          <label>Confirm Password:</label>
          <input
            className={styles.input}
            type="password"
            placeholder="Confirm Password"
            required
          />

          <button className={styles.submitButton} type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpModal;
