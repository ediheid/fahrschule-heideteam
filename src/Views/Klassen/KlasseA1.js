import React from "react";

import styles from "../Klassen/fschein-classes.module.scss";

import A1 from "../Klassen/Static/icon-a1.png";

const KlasseA1 = () => {
  return (
    <section className={styles["class-section"]} id="klasse-a1">
      <div className={styles["class-heading-circle"]}>
        <img
          className={styles["class-icons"]}
          src={A1}
          alt="Motorcycle icons created by Freepik - Flaticon - https://www.flaticon.com/free-icons/motorcycle"
        ></img>
        <h2 className={styles["headings"]}>Klasse A1</h2>
      </div>

      <div className={styles["section-content-container"]}>
        <div className={styles["text-container"]}>
          <h4>Fahrzeugart Leichtkrafträder</h4>
          <ul>
            <li>
              Krafträder der Klasse A (Leichtkrafträder) mit einem Hubraum von
              nicht mehr als 125 cm3 und einer Nennleistung von nicht mehr als
              11 kW, Verhältnis Leistung zu Leermasse: maximal 0,1 kW / kg
            </li>
            <li>
              Dreirädrige Kraftfahrzeuge mit mehr als 50 cm3 und einer
              bauartbedingten Höchstgeschwindigkeit von mehr als 45 km/h mit
              einer Leistung bis 15 kW
            </li>
            <li>
              Mindestalter: <b>16</b>
            </li>

            <li>
              Geltungsdauer: <b>ohne Befristung</b>
            </li>
            <li>
              Vorbesitz erforderlich: <b>NEIN</b>
            </li>
            <li>
              Beinhaltet Klasse: <b>AM</b>
            </li>
            <li>
              Sehvermögen: <b>Sehtest</b>
            </li>
            <li>
              Erste Hilfe: <b>Erste-Hilfe-Kurs</b>
            </li>
            <li>
              Achtung die Ausbildung für die Schlüsselzahl B196 (A1 mit
              Vorbesitz B – verkürzte Ausbildung) bieten wir in unserer
              Fahrschule <b>nicht</b> an!
            </li>
          </ul>

          <div className={styles["price-section"]}>
            <h3>Preisliste</h3>
            <ul>
              <li>Grundbetrag: 350 €</li>
              <li>Übungsfahrt: 50 €</li>
              <li>
                Sonderfahrten (mind. 5X Überlandfahrt 4x autobahnfahrt
                3xNachtfahrt) pro 45 Minuten 58 €
              </li>

              <br />
              <li>
                <b>Vorstellen zu Theoretischen Prüfung 50 €</b>
              </li>
              <li>
                <b>Vorstellen zur praktischen Prüfung 145 €</b>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KlasseA1;
