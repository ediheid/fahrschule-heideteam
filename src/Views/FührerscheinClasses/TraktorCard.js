import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "../FührerscheinClasses/fschein-classes.module.scss";

import traktor from "../FührerscheinClasses/Static/tractor.png";

// AOS
import Aos from "aos";
import "aos/dist/aos.css";

const TraktorCard = () => {
  // AOS functionality
  useEffect(() => {
    Aos.init({ duration: 1000, once: false });
  }, []);

  return (
    <div data-aos="fade-up" className={styles["class-container"]}>
      <div className={styles["img-container"]}>
        <img
          className={styles["class-img-right"]}
          alt=" By Jannis Knorr - frpm pexels.com - green-tractor-plowing-the-fields-on-focus-photography-2933243/"
          src={traktor}
        ></img>
      </div>
      <div className={styles["text-container"]}>
        <h2 className={styles["headings"]}>
          Traktor <span className={styles["class-letter"]}>(Klasse L & T)</span>
        </h2>{" "}
        <ul className={styles["list-container"]}>
          <li>
            Für die "Kapitäne der Landstraße" steht Ihnen ein speziell
            geschulter Fahrlehrer zur Verfügung.
          </li>

          <h3 className={styles["subheadings"]}>Klasse L</h3>
          <li>
            Bei der Klasse L handelt es sich um den „kleinen“
            Treckerführerschein, der bereits mit 16 Jahren erworben werden kann.
            Mit ihm können selbstfahrende Arbeitsmaschinen und Flurförderzeuge
            mit einer betriebsbedingte Höchstgeschwindigkeit (bbH) bis 25 km/h
            sowie Traktoren oder Zugmaschinen gefahren werden, die eine bbH von
            40 km/h erreichen. Mit einem Anhänger beschränkt sich die maximal zu
            fahrende Höchstgeschwindigkeit wiederum auf 25 km/h. Im
            „Autoführerschein“ der Klasse B ist die Klasse L enthalten.{" "}
          </li>

          <h3 className={styles["subheadings"]}>Klasse T</h3>
          <li>
            Der große Traktoren Führerschein der Klasse T erlaubt es, Traktoren
            zu fahren, deren bbH bei maximal 60 km/h liegt, wobei sich die bbH
            unter Mitführung eines oder zweier „zugelassener“ Anhänger auf 40
            km/h beschränkt. Zusätzlich dürfen selbstfahrende Arbeitsmaschinen
            mit einer bbH von 40 km/h geführt werden. Auch dieser Traktor
            Führerschein darf bereits mit 16 Jahren gemacht werden, jedoch
            gelten für Personen von 16 bis 18 Jahren die Einschränkungen der
            Klasse L. Wer bereits den Führerschein der Klasse CE besitzt, ist
            gleichzeitig Inhaber der Klasse T.
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

export default TraktorCard;
