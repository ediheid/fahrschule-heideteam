import React from "react";

import styles from "../FührerscheinClasses/fschein-classes.module.scss";

import pkw from "../FührerscheinClasses/Static/car2.png";
import motorcycle from "../FührerscheinClasses/Static/motorcycle.png";
import bus from "../FührerscheinClasses/Static/bus.png";
import pkwPlus from "../FührerscheinClasses/Static/pkwPlus3.png";

const FscheinClasses = () => {
  return (
    <div className={styles["classes-page-container"]}>
      {/* // ? PKW */}
      <div className={styles["class-container"]}>
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
              Kleinwagen, einer Mittelklasselimousine oder einem Kleinbus
              wählen.
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
          </ul>
          <button className={styles["book-contact-button"]}>Book Now</button>
        </div>
      </div>
      {/* // ? PKW PLUS */}
      {/* // ! Right */}
      {/* // Todo: Need new image */}
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
          <h2>PKW und Anhänger</h2>
          <p></p>
        </div>
      </div>
      {/* // ? Motorcycle */}
      <div className={styles["class-container"]}>
        <div className={styles["img-container"]}>
          <img
            className={styles["class-img"]}
            alt="Motorcycle front view"
            src={motorcycle}
          ></img>
        </div>
        <div className={styles["text-container"]}>Text box</div>
        Führerschein Classes will go here
      </div>
      {/* // ? LKW */}
      {/* // ! Right */}
      {/* // Todo: Need new image */}
      <div className={styles["class-container"]}>
        <div className={styles["img-container"]}>
          <img
            className={styles["class-img-right"]}
            alt="Fahrschule bus on country road"
            src={bus}
          ></img>
        </div>
        <div className={styles["text-container"]}>Text box</div>
        Führerschein Classes will go here
      </div>
    </div>
  );
};

export default FscheinClasses;
