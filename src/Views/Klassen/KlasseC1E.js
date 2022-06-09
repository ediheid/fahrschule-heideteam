import React from "react";

import styles from "../Klassen/fschein-classes.module.scss";

import C1E from "../Klassen/Static/icon-c1e.png";

const KlasseC1E = () => {
  return (
    <section className={styles["class-section"]} id="klasse-c1e">
      <div className={styles["class-heading-circle"]}>
        <img
          className={styles["class-icons"]}
          src={C1E}
          alt="Truck icons created by Freepik - Flaticon - https://www.flaticon.com/free-icons/truck"
        ></img>
        <h2 className={styles["headings"]}>Klasse C1E</h2>
      </div>

      <div className={styles["section-content-container"]}>
        <div className={styles["text-container"]}>
          <h4>Fahrzeugart Mittlere Lastzüge bis max. 12.000 kg zG</h4>
          <ul>
            <li>
              <b>
                Kombinationen aus Kraftfahrzeugen der Klasse C1 und Anhänger
              </b>{" "}
              mit mehr als 750 kg zulässiger Gesamtmasse.
            </li>

            <li>
              <b>
                Kombination aus einem Kraftfahrzeug der Klasse B und einem
                Anhänger,
              </b>
              dessen zulässige Gesamtmasse größer ist als 3.500 kg.
            </li>

            <li>
              {" "}
              <b>
                Die zulässige Gesamtmasse der Kombination darf jeweils nicht
                mehr als 12.000 kg betragen!{" "}
              </b>
            </li>

            <li>
              Mindestalter: <b>18</b>
            </li>

            <li>
              Geltungsdauer: <b>5 Jahre</b>
            </li>

            <li>
              Vorbesitz erforderlich: <b>Ja, Klasse C1</b>
            </li>
            <li>
              Beinhaltet Klasse: <b>BE; D1E bei Besitz von D1</b>
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

export default KlasseC1E;
