import React from "react";
import { Link } from "react-router-dom";

import styles from "../Home/home.module.scss";

import classroom from "../Home/Static/presentation.png";

import semi from "../Home/Static/semi.png";
import certificate from "../Home/Static/certificate.png";
import bus from "../Home/Static/bus.png";

const BerufsSection = () => {
  return (
    <section className={styles["berufs-section"]}>
      <h2 className={`${styles["headings"]} ${styles["extra-info-heading"]}`}>
        {/* // ! Can this word be broken like this? */}
        Wir bieten auch Berufskraftfahrer- qualifikation an
      </h2>

      <div className={styles["berufs-background-container"]}>
        <div className={styles["berufs-icons-container"]}>
          <img
            src={classroom}
            alt="Teacher icons created by Nikita Golubev - Flaticon - https://www.flaticon.com/free-icons/teacher"
          ></img>

          <img
            src={semi}
            alt="Truck icons created by Freepik - Flaticon - https://www.flaticon.com/free-icons/truck"
          ></img>

          <img
            src={bus}
            alt=" Bus icons created by Freepik - Flaticon - https://www.flaticon.com/free-icons/bus"
          ></img>
          <img
            src={certificate}
            alt="Certificate icons created by Freepik - Flaticon - https://www.flaticon.com/free-icons/certificate"
          ></img>
        </div>

        <p className={styles["berufs-text"]}>
          Entsprechend des EU-Berufskraftfahrer-Qualifikationsgesetzes führen
          wir die Weiterbildung von LKW- und Busfahrern durch
        </p>

        <Link
          to="/berufskraftfahrerqualifikation"
          alt="Link to Berufskraftfahrerqualifikation page"
        >
          <button className={styles["berufs-button"]}>Mehr Information</button>
        </Link>
      </div>
    </section>
  );
};

export default BerufsSection;
