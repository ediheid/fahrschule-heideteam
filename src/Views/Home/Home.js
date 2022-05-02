import React from "react";

import Slideshow from "../../Components/Slideshow/Slideshow";
import AboutSection from "./AboutSection";
import ExtraInfoSection from "./ExtraInfoSection";
import BerufsSection from "./BerufsSection";
import ContactSection from "./ContactSection";

import styles from "../Home/home.module.scss";

import car from "../Home/Static/sedan.png";
import motorcycle from "../Home/Static/motorcycle.png";
import truck from "../Home/Static/truck.png";
import bus from "../Home/Static/school-bus.png";
import traktor from "../Home/Static/traktor.png";

const Home = () => {
  return (
    <div className={styles["home-page-container"]}>
      {/* // ? Landing View section */}

      <section className={styles["landing-view-container"]}>
        <Slideshow />

        <div className={styles["overlay-container"]}>
          <div className={styles["circle-div"]}>
            <h2>Eure Fahrschule in Radeberg und Umgebung!</h2>

            {/* <button className={styles["more-button"]}>Mehr</button> */}
            {/* <div className={styles["smaller-circle"]}></div> */}
          </div>
        </div>

        {/* // ! Maybe make this 'continue' */}
        <div className={styles["landing-extra-content-container"]}>
          <div className={styles["icons-container"]}>
            {/* // ? Icons */}
            <div className={styles["icon-circle-containers"]}>
              <img
                className={styles["landing-icon"]}
                src={motorcycle}
                alt="Scooter icons created by Freepik - Flaticon - https://www.flaticon.com/free-icons/scooter"
              ></img>
            </div>

            <div className={styles["icon-circle-containers"]}>
              <img
                className={styles["landing-icon"]}
                src={car}
                alt="Car icons created by Freepik - Flaticon - https://www.flaticon.com/free-icons/car"
              ></img>
            </div>

            <div className={styles["icon-circle-containers"]}>
              <img
                className={styles["landing-icon"]}
                src={truck}
                alt="Truck icons created by Freepik - Flaticon - https://www.flaticon.com/free-icons/truck"
              ></img>
            </div>

            <div className={styles["icon-circle-containers"]}>
              <img
                className={styles["landing-icon"]}
                src={bus}
                alt="Bus icons created by Freepik - Flaticon - https://www.flaticon.com/free-icons/bus"
              ></img>
            </div>

            <div className={styles["icon-circle-containers"]}>
              <img
                className={styles["landing-icon"]}
                src={traktor}
                alt="Traktor icons created by Freepik - Flaticon - https://www.flaticon.com/free-icons/traktor"
              ></img>
            </div>
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
