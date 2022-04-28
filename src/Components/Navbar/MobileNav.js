import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { AppContext } from "../../App";

import { motion } from "framer-motion";

import styles from "../Navbar/mobile-navigation.module.scss";

import { BsInfoCircle } from "react-icons/bs";

// ! Mobile Nav is exported to Header.js and opened on Hamburger menu toggle
const MobileNav = () => {
  // State Context from App.js
  // onClick event set on links to close Nav dropdown
  const MobileNavContext = useContext(AppContext);

  // Animation rules for Framer-motion on dropdown container
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <>
      {/* // Todo: Look into more settings for animation */}
      <motion.nav
        initial={animateFrom}
        animate={animateTo}
        className={styles["dropdown-nav-container"]}
      >
        {/* <nav
        className={
          !MobileNavContext.isNavOpen
            ? `${styles["dropdown-nav-container"]}`
            : `${styles["dropdown-fix"]}`
        }
      > */}{" "}
        <ul className={styles["nav-list"]}>
          <hr />

          {/* Note: For mobile Links <li/> lives inside <Link/> to make sure full item is active and redirects to selected page - see in stylesheet .nav-list - li */}

          {/* // ? Home */}

          <Link
            onClick={MobileNavContext.isNavOpen}
            className={styles["nav-links"]}
            to="/"
            alt="Link to landing page"
          >
            {" "}
            <li>Home </li>
          </Link>

          <hr />

          {/* // ? Führerschein Classes */}

          <Link
            onClick={MobileNavContext.isNavOpen}
            className={styles["nav-links"]}
            to="/klassen"
            alt="Link to Führerschein Klassen page"
          >
            <li> Führerschein Klassen</li>
          </Link>

          <hr />

          {/* // ? Team */}

          <Link
            onClick={MobileNavContext.isNavOpen}
            className={styles["nav-links"]}
            to="/team"
            alt="Link to team page"
          >
            <li> Team</li>
          </Link>

          <hr />

          {/* // ? Preise */}

          <Link
            onClick={MobileNavContext.isNavOpen}
            className={styles["nav-links"]}
            to="/preise"
            alt="Link to preise page"
          >
            <li> Preise</li>
          </Link>

          <hr />

          {/* // ? Berufskraftfahrerqualifikation */}

          <Link
            onClick={MobileNavContext.isNavOpen}
            className={styles["nav-links"]}
            to="/berufskraftfahrerqualifikation"
            alt="Link to Berufskraftfahrerqualifikation page"
          >
            <li> Berufskraftfahrerqualifikation</li>
          </Link>

          <hr />

          {/* // ? News */}

          <Link
            onClick={MobileNavContext.isNavOpen}
            className={styles["nav-links"]}
            to="/news"
            alt="Link to news page"
          >
            <li> News</li>
          </Link>

          <hr />

          {/* // ? Contact */}

          <Link
            onClick={MobileNavContext.isNavOpen}
            className={styles["nav-links"]}
            to="/kontakt"
            alt="Link to contact page"
          >
            <li> Kontakt</li>
          </Link>

          <hr />

          {/* // ! To remove when no longer needed */}
          {/* // Todo: Add Hashlink */}
          {/* // ! Currently links to section on News page */}
          {/* // ? Covid Info page */}

          <Link
            onClick={MobileNavContext.isNavOpen}
            className={styles["nav-links"]}
            to="/news"
            alt="Link to covid infopage"
          >
            <li className={`${styles["covid-container"]} `}>
              <BsInfoCircle
                className={`${styles["nav-links"]} ${styles["info-icon"]}`}
              />{" "}
              <span
                className={`${styles["covid-span"]} ${styles["nav-links"]} `}
              >
                {" "}
                Covid Info
              </span>
            </li>
          </Link>

          <hr />
        </ul>
      </motion.nav>
    </>
  );
};

export default MobileNav;
