import React from "react";

import Slideshow from "../../Components/Slideshow/Slideshow";

import styles from "../Home/home.module.scss";

const Home = () => {
  return (
    <div className={styles["home-page-container"]}>
      <div className={styles["landing-view-container"]}>
        <Slideshow />
        <div className={styles["landing-view-text-area"]}>
          {" "}
          This will be the home page text
        </div>
      </div>

      <div className={styles["about-section"]}>About section</div>
    </div>
  );
};

export default Home;
