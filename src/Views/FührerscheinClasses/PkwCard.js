import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "../FührerscheinClasses/fschein-classes.module.scss";

import pkw from "../FührerscheinClasses/Static/car2.png";

// AOS
import Aos from "aos";
import "aos/dist/aos.css";

const PkwCard = () => {
  // AOS functionality
  useEffect(() => {
    Aos.init({ duration: 1000, once: false });
  }, []);
  return (
    <div data-aos="fade-up" className={styles["class-container"]}>
      <div className={styles["img-container"]}>
        <img
          className={styles["class-img"]}
          alt="White card hood"
          src={pkw}
        ></img>
      </div>
      <div className={styles["text-container"]}>
        {" "}
        <h2 className={styles["headings"]}>
          PKW <span className={styles["class-letter"]}>(Klasse B)</span>
        </h2>
        <ul className={styles["list-container"]}>
          <li>
            So können Sie Ihr Ausbildungsfahrzeug unter einem kompakten
            Kleinwagen, einer Mittelklasselimousine oder einem Kleinbus wählen.
          </li>
          <li>Alle Fahrzeuge verfügen über eine Klimaanlage.</li>
          <li>
            Im Bedarfsfall kann auch ein Automatikfahrzeug zur Verfügung
            gestellt werden.
          </li>
          <li>
            Gern verhelfen wir auch Menschen mit Handicap, gehörlosen und
            hörgeschädigten Menschen zum Führerschein.
          </li>
          <h3 className={styles["subheadings"]}>Info</h3>
          <li>
            Mindestalter 18 Jahre / begleitetes Fahren 17 Jahre, mehrspurige
            Kraftfahrzeuge bis zGM 3500 kg mit Anhänger 750 kg, bei Anhängern
            über 750 kg beträgt die max. zGM des Zuges 3500 kg
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

export default PkwCard;
