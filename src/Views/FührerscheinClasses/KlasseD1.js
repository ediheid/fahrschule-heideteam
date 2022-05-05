import React from "react";

import styles from "../FührerscheinClasses/fschein-classes.module.scss";

import D1 from "../FührerscheinClasses/Static/icon-d1.png";

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
              <b>Anhänger</b> mit einer zulässigen Gesamtmasse von{" "}
              <b>nicht mehr als 750 kg</b> dürfen mitgeführt werden.
            </li>

            <li>Mindestalter:</li>

            <li className={styles["list-style-none"]}>
              <b>21</b> Jahre bei Ausbildung zum Berufskraftfahrer.
            </li>

            <li className={styles["list-style-none"]}>
              <b>18</b> Jahre (nach vorheriger erfolgreicher
              medizinisch-psychologischer Untersuchung). Außerdem muss der
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
                <b>Ausbildung bei uns nur auf spezielle Anfrage!</b>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KlasseD1;
