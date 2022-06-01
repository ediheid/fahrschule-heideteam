import React from "react";

import styles from "../Berufskraftfahrerqualifikation/bkf.module.scss";

import radio1 from "../Berufskraftfahrerqualifikation/Static/radio1.png";
import wheel1 from "../Berufskraftfahrerqualifikation/Static/wheel1.png";
import wheel3 from "../Berufskraftfahrerqualifikation/Static/wheel3.png";

const Berufskraftfahrerqualifikation = () => {
  return (
    <div data-aos="fade-up" className={styles["bkf-page-container"]}>
      {/* // Todo: What should the heading be? */}

      <div className={styles["heading-container"]}>
        <h2 className={styles["heading"]}>Bkf</h2>
        <div className={styles["heading-underline"]}></div>
      </div>

      <p className={styles["text"]}>
        {" "}
        Wer im gewerblichen Güter- als auch Personenverkehr sein Geld verdienen
        möchte, braucht zusätzlich zum gültigen Führerschein eine
        Berufskraftfahrer- Qualifikation. Diese Qualifikation kann man über
        verschiedene Wege erlangen.
      </p>
      <p className={styles["text"]}>
        {" "}
        Fragen Sie uns! Wir können Ihnen helfen.
      </p>
      <span className={styles["text"]}>
        {" "}
        <a
          className={styles["email-link"]}
          href="mailto:w.franke@fsheideteam.de"
          target="_blank"
          rel="noopener noreferrer"
        >
          w.franke@fsheideteam.de
        </a>
      </span>

      <div className={styles["gallery-section"]}>
        <img
          className={styles["img"]}
          src={wheel1}
          alt="close up of truck steering wheel"
        ></img>
        <img
          className={styles["img"]}
          src={wheel3}
          alt="close up of truck steering wheel"
        ></img>
        <img
          className={styles["img"]}
          src={radio1}
          alt="close up of truck radio"
        ></img>
      </div>

      <p className={styles["text"]}>
        Des weiteren muss man diese Qualifikation aller fünf Jahre wieder
        auffrischen und sein Wissen auf den neuesten Stand bringen.
      </p>
      <p className={styles["text"]}>
        Auch hier können wir Ihnen helfen und bieten Weiterbildungen gemäß dem
        Berufskraftfahrerqualifikationsgesetzes an.
      </p>
      <p className={styles["text"]}>Fragen Sie, wir beraten Sie gern!</p>
    </div>
  );
};

export default Berufskraftfahrerqualifikation;
