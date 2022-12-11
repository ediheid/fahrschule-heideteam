import React from "react";

import styles from "../Klassen/fschein-classes.module.scss";

import B from "../Klassen/Static/icon-b.png";

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

            <li className={styles["sub-list"]}>
              {" "}
              - die zulässige Gesamtmasse des Anhängers 750 kg nicht übersteigt
              oder
            </li>

            <li className={styles["sub-list"]}>
              {" "}
              - die zulässige Gesamtmasse der Kombination nicht mehr als 3500 kg
              beträgt.
            </li>

            <li>
              Mindestalter: <b>18</b>
            </li>

            <li>
              beim Begleiteten Fahren: <b>17</b>
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
              unsere Fahrzeuge: SKODA Fabia/ Oktavia/ Karoq - MITSUBISHI – SEAT
              - VW T5
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

export default KlasseB;
