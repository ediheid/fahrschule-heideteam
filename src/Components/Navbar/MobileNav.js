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
          <hr />

          {/* Note: For mobile Links <li/> lives inside <Link/> to make sure full item is active and redirects to selected page - see in stylesheet .nav-list - li */}

          {/* // ? Home */}

          <Link
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
            className={styles["nav-links"]}
            to="/klassen"
            alt="Link to Führerschein Klassen page"
          >
            <li> Führerschein Klassen</li>
          </Link>

          <hr />

          {/* // ? Team */}

          <Link
            className={styles["nav-links"]}
            to="/team"
            alt="Link to team page"
          >
            <li> Team</li>
          </Link>

          <hr />

          {/* // ? Preise */}

          <Link
            className={styles["nav-links"]}
            to="/preise"
            alt="Link to preise page"
          >
            <li> Preise</li>
          </Link>

          <hr />

          {/* // ? Berufskraftfahrerqualifikation */}

          <Link
            className={styles["nav-links"]}
            to="/berufskraftfahrerqualifikation"
            alt="Link to Berufskraftfahrerqualifikation page"
          >
            <li> Berufskraftfahrerqualifikation</li>
          </Link>

          <hr />

          {/* // ? News */}

          <Link
            className={styles["nav-links"]}
            to="/news"
            alt="Link to news page"
          >
            <li> News</li>
          </Link>

          <hr />

          {/* // ? Contact */}

          <Link
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
            className={styles["nav-links"]}
            to="/news"
            alt="Link to covid infopage"
          >
            <li className={styles["covid-container"]}>
              <BsInfoCircle
                className={`${styles["nav-links"]} ${styles["info-icon"]}`}
              />{" "}
              <span className={styles["covid-span"]}> Covid Info</span>
            </li>
          </Link>

          <hr />
        </ul>
      </nav>
    </>
  );
};

export default MobileNav;
