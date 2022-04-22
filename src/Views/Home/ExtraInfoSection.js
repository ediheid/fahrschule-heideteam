import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "../Home/home.module.scss";

import medal from "../Home/Static/medal.png";
import euro from "../Home/Static/euro.png";
import drivingSchool from "../Home/Static/driving-school.png";

// AOS
import Aos from "aos";
import "aos/dist/aos.css";

const ExtraInfoSection = () => {
  // AOS functionality
  useEffect(() => {
    Aos.init({ duration: 1000, once: false });
  }, []);

  return (
    <section className={styles["extra-info-section"]}>
      <h2
        data-aos="fade-up"
        className={`${styles["headings"]} ${styles["extra-info-heading"]}`}
      >
        How we can help you achieve your driving goals
      </h2>
      <div className={styles["extra-info-content"]}>
        {/* // ? Box 1 */}
        <div data-aos="fade-up" className={styles["info-boxes"]}>
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
        <div data-aos="fade-up" className={styles["info-boxes"]}>
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
        <div data-aos="fade-up" className={styles["info-boxes"]}>
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
        <div data-aos="fade-up" className={styles["info-boxes"]}>
          <div className={styles["info-icon"]}>
            <img
              src={drivingSchool}
              alt="Smile icons created by Freepik - Flaticon- https://www.flaticon.com/free-icons/smile"
            ></img>
          </div>
          <div className={styles["info-text"]}>
            <h4>7000+ Happy Students</h4>
          </div>
        </div>
      </div>
      <Link to="/klassen" alt="Link to Team page">
        <button data-aos="fade-up" className={styles["light-button"]}>
          Führerschein Klassen
        </button>
      </Link>
    </section>
  );
};

export default ExtraInfoSection;
