import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/images/logo.png";
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const handleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}
    >
      <div className={styles.navbarContainer}>
        <div className={styles.navbarLogo}>
          <Link to="/">
            <img
              src={logo}
              alt="Discover Patagonia Logo"
              className={styles.logoImage}
            />
          </Link>
        </div>

        <div className={styles.navbarLinks}>
          {/* Dropdowns */}
          <div
            className={`${styles.navbarDropdown} ${
              activeDropdown === "services" ? styles.activeDropdown : ""
            }`}
            onMouseEnter={() => handleDropdown("services")}
            onMouseLeave={() => handleDropdown("null")}
          >
            <Link to="/services" className={styles.navbarLink}>
              Services
            </Link>
            {activeDropdown === "services" && (
              <div className={styles.dropdownMenu}>
                <Link to="/services/packages">Customized Travel Packages</Link>
                <Link to="/services/accommodation">Accommodation Booking</Link>
                <Link to="/services/transport">Transport Services</Link>
                <Link to="/services/tours">Guided Tours</Link>
                <Link to="/services/payment">Payment Solutions</Link>
              </div>
            )}
          </div>

          <div
            className={`${styles.navbarDropdown} ${
              activeDropdown === "experiences" ? styles.activeDropdown : ""
            }`}
            onMouseEnter={() => handleDropdown("experiences")}
            onMouseLeave={() => handleDropdown("null")}
          >
            <Link to="/experiences" className={styles.navbarLink}>
              Experiences
            </Link>
            {activeDropdown === "experiences" && (
              <div className={styles.dropdownMenu}>
                <Link to="/experiences/nature">Nature & Wildlife</Link>
                <Link to="/experiences/adventure">Adventure Activities</Link>
                <Link to="/experiences/cultural">Cultural & Culinary</Link>
                <Link to="/experiences/seasonal">
                  Special Seasonal Experiences
                </Link>
              </div>
            )}
          </div>

          <Link to="/aboutus" className={styles.navbarLink}>
            About Us
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
      </div>
    </nav>
  );
};

export default Navbar;
