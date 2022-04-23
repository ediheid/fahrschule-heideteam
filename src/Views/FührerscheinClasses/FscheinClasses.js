import React from "react";

import styles from "../FührerscheinClasses/fschein-classes.module.scss";

import pkw from "../FührerscheinClasses/Static/pkw.png";

const FscheinClasses = () => {
  return (
    <div className={styles["classes-page-container"]}>
      <div className={styles["class-container"]}>
        <div className={styles["img-container"]}>
          <img
            className={styles["class-img"]}
            alt="By JESHOOTS.com: https://www.pexels.com/photo/man-inside-vehicle-13861/"
            src={pkw}
          ></img>
        </div>
        <div className={styles["text-container"]}>Text box</div>
        Führerschein Classes will go here
      </div>
    </div>
  );
};

export default FscheinClasses;
