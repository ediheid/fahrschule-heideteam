import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import styles from "../Navbar/desktop-navigation.module.scss";

import { BsInfoCircle } from "react-icons/bs";

const DesktopNav = () => {
  // UseState
  const [fixNav, setFixNav] = useState(false);

  const stickyNav = () => {
    // Set to stick once scroll passed height of header (8rem)
    if (window.scrollY >= 80) {
      setFixNav(true);
    } else {
      setFixNav(false);
    }
  };

  // Event Listener for scroll and calling function
  window.addEventListener("scroll", stickyNav);

  return (
    <>
      <nav
        // Change nav classes on scroll event listener
        className={
          fixNav
            ? `${styles["nav-sticky"]} ${styles["desktop-nav-container"]}`
            : styles["desktop-nav-container"]
        }
      >
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

          {/* // ? About */}
          <li>
            <HashLink
              className={styles["nav-links"]}
              smooth
              to="/#about"
              alt="Link to team page"
            >
              Über Uns
            </HashLink>
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
            <HashLink
              className={styles["nav-links"]}
              smooth
              to="/#news"
              alt="Link to news page"
            >
              News
            </HashLink>
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
          {/* <li className={styles["covid-container"]}>
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
          </li> */}

          <HashLink
            className={styles["nav-links"]}
            smooth
            to="/#news"
            alt="Link to covid infopage"
          >
            <li className={styles["covid-container"]}>
              <BsInfoCircle
                className={`${styles["nav-links"]} ${styles["info-icon"]}`}
              />{" "}
              Corona Info{" "}
            </li>
          </HashLink>
        </ul>
      </nav>
    </>
  );
};

export default DesktopNav;
