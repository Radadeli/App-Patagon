import React from "react";
import styles from "./signIn.module.scss";
const SignIn: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.signInContainer}>
        <h3 className={styles.title}> Sign In </h3>
        <p className={styles.description}>
          For security, please sign in to access your information
        </p>
        <form className={styles.form}>
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" required />
          <label className={styles.password}>Password: </label>
          <input type="password" placeholder="Enter your password" required />
          <button className={styles.submitButton} type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
