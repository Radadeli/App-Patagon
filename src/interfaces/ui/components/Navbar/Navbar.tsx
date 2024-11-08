import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/images/logo.png";
import styles from "./Navbar.module.scss";
const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdown = (dropdown: string) => {
    setActiveDropdown(aciveDropdwon === dropwdonw ? null : dropdown);
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <img
          src={logo}
          alt="Discover Patagon Logo"
          className={styles.logoImage}
        />
      </div>
      <div className={styles.navbarLinks}>
        <Link to="/services" className={styles.navbarLink}>
          Services
        </Link>
        <Link to="/aboutus" className={styles.navbarLink}>
          About Us
        </Link>

        <Link to="/experiences" className={styles.navbarLink}>
          Experiences
        </Link>
        <Link to="/contact" className={styles.navbarLink}>
          Contact
        </Link>
      </div>

      <div className={styles.navbarAuths}>
        <Link to="/signin" className={styles.signIn}>
          Sign In
        </Link>
        <Link to="/signup" className={styles.signUp}>
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
