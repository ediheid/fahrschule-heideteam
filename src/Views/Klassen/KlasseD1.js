import React from "react";

import styles from "../Klassen/fschein-classes.module.scss";

import D1 from "../Klassen/Static/icon-d1.png";

const KlasseD1 = () => {
  return (
    <section className={styles["class-section"]} id="klasse-d1">
      <div className={styles["class-heading-circle"]}>
        <img
          className={styles["class-icons"]}
          src={D1}
          alt="Trailer icons created by Freepik - Flaticon - https://www.flaticon.com/free-icons/trailer"
        ></img>
        <h2 className={styles["headings"]}>Klasse D1</h2>
      </div>

      <div className={styles["section-content-container"]}>
        <div className={styles["text-container"]}>
          <h4>Fahrzeugart Kleine Busse</h4>
          <ul>
            <li>
              Kraftfahrzeuge - ausgenommen Kraftfahrzeuge der Klassen AM, A1, A2
              und A - die zur Beförderung von{" "}
              <b>mehr als 8 aber nicht mehr als 16 Personen</b> außer dem
              Fahrzeugführer ausgelegt und gebaut und nicht länger als 8 Meter
              sind.
            </li>

            <li>
              <b>Anhänger</b> mit einer zulässigen Gesamtmasse von nicht mehr
              als 750 kg dürfen mitgeführt werden.
            </li>

            <li>Mindestalter:</li>

            <li className={styles["sub-list"]}>
              {" "}
              - <b>21</b>, bei Ausbildung zum Berufskraftfahrer.
            </li>

            <li className={styles["sub-list"]}>
              {" "}
              - <b>18</b> (nach vorheriger erfolgreicher
              medizinisch-psychologischer Untersuchung) Außerdem muss der
              Bewerber seit mindestens einem Jahr die Fahrerlaubnis Klasse B
              besitzen. Von der Fahrerlaubnis darf nur bei Fahrten in
              Deutschland Gebrauch gemacht werden, wenn diese im Rahmen der
              Berufsausbildung stattfinden.
            </li>

            <li>
              Geltungsdauer: <b>befristet auf 5 Jahre</b>
            </li>

            <li>
              Vorbesitz erforderlich: <b>Ja, Klasse B</b>
            </li>

            <li>
              Beinhaltet Klasse: <b>keine</b>
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

export default KlasseD1;
