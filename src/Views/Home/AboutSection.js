import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import TeamPhoto from "./Static/team3.png";

import styles from "../Home/home.module.scss";

const AboutSection = () => {
  return (
    <section className={styles["about-section"]} id="about">
      <div className={styles["about-content-container"]}>
        <div className={styles["about-text-container"]}>
          <h2 className={styles["headings"]}>Über Uns</h2>

          <p className={styles["about-paragraph"]}>
            Unsere Fahrschule wurde 1990 in Radeberg/Dresden gegründet. Seitdem
            haben viele Fahrschüler in allen Fahrzeugklassen erfolgreich ihren
            Führerschein mit unserer Hilfe bestanden. Unser Team setzt sich
            zusammen aus einer Reihe von älteren Kollegen mit sehr langer
            Berufserfahrung und jungen Kollegen, welche die notwendige Frische
            ins Team bringen.
          </p>

          <p className={styles["about-paragraph"]}>
            Bei der Umschreibung ausländischer Führerscheine, Neu – und
            Wiedererteilungen helfen wir gern weiter. Ebenso, wenn es notwendig
            erscheint, die Fähigkeiten und Fertigkeiten des Führens von
            Fahrzeugen aufzufrischen bzw. die Fahrkompetenz neu zu beurteilen.
          </p>
          <p className={styles["about-paragraph"]}>
            Des weiteren beschäftigen wir uns mit der Aus- und Weiterbildung von
            Berufskraftfahrern im Bereich des Güter- Personenverkehrs.
          </p>

          <p className={styles["about-paragraph"]}>
            Wie es unser Logo erkennen lässt - Mit uns haben Sie den Bogen raus!
          </p>

          <Link to="/team" alt="Link to Team page">
            <button className={styles["gradient-button-dark"]}>
              Mehr übers Team
            </button>
          </Link>
        </div>

        <img
          src={TeamPhoto}
          alt="The team"
          className={styles["team-photo"]}
        ></img>
      </div>
    </section>
  );
};

export default AboutSection;
