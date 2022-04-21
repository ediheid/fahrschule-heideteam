import React from "react";

import TeamPhoto from "./Static/team.png";

import styles from "../Home/home.module.scss";

const AboutSection = () => {
  return (
    <section className={styles["about-section"]}>
      <div className={styles["about-content-container"]}>
        <div className={styles["about-text-container"]}>
          <h2 className={styles["headings"]}>Über Uns</h2>
          <p className={styles["about-paragraph"]}>
            Seit Mai 1990 haben unsere Fahrlehrer schon mehr als 7000
            Fahrschüler aller Klassen ausgebildet. Wir helfen Ihnen gern wenn es
            um den Erwerb, die Erweiterung oder auch um die "Wiederaktivierung"
            der Fahrerlaubnis geht.
          </p>

          <button className={styles["dark-button"]}>Mehr übers Team</button>
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
