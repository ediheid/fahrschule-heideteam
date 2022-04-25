import React from "react";
import { Link } from "react-router-dom";

import styles from "../FührerscheinClasses/fschein-classes.module.scss";
import bus from "../FührerscheinClasses/Static/bus.png";

// Todo: Need new image

const BusCard = () => {
  return (
    <div className={styles["class-container"]}>
      <div className={styles["img-container"]}>
        <img
          className={styles["class-img"]}
          alt="Fahrschule bus on country road"
          src={bus}
        ></img>
      </div>
      <div className={styles["text-container"]}>
        <h2 className={styles["headings"]}>
          Bus <span className={styles["class-letter"]}>(Klasse D)</span>
        </h2>{" "}
        <ul className={styles["list-container"]}>
          <h3 className={styles["subheadings"]}>Bus Klasse D</h3>
          <li>
            Mindestalter 24 Jahre, Kraftfahrzeuge zur Personenbeförderung mit
            mehr als acht Personen ,mit Anhänger bis 750 kg.
          </li>

          <h3 className={styles["subheadings"]}>Klasse DE Anhänger für Bus</h3>
          <li>
            Mindestalter 24 Jahre, Anhänger über 750 kg , Vorbesitz Klasse D
            notwendig.
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

export default BusCard;
