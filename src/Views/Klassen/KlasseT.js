import React from "react";

import styles from "../Klassen/fschein-classes.module.scss";

import T from "../Klassen/Static/icon-t.png";

const KlasseT = () => {
  return (
    <section className={styles["class-section"]} id="klasse-t">
      <div className={styles["class-heading-circle"]}>
        <img
          className={styles["class-icons"]}
          src={T}
          alt="Trailer icons created by Freepik - Flaticon - https://www.flaticon.com/free-icons/trailer"
        ></img>
        <h2 className={styles["headings"]}>Klasse T</h2>
      </div>

      <div className={styles["section-content-container"]}>
        <div className={styles["text-container"]}>
          <h4>Traktorführerschein</h4>
          <ul>
            <li>
              Fahrzeugart{" "}
              <b>
                Landwirtschaftliche Zugmaschinen über 40 km/h bis 60 km/h;
                landwirtschaftliche, selbstfahrende Arbeitsmaschinen oder
                selbstfahrende Futtermischwagen
              </b>
              .
            </li>

            <li className={styles["list-style-none"]}>
              a) <b>Zugmaschinen</b> mit einer bbH von nicht mehr als 60 km/h,
            </li>

            <li className={styles["list-style-none"]}>
              b){" "}
              <b>
                selbstfahrende Arbeitsmaschinen oder selbstfahrende
                Futtermischwagen
              </b>{" "}
              mit einer bbH von nicht mehr als 40 km/h, auch mit Anhänger.
            </li>

            <li>
              <b>Bedingung:</b> Beide Fahrzeugarten müssen nach ihrer Bauart für
              die Verwendung für land- oder forstwirtschaftliche Zwecke bestimmt
              sein und für solche Zwecke eingesetzt werden.
            </li>

            <li>
              <b>Altersstufung:</b> Die Klasse T wird vor Vollendung des 18.
              Lebensjahres nur für Zugmaschinen mit einer bbH von nicht mehr als
              40 km/h erteilt.
            </li>

            <li>Mindestalter:</li>

            <li className={styles["sub-list"]}>
              {" "}
              - <b>16</b> für bbH 40 km/h
            </li>

            <li className={styles["sub-list"]}>
              {" "}
              - <b>18</b> für bbH 60 km/h
            </li>

            <li>
              Geltungsdauer: <b>ohne Befristung</b>
            </li>

            <li>
              Vorbesitz erforderlich: <b>NEIN</b>
            </li>

            <li>
              Beinhaltet Klasse: <b>L, AM</b>
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
              <li>
                <b>
                  Ausbildung bei uns nur auf speziell Anfrage!{" "}
                  <a
                    className={styles["email-link"]}
                    href="mailto:j.seeberger@fsheideteam.de"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    (j.seeberger@fsheideteam.de)
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

export default KlasseT;
