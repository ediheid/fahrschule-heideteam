import React from "react";

import styles from "../Klassen/fschein-classes.module.scss";

import D from "../Klassen/Static/icon-d.png";

const KlasseD = () => {
  return (
    <section className={styles["class-section"]} id="klasse-d">
      <div className={styles["class-heading-circle"]}>
        <img
          className={styles["class-icons"]}
          src={D}
          alt="Trailer icons created by Freepik - Flaticon - https://www.flaticon.com/free-icons/trailer"
        ></img>
        <h2 className={styles["headings"]}>Klasse D</h2>
      </div>

      <div className={styles["section-content-container"]}>
        <div className={styles["text-container"]}>
          <h4>Fahrzeugart Große Busse</h4>
          <ul>
            <li>
              <b>Kraftfahrzeuge</b> - ausgenommen Kraftfahrzeuge der Klassen AM,
              A1, A2 und A - die zur
              <b> Beförderung von mehr als acht Personen</b> außer dem
              Fahrzeugführer ausgelegt und gebaut sind.
            </li>

            <li>
              <b>Anhänger</b> mit einer zulässigen Gesamtmasse von{" "}
              <b>nicht mehr als 750 kg</b> dürfen mitgeführt werden.
            </li>

            <li>Mindestalter:</li>

            <li className={styles["sub-list"]}>
              {" "}
              - <b>24</b> Jahre
            </li>

            <li className={styles["sub-list"]}>
              {" "}
              - <b>23</b> Jahre nach beschleunigter Grundqualifikation.
            </li>

            <li className={styles["sub-list"]}>
              {" "}
              - <b>21</b> Jahre nach erfolgter Grundqualifikation (umfangreiche
              Prüfung ` bei der IHK) oder nach beschleunigter Grundqualifikation
              (dann auf ` Linienverkehr bis 50 Kilometer Linienlänge beschränkt)
            </li>

            <li className={styles["sub-list"]}>
              {" "}
              - <b>20</b> Jahre während oder nach Abschluss der Berufsausbildung
              zum ` Berufskraftfahrer oder Fachkraft im Fahrbetrieb
            </li>

            <li className={styles["sub-list"]}>
              {" "}
              - <b>18</b> Jahre während oder nach Abschluss der Berufsausbildung
              zum ` Berufskraftfahrer oder Fachkraft im Fahrbetrieb, auf
              Linienverkehr bis ` 50 Kilometer Linienlänge beschränkt
            </li>

            <li className={styles["sub-list"]}>
              {" "}
              - <b>18</b> Jahre während oder nach Abschluss der Berufsausbildung
              zum ` Berufskraftfahrer oder Fachkraft im Fahrbetrieb ohne
              Fahrgäste.
            </li>

            <li>
              Geltungsdauer: <b>befristet auf 5 Jahre</b>
            </li>

            <li>
              Vorbesitz erforderlich: <b>Ja, Klasse B</b>
            </li>

            <li>
              Beinhaltet Klasse: <b>D1</b>
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
                  DE- Ausbildung auf Anfrage möglich.{" "}
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

export default KlasseD;
