import React from "react";

import styles from "../FührerscheinClasses/fschein-classes.module.scss";

import pkw from "../FührerscheinClasses/Static/car2.png";
import motorcycle from "../FührerscheinClasses/Static/motorcycle.png";

const FscheinClasses = () => {
  return (
    <div className={styles["classes-page-container"]}>
      {/* // ? PKW */}

      <div className={styles["class-container"]}>
        <div className={styles["img-container"]}>
          <img
            className={styles["class-img"]}
            alt="White card hood"
            src={pkw}
          ></img>
        </div>
        <div className={styles["text-container"]}>Text box</div>
        Führerschein Classes will go here
      </div>

      {/* // ? Motorcycle */}

      <div className={styles["class-container"]}>
        <div className={styles["img-container"]}>
          <img
            className={styles["class-img"]}
            alt="White card hood"
            src={motorcycle}
          ></img>
        </div>
        <div className={styles["text-container"]}>Text box</div>
        Führerschein Classes will go here
      </div>
    </div>
  );
};

export default FscheinClasses;
