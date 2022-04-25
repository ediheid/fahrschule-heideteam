import React from "react";
import { Link } from "react-router-dom";

import styles from "../Footer/footer.module.scss";

const Footer = () => {
  //  Get date and year to pass into copyright
  let currentTime = new Date();
  let currentYear = currentTime.getFullYear();

  return (
    <footer className={styles["footer-container-element"]}>
      <div className={styles["footer-content-container"]}>
        {/* Heading */}
        <h2 className={styles["fahrschule-heading"]}>Fahrschule Heideteam</h2>

        {/* Contact Us link */}
        {/* // Todo: what should 'contact us' be ing German? */}
        <Link
          className={styles["page-links"]}
          to="/kontakt"
          alt="Link to contact page"
        >
          {" "}
          Kontakt
        </Link>

        {/* Covid news link*/}
        <Link
          className={styles["page-links"]}
          to="/news"
          alt="Link to covid information"
        >
          COVID-19
        </Link>

        {/* Address */}
        <a
          href="https://www.google.com/maps/place/Heideteam+Fahrschulgesellschaft/@51.10972,13.9174513,17z/data=!3m1!4b1!4m5!3m4!1s0x4709b5ff507ea5e9:0x3ec1a1955afef4e0!8m2!3d51.10972!4d13.91964"
          alt="Link to google maps address"
          target="_blank"
          rel="noopener noreferrer"
          className={styles["address"]}
        >
          {" "}
          01454 Radeberg - <br /> Pillnitzer Straße 8{" "}
        </a>

        {/* Designed and built by */}
        <span className={styles["designed-by"]}>
          Website designed and developed by{" "}
          <a
            className={styles["edith-website-link"]}
            href="https://www.edithsdev.com/"
            alt="Link to designer and  developers website"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Edith Heidmann
          </a>
        </span>

        {/* Copyright information */}
        <span className={styles["copyright"]}>
          &copy; 2022 - {currentYear} Fahrschule Heideteam GmbH
        </span>

        {/* Extra Links section */}
        {/* // Todo: setup routing to pages */}
        {/* // ! Impressum etc links will go in this container side by side.. */}
        <div className={styles["extra-links-container"]}>
          {/* Impressum */}
          <Link
            className={styles["extra-links"]}
            to="/impressum"
            alt="Link to impressum page"
          >
            Impressum
          </Link>

          {/* Datenschutz */}
          <Link
            className={styles["extra-links"]}
            to="/datenschutz"
            alt="Link to Datenschutz information"
          >
            Datenschutzerklärung
          </Link>

          {/* Team */}
          {/* // Todo: 'About us' in German? */}
          <Link
            className={styles["extra-links"]}
            to="/team"
            alt="Link to team page"
          >
            Team
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
