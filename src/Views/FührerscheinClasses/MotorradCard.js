import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "../FührerscheinClasses/fschein-classes.module.scss";

import motorcycle from "../FührerscheinClasses/Static/motorcycle.png";

// AOS
import Aos from "aos";
import "aos/dist/aos.css";

const MotorradCard = () => {
  // AOS functionality
  useEffect(() => {
    Aos.init({ duration: 1000, once: false });
  }, []);

  return (
    <div data-aos="fade-up" className={styles["class-container"]}>
      <div className={styles["img-container"]}>
        <img
          className={styles["class-img"]}
          alt="Motorcycle front view"
          src={motorcycle}
        ></img>
      </div>
      <div className={styles["text-container"]}>
        {" "}
        <h2 className={styles["headings"]}>
          Motorrad <span className={styles["class-letter"]}>(Klasse A)</span>
        </h2>
        <ul className={styles["list-container"]}>
          <li>
            Nach dem Motto: "Biker lernen von Bikern!" Unsere Motorradfahrlehrer
            schulen einen Großteil der Ausbildung vom Motorrad aus. So lässt
            sich besser zeigen was ein Motorradfahrer alles beherrschen muss.
          </li>
          <h3 className={styles["subheadings"]}>Leichtkrafträder Klasse A1</h3>
          <li>
            Mindestalter 16 Jahre, max. Hubraum 125 cm3, max. Leistung 11kW,
            max. Leistungs – Masse – Verhältnis 0,1 kW/kg
          </li>

          <h3 className={styles["subheadings"]}>Motorräder Klasse A2</h3>
          <li>
            Mindestalter 18 Jahre, max. Leistung 35kW, max. Leistungs – Ma sse –
            Verhältnis 0,2 kW/kg
          </li>

          <h3 className={styles["subheadings"]}>Klasse A</h3>
          <li>
            Mindestalter 24 Jahre bei Direkteinstieg, bei Aufsteigern 2 Jahre
            Vorbesitz der Klasse A2 nötig
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

export default MotorradCard;
