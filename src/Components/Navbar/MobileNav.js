import React from "react";
import { Link } from "react-router-dom";

import styles from "../Navbar/mobile-navigation.module.scss";

import { BsInfoCircle } from "react-icons/bs";

// ! Mobile Nav is exported to Header.js and opened on Hamburger menu toggle
const MobileNav = () => {
  return (
    <>
      <nav className={styles["dropdown-nav-container"]}>
        {" "}
        <ul className={styles["nav-list"]}>
          {/* // ? Home */}
          <li>
            <Link
              className={styles["nav-links"]}
              to="/"
              alt="Link to landing page"
            >
              Home
            </Link>
          </li>

          {/* <hr /> */}

          {/* // ? Führerschein Classes */}
          <li>
            <Link
              className={styles["nav-links"]}
              to="/klassen"
              alt="Link to Führerschein Klassen page"
            >
              Führerschein Klassen
            </Link>
          </li>

          {/* // ? Team */}
          <li>
            <Link
              className={styles["nav-links"]}
              to="/team"
              alt="Link to team page"
            >
              Team
            </Link>
          </li>

          {/* // ? Preise */}
          <li>
            <Link
              className={styles["nav-links"]}
              to="/preise"
              alt="Link to preise page"
            >
              Preise
            </Link>
          </li>

          {/* // ? Berufskraftfahrerqualifikation */}
          <li>
            <Link
              className={styles["nav-links"]}
              to="/berufskraftfahrerqualifikation"
              alt="Link to Berufskraftfahrerqualifikation page"
            >
              Berufskraftfahrerqualifikation
            </Link>
          </li>

          {/* // ? News */}
          <li>
            <Link
              className={styles["nav-links"]}
              to="/news"
              alt="Link to news page"
            >
              News
            </Link>
          </li>

          {/* // ? Contact */}
          <li>
            <Link
              className={styles["nav-links"]}
              to="/kontakt"
              alt="Link to contact page"
            >
              Kontakt
            </Link>
          </li>

          {/* // ! To remove when no longer needed */}
          {/* // Todo: Add Hashlink */}
          {/* // ! Currently links to section on News page */}
          {/* // ? Covid Info page */}
          <li className={styles["covid-container"]}>
            <BsInfoCircle
              className={`${styles["nav-links"]} ${styles["info-icon"]}`}
            />{" "}
            <Link
              className={styles["nav-links"]}
              to="/news"
              alt="Link to covid infopage"
            >
              Covid Info
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileNav;
