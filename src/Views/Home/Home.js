import React from "react";

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
        <div className={styles["heading-content-container"]}>
          <h2> Eure Fahrschule in Radeberg und Umgebung!</h2>

          <div className={styles["button-container"]}>
            <HashLink
              smooth
              to="/#about"
              className={styles["more-about-button"]}
            >
              Explore
            </HashLink>
          </div>
        </div>

        <Slideshow />
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
