import React from "react";
import { Link } from "react-router-dom";

import styles from "../FührerscheinClasses/fschein-classes.module.scss";

import pkwPlus from "../FührerscheinClasses/Static/pkwPlus3.png";

// ! Right
// Todo: Need new image

const PkwAnhaengerCard = () => {
  return (
    <div className={styles["class-container"]}>
      <div className={styles["img-container"]}>
        <img
          className={styles["class-img-right"]}
          alt="    By Markus Winkler - from
      pexels.com - a-movable-trailer-on-the-roadside-10304035/"
          src={pkwPlus}
        ></img>
      </div>
      <div className={styles["text-container"]}>
        {" "}
        <h2 className={styles["headings"]}>
          PKW + Anhänger{" "}
          <span className={styles["class-letter"]}>(Klasse BE, B96)</span>
        </h2>
        <ul className={styles["list-container"]}>
          <li>
            Für Ihre Hobbies wie z.B. Pferdesport, für die Urlaubsreise mit dem
            großen Wohnanhänger oder auch im Job ist es heute in vielen Fällen
            notwendig, einen Führerschein der Klasse BE zu besitzen. Wir machen
            Sie fit für das Fahren mit einem Hängerzug.
          </li>

          <h3 className={styles["subheadings"]}>BE Anhänger für PKW</h3>
          <li>
            Vorbesitz der Klasse B notwendig, Mindestalter 18 / 17 Jahre,
            Fahrzeug der Klasse B mit Anhänger bis 3500 kg
          </li>

          <h3 className={styles["subheadings"]}>Klasse B96 Anhänger für PKW</h3>
          <li>
            Vorbesitz der Klasse B notwendig, Mindestalter 18 / 17 Jahre,
            Fahrzeug der Klasse B mit Anhänger über 750 kg und einer zGM des
            Zuges bis 4250 kg
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

export default PkwAnhaengerCard;
