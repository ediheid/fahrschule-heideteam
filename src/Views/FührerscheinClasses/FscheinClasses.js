import React from "react";
import { HashLink } from "react-router-hash-link";

import SubMenu from "./SubMenu";

import styles from "../FührerscheinClasses/fschein-classes.module.scss";

// Card Components
import PkwCard from "./PkwCard";
import PkwAnhaengerCard from "./PkwAnhaengerCard";
import MotorradCard from "./MotorradCard";
import LkwCard from "./LkwCard";
import BusCard from "./BusCard";
import TraktorCard from "./TraktorCard";

// Icons
import A from "../FührerscheinClasses/Static/icon-a-v3.png";

// Every second card has the image to the right
const FscheinClasses = () => {
  return (
    <div className={styles["classes-page-container"]}>
      {/* // Submenu with hashlinks to class sections */}
      <SubMenu />

      <section className={styles["class-section"]}>
        <div className={styles["class-heading-circle"]}>
          <img
            className={styles["class-icons"]}
            src={A}
            alt="Motorcycle icons created by Freepik - Flaticon - https://www.flaticon.com/free-icons/motorcycle"
          ></img>
          <h2 className={styles["headings"]}>Klasse A</h2>
        </div>

        <div className={styles["section-content-container"]}>
          <div className={styles["text-container"]}>
            <h4> Fahrzeugart Schwere Krafträder</h4>
            <ul>
              <li>
                <b>„Schwere“ Krafträder </b> (Zweiräder, auch mit Beiwagen) mit
                einem Hubraum von mehr als 50 cm3 und einer bauartbedingten
                Höchstgeschwindigkeit von mehr als 45 km/h
              </li>
              <li>
                <b>Dreirädrige Kraftfahrzeuge</b> mit einer Motorleistung von
                mehr als 15 kW Mindestalter: <b>24</b> Jahre
              </li>
              <li>
                <b>20</b> Jahre nach mindestens zweijährigem Vorbesitz der
                Klasse A2
              </li>
              <li>
                <b>21</b> Jahre für dreirädrige Kraftfahrzeuge der Klasse A
              </li>
              <li>
                Geltungsdauer: <b>ohne Befristung</b>
              </li>
              <li>
                Vorbesitz erforderlich: <b>NEIN</b>
              </li>
              <li>
                Beinhaltet Klasse: <b>A2, A1, AM</b>
              </li>
              <li>
                Sehvermögen: <b>Sehtest</b>
              </li>
              <li>
                Erste Hilfe: <b>Erste-Hilfe-Kurs</b>
              </li>
              <li>
                <b>
                  Bei uns lernen Motorradfahrer von erfahrenen Motorradfahrern.
                </b>
              </li>
            </ul>

            <div className={styles["price-section"]}>
              <h3>Preisliste</h3>
              <ul>
                <li>Grundbetrag: 350 €</li>
                <li>Übungsfahrt: 60 €</li>
                <li>
                  Sonderfahrten (mind. 5X Überlandfahrt 4x autobahnfahrt
                  3xNachtfahrt) pro 45 Minuten 70 €
                </li>

                <br />
                <li>
                  <b>Vorstellen zu Theoretischen Prüfung 50 €</b>
                </li>
                <li>
                  <b>Vorstellen zur praktischen Prüfung 160 €</b>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* // ? PKW */}

      {/* <PkwCard /> */}

      {/* // ? PKW PLUS */}
      {/* // ! Right */}
      {/* // Todo: Need new image */}
      {/* <PkwAnhaengerCard /> */}

      {/* // ? Motorcycle */}
      {/* <MotorradCard /> */}

      {/* // ? LKW */}
      {/* // ! Right */}
      {/* <LkwCard /> */}

      {/* // ? Bus */}
      {/* // Todo: Need new image */}
      {/* <BusCard /> */}

      {/* // ? Traktor */}
      {/* // ! Right */}
      {/* <TraktorCard /> */}
    </div>
  );
};

export default FscheinClasses;
