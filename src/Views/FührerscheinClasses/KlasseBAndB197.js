import React from "react";

import styles from "../FührerscheinClasses/fschein-classes.module.scss";

import B from "../FührerscheinClasses/Static/icon-b.png";

const KlasseB = () => {
  return (
    <section className={styles["class-section"]} id="klasse-b">
      <div className={styles["class-heading-circle"]}>
        <img
          className={styles["class-icons"]}
          src={B}
          alt="Car icons created by Freepik - Flaticon - https://www.flaticon.com/free-icons/car"
        ></img>
        <h2 className={styles["headings"]}>Klasse B / B197</h2>
      </div>

      <div className={styles["section-content-container"]}>
        <div className={styles["text-container"]}>
          <h4>
            Fahrzeugart Pkw (Schaltfahrzeuge und Automatik mit Schaltkompetenz)
          </h4>
          <ul>
            <li>
              Kraftfahrzeuge - ausgenommen Kraftfahrzeuge der Klassen AM, A1, A2
              und A - mit einer zulässigen Gesamtmasse von nicht mehr als 3.500
              kg, die zur Beförderung von nicht mehr als acht Personen außer dem
              Fahrzeugführer ausgelegt und gebaut sind.
            </li>

            <li>
              <b>Anhänger</b> dürfen mitgeführt werden, sofern:
            </li>

            <li className={styles["list-style-none"]}>
              die zulässige Gesamtmasse des Anhängers 750 kg nicht übersteigt
              oder
            </li>

            <li className={styles["list-style-none"]}>
              die zulässige Gesamtmasse der Kombination nicht mehr als 3500 kg
              beträgt.
            </li>

            <li>
              Mindestalter: <b>18</b>
            </li>

            <li>
              beim Begleiteten Fahren <b>17</b>
            </li>

            <li>
              Geltungsdauer: <b>ohne Befristung</b>
            </li>

            <li>
              Vorbesitz erforderlich: <b>NEIN</b>
            </li>
            <li>
              Beinhaltet Klasse: <b>AM, L</b>
            </li>
            <li>
              Sehvermögen: <b>Sehtest</b>
            </li>
            <li>
              Erste Hilfe: <b>Erste-Hilfe-Kurs</b>
            </li>

            <li>
              unsere Fahrzeuge: SKODA Fabia/Oktavia/ Karoq - Mitsubishi – VW T5
            </li>
          </ul>

          <div className={styles["price-section"]}>
            <h3>Preisliste</h3>
            <ul>
              <li>Grundbetrag: 350 €</li>
              <li>Übungsfahrt: 45 €</li>
              <li>Übungsfahrt (Automatik): 53 €</li>
              <li>
                Sonderfahrten (mind. 5X Überlandfahrt 4x autobahnfahrt
                3xNachtfahrt) pro 45 Minuten 50 €
              </li>

              <li>
                Sonderfahrten (mind. 5X Überlandfahrt 4x autobahnfahrt
                3xNachtfahrt) (Automatik) pro 45 Minuten 55 €
              </li>

              <br />
              <li>
                <b>Testfahrt B197 80 €</b>
              </li>
              <li>
                <b>Vorstellen zu Theoretischen Prüfung 50 €</b>
              </li>
              <li>
                <b>Vorstellen zur praktischen Prüfung 130 €</b>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KlasseB;
