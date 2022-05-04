import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import TeamPhoto from "./Static/team3.png";

import styles from "../Home/home.module.scss";

// AOS
import Aos from "aos";
import "aos/dist/aos.css";

const AboutSection = () => {
  // AOS functionality
  useEffect(() => {
    Aos.init({ duration: 1000, once: false });
  }, []);

  return (
    <section className={styles["about-section"]} id="about">
      <div className={styles["about-content-container"]}>
        <div data-aos="fade-up" className={styles["about-text-container"]}>
          <h2 className={styles["headings"]}>Über Uns</h2>

          <p className={styles["about-paragraph"]}>
            Seit Mai 1990 haben unsere Fahrlehrer schon mehr als 7000
            Fahrschüler*innen aller Klassen ausgebildet. Wir helfen Ihnen gern
            wenn es um den Erwerb, die Erweiterung oder auch um die
            "Wiederaktivierung" der Fahrerlaubnis geht.
          </p>

          <Link to="/team" alt="Link to Team page">
            <button className={styles["gradient-button-dark"]}>
              Mehr übers Team
            </button>
          </Link>
        </div>

        <img
          data-aos="fade-up"
          src={TeamPhoto}
          alt="The team"
          className={styles["team-photo"]}
        ></img>
      </div>
    </section>
  );
};

export default AboutSection;
