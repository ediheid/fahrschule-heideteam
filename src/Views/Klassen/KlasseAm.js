import React from "react";

import styles from "../Klassen/fschein-classes.module.scss";

import Am from "../Klassen/Static/icon-am.png";

const KlasseAM = () => {
  return (
    <section className={styles["class-section"]} id="klasse-am">
      <div className={styles["class-heading-circle"]}>
        <img
          className={styles["class-icons"]}
          src={Am}
          alt="Moped icons created by Freepik - Flaticon - https://www.flaticon.com/free-icons/moped"
        ></img>
        <h2 className={styles["headings"]}>Klasse AM</h2>
      </div>

      <div className={styles["section-content-container"]}>
        <div className={styles["text-container"]}>
          <h4>Zweirädrige und Dreirädrige Kraftfahrzeuge</h4>
          <ul>
            <li>
              Leichte zweirädrige Kraftfahrzeuge der Klasse L1e-B nach Artikel 4
              Absatz 2 Buchstabe a der Verordnung (EU) Nr. 168/2013 des
              Europäischen Parlaments und des Rates vom 15. Januar 2013 über die
              Genehmigung und Marktüberwachung von zwei- oder dreirädrigen und
              vierrädrigen Fahrzeugen mit:
            </li>

            <li className={styles["sub-list"]}> - Hubraum max. 50 cm3</li>

            <li className={styles["sub-list"]}> - bbH max. 45 km/h</li>

            <li className={styles["sub-list"]}> - Leistung max. 4 kW</li>

            <li>
              Dreirädrige Kleinkrafträder der Klasse L2e nach Artikel 4 Absatz 2
              Buchstabe b der Verordnung (EU) Nr. 168/2013 des Europäischen
              Parlaments und des Rates vom 15. Januar 2013 über die Genehmigung
              und Marktüberwachung von zwei- oder dreirädrigen und vierrädrigen
              Fahrzeugen mit:
            </li>

            <li className={styles["sub-list"]}>
              {" "}
              - Hubraum max. 50 cm3 bei Fremdzündungsmotor
            </li>

            <li className={styles["sub-list"]}>
              {" "}
              - Hubraum max. 500 cm3 bei Selbstzündungsmotor
            </li>

            <li className={styles["sub-list"]}> - bbH max. 45 km/h</li>

            <li className={styles["sub-list"]}> - Leistung max. 4 kW</li>

            <li className={styles["sub-list"]}> - Leermasse max. 270 kg</li>

            <li className={styles["sub-list"]}>
              {" "}
              - nicht mehr als 2 Sitzplätze
            </li>

            <li>
              Leichte vierrädrige Kraftfahrzeuge der Klasse L6e nach Artikel 4
              Absatz 2 Buchstabe f der Verordnung (EU) Nr. 168/2013 des
              Europäischen Parlaments und des Rates vom 15. Januar 2013 über die
              Genehmigung und Marktüberwachung von zwei- oder dreirädrigen und
              vierrädrigen Fahrzeugen mit:
            </li>

            <li className={styles["sub-list"]}>
              {" "}
              - Hubraum max. 50 cm3 bei Fremdzündungsmotor
            </li>

            <li className={styles["sub-list"]}>
              {" "}
              - Hubraum max. 500 cm3 bei Selbstzündungsmotor
            </li>

            <li className={styles["sub-list"]}> - bbH max. 45 km/h</li>

            <li className={styles["sub-list"]}> - Leermasse max. 425 kg</li>

            <li className={styles["sub-list"]}>
              {" "}
              - nicht mehr als 2 Sitzplätze
            </li>

            <li className={styles["sub-list"]}> - Leistung max. 6 kW</li>

            <li className={styles["sub-list"]}>
              {" "}
              - Leistung max. 4 kW bei Straßen-Quads
            </li>

            <hr className={styles["divider"]} />

            <li>
              Mindestalter: <b>15</b>
            </li>

            <li>
              Geltungsdauer: <b>ohne Befristung</b>
            </li>

            <li>
              Vorbesitz erforderlich: <b>NEIN</b>
            </li>

            <li>
              Beinhaltet Klasse: <b>keine</b>
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
              <li>Grundbetrag: 350 €</li>
              <li>Übungsfahrt: 50 €</li>

              <br />
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

export default KlasseAM;
