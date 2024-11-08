import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import styles from "./Navbar.module.scss";
const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDropdown = (dropdown: string) => {
    setActiveDropdown(aciveDropdwon === dropwdonw ? null : dropdown);
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
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
        <button onClick={toggleModal} className={styles.navbarButton}>
          Sign In
        </button>
        <button onClick={toggleModal} className={styles.navbarButton}>
          Sign Up
        </button>
      </div>

      {isModalOpen && (
        <div className={styles.navbarModal}>
          <div className={styles.modalContent}>
            <button
              onClick={toggleModal}
              className={styles.modalClose}
            ></button>
            <form>
              <label> Email: </label>
              <input type="email" placeholder="Enter your email" />
              <label> Password: </label>
              <input type="password" placeholder="Enter your password" />
              <button type="submit"> Submit </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
