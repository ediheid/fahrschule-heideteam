import React from "react";
import Zoom from "react-reveal/Bounce";
import { HashLink } from "react-router-hash-link";

import Slideshow from "../../Components/Slideshow/Slideshow";
import AboutSection from "./AboutSection";
import ExtraInfoSection from "./ExtraInfoSection";
import BerufsSection from "./BerufsSection";
import ContactSection from "./ContactSection";

import styles from "../Home/home.module.scss";

const Home = () => {
  return (
    <div className={styles["home-page-container"]}>
      {/* // ? Landing View section */}

      <section className={styles["landing-view-container"]}>
        <Slideshow />

        <div className={styles["overlay-container"]}>
          <div className={styles["circle-div"]}>
            <h2>
              {" "}
              {/* <Zoom cascade right> */}
              Eure Fahrschule in Radeberg und Umgebung!
              {/* </Zoom> */}
            </h2>

            {/* <div className={styles["smaller-circle"]}></div> */}
          </div>

          <div className={styles["intro-text-container"]}>
            {/* <h2 className={styles["landing-intro-heading"]}>
              Find out more about us!
            </h2> */}

            <button className={styles["button-1"]}>Explore</button>
            <button className={styles["button-2"]}>Klassen</button>
          </div>
        </div>

        <div className={styles["landing-extra-content-container"]}>
          {/* <div className={styles["intro-text-container"]}>
            <h2>Find out more about us!</h2>

            {/* <p>
              Unsere Fahrschule wurde 1990 in Radeberg/Dresden gegründet. Seid
              dem haben viele Fahrschüler in allen Fahrzeugklassen erfolgreich
              ihren Führerschein mit unserer Hilfe bestanden.
            </p>

            <p>
              Auch bei der Umschreibung ausländischer Führerscheine, Neu – und
              Wiedererteilungen helfen wir gern weiter. Ebenso, wenn es
              notwendig erscheint, die Fähigkeiten und Fertigkeiten des Führens
              von Fahrzeugen aufzufrischen bzw. wenn eine Beurteilung der
              Fahrkompetenz nötig wird.
            </p>
            <p>
              Des weiteren beschäftigen wir uns auch mit der Aus- und
              Weiterbildung von Berufskraftfahrern im Bereich des Güter-
              Personenverkehrs.
            </p> */}
          {/* </div> */}

          {/* <div className={styles["more-button-container"]}>
            <HashLink smooth to="/#about" className={styles["more-button"]}>
              Mehr
            </HashLink>
          </div> */}
        </div>
      </section>

      {/* // ? About Section*/}

      <AboutSection />

      {/* // ? Extra Info Section */}

      <ExtraInfoSection />

      {/* // ? Berufskraftfahrerqualifikation Section */}

      <BerufsSection />

      {/* // ? Contact Section */}

      <ContactSection />
    </div>
  );
};

export default Home;
