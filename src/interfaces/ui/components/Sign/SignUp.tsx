import React from "react";
import styles from "./signUp.module.scss";

const SignUp: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.signUpContainer}>
        <h3 className={styles.title}>Sign Up</h3>
        <form className={styles.form}>
          <label>First Name:</label>
          <input type="text" placeholder="First name" required />

          <label>Last Name:</label>
          <input type="text" placeholder="Last name" required />

          <label>Email:</label>
          <input type="email" placeholder="Email" required />

          <label>Password:</label>
          <input type="password" placeholder="Password" required />

          <label>Confirm Password:</label>
          <input type="password" placeholder="Confirm Password" required />

          <button className={styles.submitButton} type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
