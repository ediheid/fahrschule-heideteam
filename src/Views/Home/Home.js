import React from "react";
import Zoom from "react-reveal/Bounce";
import { HashLink } from "react-router-hash-link";

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
import tractor from "../Home/Static/tractor.png";

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
          {/* // ! Button only visible on small devices */}
          <HashLink to="/#about" className={styles["more-button"]}>
            Mehr
          </HashLink>

          {/* // ! Icons only visible on large devices */}
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
                src={tractor}
                alt="Tractor icons created by Freepik - Flaticon - https://www.flaticon.com/free-icons/tractor"
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
