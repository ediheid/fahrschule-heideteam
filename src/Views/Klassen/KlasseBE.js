import React from "react";

import styles from "../Klassen/fschein-classes.module.scss";

import BE from "../Klassen/Static/icon-be.png";

const KlasseBE = () => {
  return (
    <section className={styles["class-section"]} id="klasse-be">
      <div className={styles["class-heading-circle"]}>
        <img
          className={styles["class-icons"]}
          src={BE}
          alt="Trailer icons created by Freepik - Flaticon - https://www.flaticon.com/free-icons/trailer"
        ></img>
        <h2 className={styles["headings"]}>Klasse BE</h2>
      </div>

      <div className={styles["section-content-container"]}>
        <div className={styles["text-container"]}>
          <h4>Fahrzeugart Pkw oder leichter Lkw und Anhänger</h4>
          <ul>
            <li>
              Kombinationen aus Kraftfahrzeugen der Klasse B (Pkw oder leichter
              Lkw) und Anhänger mit einer zulässigen Gesamtmasse von mehr als
              750 kg und einer zulässigen Gesamtmasse der Kombination von mehr
              als 3.500 kg Die zulässige Gesamtmasse des Anhängers ist auf 3.500
              kg begrenzt.
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
              Vorbesitz erforderlich: <b>Ja, Klasse B</b>
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

            <li>
              Wir bieten die BE auf einem Fahrzeug VW T5 (<b>Schaltung</b>) +
              Anhänger an.
            </li>

            <li>
              <b>ACHTUNG</b> – die „Klasse B 96“ bieten wir <b>nicht</b> zur
              Ausbildung an! Hierbei handelt es sich nicht um eine
              Führerscheinklasse sondern nur um die Eintragung einer
              Schlüsselzahl!
            </li>
          </ul>

          <div className={styles["price-section"]}>
            <h3>Preisliste</h3>
            <ul>
              <li>Grundbetrag: 100 €</li>
              <li>Übungsfahrt: 48 €</li>

              <li>
                Sonderfahrten (mind. 3X Überlandfahrt 1x Autobahnfahrt
                1xNachtfahrt) pro 45 Minuten 55 €
              </li>

              <br />

              <li>
                <b>Vorstellen zu Theoretischen Prüfung (entfällt)</b>
              </li>
              <li>
                <b>Vorstellen zur praktischen Prüfung 140 €</b>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KlasseBE;
