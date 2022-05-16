import React from "react";

import styles from "../FührerscheinClasses/fschein-classes.module.scss";

import C from "../FührerscheinClasses/Static/icon-c.png";

const KlasseC = () => {
  return (
    <section className={styles["class-section"]} id="klasse-c">
      <div className={styles["class-heading-circle"]}>
        <img
          className={styles["class-icons"]}
          src={C}
          alt="Truck icons created by Freepik - Flaticon - https://www.flaticon.com/free-icons/truck"
        ></img>
        <h2 className={styles["headings"]}>Klasse C</h2>
      </div>

      <div className={styles["section-content-container"]}>
        <div className={styles["text-container"]}>
          <h4>Fahrzeugart Schwere Lkw</h4>
          <ul>
            <li>
              Kraftfahrzeuge - ausgenommen Kraftfahrzeuge der Klassen AM, A1, A2
              und A - mit einer zulässigen Gesamtmasse von mehr als 3.500 kg,
              die zur Beförderung von nicht mehr als acht Personen außer dem
              Fahrzeugführer ausgelegt und gebaut sind.
            </li>

            <li>
              <b>Anhänger</b> mit einer zulässigen Gesamtmasse von nicht mehr
              als 750 kg dürfen mitgeführt werden.
            </li>

            <li>Mindestalter:</li>

            <li className={styles["list-style-disc"]}>
              <b>21</b> Jahre
            </li>

            <li className={styles["list-style-disc"]}>
              <b>18</b> Jahre bei Grundqualifikation §4 Abs. 1 Nr. 1 BKrFQG oder
              Berufsaubildung
            </li>

            <li>
              Geltungsdauer: <b>befristet auf 5 Jahre</b>
            </li>

            <li>
              Vorbesitz erforderlich: <b>Ja, Klasse B</b>
            </li>
            <li>
              Beinhaltet Klasse: <b>C1</b>
            </li>
            <li>
              Sehvermögen: <b>Augenärztliches Zeugnis/Gutachten</b>
            </li>
            <li>
              Erste Hilfe: <b>Erste-Hilfe-Kurs</b>
            </li>

            <li>
              Sonstige Unterlagen: <b>Ärztliches Zeugnis</b>
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
                  >
                    (w.franke@fsheideteam.de)
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

export default KlasseC;
