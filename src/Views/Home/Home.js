import React from "react";

import Slideshow from "../../Components/Slideshow/Slideshow";
import AboutSection from "./AboutSection";
import ExtraInfoSection from "./ExtraInfoSection";

import styles from "../Home/home.module.scss";

const Home = () => {
  return (
    <div className={styles["home-page-container"]}>
      {/* // ? Landing View section */}

      <section className={styles["landing-view-container"]}>
        <Slideshow />
        <div className={styles["landing-view-text-area"]}>
          {/* <div className={styles["header-text-container"]}>
            <span className={`${styles["header-text"]} ${styles["text-1"]}`}>
              eure Fahrschule in
            </span>
            <span className={`${styles["header-text"]} ${styles["text-2"]}`}>
              Radeberg und Umgebung
            </span>
          </div> */}

          {/* // ! Maybe make this 'continue' */}
          <button className={styles["more-button"]}>Mehr</button>
        </div>
      </section>

      {/* // ? About Section*/}

      <AboutSection />

      {/* // ? Extra Info Section */}

      <ExtraInfoSection />
    </div>
  );
};

export default Home;
