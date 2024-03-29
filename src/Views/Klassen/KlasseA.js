import React from "react";

import styles from "../Klassen/fschein-classes.module.scss";

import A from "../Klassen/Static/icon-a.png";

const KlasseA = () => {
  return (
    <section className={styles["class-section"]} id="klasse-a">
      <div className={styles["class-heading-circle"]}>
        <img
          className={styles["class-icons"]}
          src={A}
          alt="Motorcycle icons created by Freepik - Flaticon - https://www.flaticon.com/free-icons/motorcycle"
        ></img>
        <h2 className={styles["headings"]}>Klasse A</h2>
      </div>

      <div className={styles["section-content-container"]}>
        <div className={styles["text-container"]}>
          <h4> Fahrzeugart Schwere Krafträder</h4>
          <ul>
            <li>
              <b>„schwere“ Krafträder </b> (Zweiräder, auch mit Beiwagen) mit
              einem Hubraum von mehr als 50 cm3 und einer bauartbedingten
              Höchstgeschwindigkeit von mehr als 45 km/h
            </li>
            <li>
              <b>dreirädrige Kraftfahrzeuge</b> mit einer Motorleistung von mehr
              als 15 kW
            </li>

            <li>Mindestalter:</li>

            <li className={styles["sub-list"]}>
              - <b>24</b> Jahre
            </li>

            <li className={styles["sub-list"]}>
              - <b>20</b> Jahre nach mindestens zweijährigem Vorbesitz der
              Klasse A2
            </li>

            <li className={styles["sub-list"]}>
              - <b>21</b> Jahre für dreirädrige Kraftfahrzeuge der Klasse A
            </li>

            <li>
              Geltungsdauer: <b>ohne Befristung</b>
            </li>
            <li>
              Vorbesitz erforderlich: <b>NEIN</b>
            </li>
            <li>
              Beinhaltet Klasse: <b>A2, A1, AM</b>
            </li>
            <li>
              Sehvermögen: <b>Sehtest</b>
            </li>
            <li>
              Erste Hilfe: <b>Erste-Hilfe-Kurs</b>
            </li>
            <li>
              Bei uns lernen Motorradfahrer von erfahrenen Motorradfahrern.
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

export default KlasseA;
