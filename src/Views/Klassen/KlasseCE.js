import React from "react";

import styles from "../Klassen/fschein-classes.module.scss";

import CE from "../Klassen/Static/icon-ce.png";

const KlasseCE = () => {
  return (
    <section className={styles["class-section"]} id="klasse-ce">
      <div className={styles["class-heading-circle"]}>
        <img
          className={styles["class-icons"]}
          src={CE}
          alt="Truck icons created by Freepik - Flaticon - https://www.flaticon.com/free-icons/truck"
        ></img>
        <h2 className={styles["headings"]}>Klasse CE</h2>
      </div>

      <div className={styles["section-content-container"]}>
        <div className={styles["text-container"]}>
          <h4>Fahrzeugart Lastzüge</h4>
          <ul>
            <li>
              Kombinationen aus Kraftfahrzeugen der Klasse C und Anhängern mit
              mehr als 750 kg zulässiger Gesamtmasse.
            </li>

            <li>Mindestalter:</li>

            <li className={styles["sub-list"]}>
              {" "}
              - <b>21</b> Jahre
            </li>

            <li className={styles["sub-list"]}>
              {" "}
              - <b>18</b> Jahre bei Grundqualifikation §4 Abs. 1 Nr. 1 BKrFQG
              oder Berufsaubildung
            </li>

            <li>
              Geltungsdauer: <b>befristet auf 5 Jahre</b>
            </li>

            <li>
              Vorbesitz erforderlich: <b>Ja, Klasse C</b>
            </li>

            <li>Beinhaltet Klasse:</li>

            <li className={styles["sub-list"]}>
              {" "}
              - <b>C1E, BE, T;</b>
            </li>
            <li className={styles["sub-list"]}>
              {" "}
              - <b>D1E bei Besitz von Klasse D1;</b>
            </li>
            <li className={styles["sub-list"]}>
              {" "}
              - <b>DE bei Besitz von Klasse D</b>
            </li>

            <li>
              Sehvermögen: <b>augenärztliches Zeugnis/Gutachten</b>
            </li>
            <li>
              Erste Hilfe: <b>Erste-Hilfe-Kurs</b>
            </li>

            <li>
              Sonstige Unterlagen: <b>ärztliches Zeugnis</b>
            </li>
          </ul>

          <div className={styles["price-section"]}>
            <h3>Preisliste</h3>
            <ul>
              <li>
                <b>
                  Ausbildung bei uns nur auf speziell Anfrage!{" "}
                  <a
                    className={styles["email-link"]}
                    href="mailto:w.franke@fsheideteam.de"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    w.franke@fsheideteam.de
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

export default KlasseCE;
