import React, { useContext } from "react";

import Roll from "react-reveal/Fade";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { AppContext } from "../../App";

import styles from "../Navbar/mobile-navigation.module.scss";

import { BsInfoCircle } from "react-icons/bs";

// ! Mobile Nav is exported to Header.js and opened on Hamburger menu toggle
const MobileNav = () => {
  // State Context from App.js
  // onClick event set on links to close Nav dropdown
  const MobileNavContext = useContext(AppContext);

  // Animation rules for Framer-motion on dropdown container

  return (
    <>
      {/* // Todo: Look into more settings for animation */}

      <Roll top cascade duration={500}>
        <nav className={styles["dropdown-nav-container"]}>
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

            <HashLink
              className={styles["nav-links"]}
              smooth
              to="/#covid"
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
                  Corona Info
                </span>
              </li>
            </HashLink>

            <hr />
          </ul>
        </nav>
      </Roll>
    </>
  );
};

export default MobileNav;
