import React from "react";
import { Link } from "react-router-dom";

import styles from "../FührerscheinClasses/fschein-classes.module.scss";

import lkw from "../FührerscheinClasses/Static/truck2.png";

// ! Right

const LkwCard = () => {
  return (
    <div className={styles["class-container"]}>
      <div className={styles["img-container"]}>
        <img
          className={styles["class-img-right"]}
          alt="Fahrschule bus on country road"
          src={lkw}
        ></img>
      </div>
      <div className={styles["text-container"]}>
        <h2 className={styles["headings"]}>
          LKW <span className={styles["class-letter"]}>(Klasse C)</span>
        </h2>{" "}
        <ul className={styles["list-container"]}>
          <h3 className={styles["subheadings"]}>LKW C1</h3>
          <li>
            Mindesalter 18 Jahre, mehrspurige Kraftfahrzeuge über 3500 kg aber
            nicht mehr als 7500 kg mit Anhänger 750 kg, Vorbesitz Klasse B
            notwendig
          </li>

          <h3 className={styles["subheadings"]}>LKW Klasse C</h3>
          <li>
            Mindestalter 21 Jahre , mehrspurige Kraftfahrzeuge über zGM 3500 kg
            mit Anhänger 750 kg, Vorbesitz Klasse B notwendig
          </li>

          <h3 className={styles["subheadings"]}>Klasse CE Anhänger für LKW</h3>
          <li>
            Mindestalter 21 Jahre , Anhänger über 750 kg, Vorbesitz Klasse C
            notwendig
          </li>
        </ul>
        <Link to="/preise" alt="Link to price page">
          <button className={styles["price-button"]}>Preise</button>
        </Link>
        <Link to="/kontakt" alt="Link to contact page">
          <button className={styles["book-contact-button"]}>Book Now</button>
        </Link>
      </div>
    </div>
  );
};

export default LkwCard;
