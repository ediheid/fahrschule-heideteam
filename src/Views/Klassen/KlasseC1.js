import React from "react";

import styles from "../Klassen/fschein-classes.module.scss";

import C1 from "../Klassen/Static/icon-c1.png";

const KlasseC1 = () => {
  return (
    <section className={styles["class-section"]} id="klasse-c1">
      <div className={styles["class-heading-circle"]}>
        <img
          className={styles["class-icons"]}
          src={C1}
          alt="Truck icons created by Freepik - Flaticon - https://www.flaticon.com/free-icons/truck"
        ></img>
        <h2 className={styles["headings"]}>Klasse C1</h2>
      </div>

      <div className={styles["section-content-container"]}>
        <div className={styles["text-container"]}>
          <h4>Fahrzeugart Mittlere Lkw</h4>
          <ul>
            <li>
              Kraftfahrzeuge - ausgenommen Kraftfahrzeuge der Klassen AM, A1, A2
              und A - mit einer zulässigen Gesamtmasse von
              <b> mehr als 3.500 kg aber nicht mehr als 7.500 kg</b>, die zur
              Beförderung von nicht mehr als acht Personen außer dem
              Fahrzeugführer ausgelegt und gebaut sind.
            </li>

            <li>
              <b>Anhänger</b> mit einer zulässigen Gesamtmasse von nicht mehr
              als 750 kg dürfen mitgeführt werden.
            </li>

            <li>
              Mindestalter: <b>18</b>
            </li>

            <li>
              Geltungsdauer: <b>5 Jahre</b>
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

export default KlasseC1;
