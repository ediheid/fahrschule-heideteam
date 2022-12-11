import React from "react";

import styles from "../Klassen/fschein-classes.module.scss";

import A2 from "../Klassen/Static/icon-a2.png";

const KlasseA2 = () => {
  return (
    <section className={styles["class-section"]} id="klasse-a2">
      <div className={styles["class-heading-circle"]}>
        <img
          className={styles["class-icons"]}
          src={A2}
          alt="Motorcycle icons created by Freepik - Flaticon - https://www.flaticon.com/free-icons/motorcycle"
        ></img>
        <h2 className={styles["headings"]}>Klasse A2</h2>
      </div>

      <div className={styles["section-content-container"]}>
        <div className={styles["text-container"]}>
          <h4>Mittelschwere Krafträder</h4>
          <ul>
            <li>
              Krafträder (Zweiräder, auch mit Beiwagen) mit einem Hubraum von
              mehr als 50 cm3 und einer bauartbedingten Höchstgeschwindigkeit
              von mehr als 45 km/h. Leistung: maximal 35 kW. Verhältnis Leistung
              zu Leermasse: maximal 0,2 kW/kg.
            </li>

            <li>
              Mindestalter: <b>18</b>
            </li>

            <li>
              Geltungsdauer: <b>ohne Befristung</b>
            </li>
            <li>
              Vorbesitz erforderlich: <b>NEIN</b>
            </li>
            <li>
              Beinhaltet Klasse: <b>A1, AM</b>
            </li>
            <li>
              Sehvermögen: <b>Sehtest</b>
            </li>
            <li>
              Erste Hilfe: <b>Erste-Hilfe-Kurs</b>
            </li>
          </ul>

          <div className={styles["price-section"]}>
            <h3>Preisliste</h3>
            <ul>
              <li>
                <b>
                  Bei uns nur auf speziell Anfrage!{" "}
                  <a
                    className={styles["email-link"]}
                    href="mailto:info@fsheideteam.de"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    info@fsheideteam.de
                  </a>
                </b>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KlasseA2;
