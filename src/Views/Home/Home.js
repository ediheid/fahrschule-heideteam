import React from "react";

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

      <div className={styles["circle-div"]}>
        <h2>Eure Fahrschule in Radeberg und Umgenbung!</h2>
      </div>

      <div className={styles["smaller-circle"]}></div>
      <section className={styles["landing-view-container"]}>
        <Slideshow />

        {/* // ! Maybe make this 'continue' */}
        {/* <button className={styles["more-button"]}>Mehr</button> */}
        {/* </div> */}
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
