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
        </div>

        <div className={styles["landing-extra-content-container"]}>
          {/* // Todo: About text to be styled */}
          <div className={styles["intro-text-container"]}>
            <p>
              Unsere Fahrschule wurde 1990 in Radeberg/Dresden gegründet. Seid
              dem haben viele Fahrschüler in allen Fahrzeugklassen erfolgreich
              ihren Führerschein mit unserer Hilfe bestanden.
            </p>

            {/* // * This paragraph is in the about us sub section on the leanding page */}
            {/* <p>
              Unser Team setzt sich zusammen aus einer Reihe von älteren
              Kollegen, mit sehr langer Berufserfahrung und jungen Kollegen,
              welche die notwendige Frische ins Team mit bringen.
            </p> */}
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
            </p>
            {/* <p>
              Wie es unser Logo erkennen lässt - Mit uns haben Sie den Bogen
              raus!
            </p> */}
          </div>

          {/* // ! Button only visible on small devices */}
          <div className={styles["more-button-container"]}>
            <HashLink to="/#about" className={styles["more-button"]}>
              Mehr
            </HashLink>
          </div>
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
