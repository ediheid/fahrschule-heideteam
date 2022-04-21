import React from "react";

import styles from "../Home/home.module.scss";

import medal from "../Home/Static/medal.png";
import euro from "../Home/Static/euro.png";
import drivingSchool from "../Home/Static/driving-school.png";
import smile from "../Home/Static/smile.png";

const ExtraInfoSection = () => {
  return (
    <section className={styles["extra-info-section"]}>
      <h2 className={`${styles["headings"]} ${styles["extra-info-heading"]}`}>
        How we can help you achieve your driving goals
      </h2>
      <div className={styles["extra-info-content"]}>
        {/* // ? Box 1 */}
        <div className={styles["info-boxes"]}>
          <div className={styles["info-icon"]}>
            <img
              src={medal}
              alt="Medal icons created by Freepik - Flaticon - https://www.flaticon.com/free-icons/medal"
            ></img>
          </div>
          <div className={styles["info-text"]}>
            <h4>30+ Years of expertise</h4>
          </div>
        </div>

        {/* // ? Box 2 */}
        <div className={styles["info-boxes"]}>
          <div className={styles["info-icon"]}>
            <img
              src={euro}
              alt="Euro icons created by Kiranshastry - Flaticon - https://www.flaticon.com/free-icons/euro"
            ></img>
          </div>
          <div className={styles["info-text"]}>
            <h4>Competitive Prices</h4>
          </div>
        </div>

        {/* // ? Box 3 */}
        <div className={styles["info-boxes"]}>
          <div className={styles["info-icon"]}>
            <img
              src={drivingSchool}
              alt=" Learn icons created by Freepik - Flaticon - https://www.flaticon.com/free-icons/driver"
            ></img>
          </div>
          <div className={styles["info-text"]}>
            <h4>Theory?</h4>
          </div>
        </div>

        {/* // ? Box 4 */}
        <div className={styles["info-boxes"]}>
          <div className={styles["info-icon"]}>
            <img
              src={smile}
              alt="Smile icons created by Freepik - Flaticon- https://www.flaticon.com/free-icons/smile"
            ></img>
          </div>
          <div className={styles["info-text"]}>
            <h4>7000+ Happy Students</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraInfoSection;
