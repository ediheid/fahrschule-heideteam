import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "../Home/home.module.scss";

import medal from "../Home/Static/medal.png";
import euro from "../Home/Static/euro.png";
import drivingSchool from "../Home/Static/driving-school.png";
import handshake from "../Home/Static/partners.png";

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
        Wir helfen Ihre Fahrziele zu erreichen
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
            <h4>30+ Jahre Erfahrung</h4>
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
            <h4>attraktive Preise</h4>
          </div>
        </div>

        {/* // ? Box 3 */}
        <div data-aos="fade-up" className={styles["info-boxes"]}>
          <div className={styles["info-icon"]}>
            <img
              src={handshake}
              alt="Partners icons created by Kalashnyk - Flaticon - https://www.flaticon.com/free-icons/partners"
            ></img>
          </div>
          <div className={styles["info-text"]}>
            <h4>Kompetente und zuverlässige Leistung</h4>
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
            <h4>7000+ erfolgreiche Fahrschüler*innen</h4>
          </div>
        </div>
      </div>
      <Link data-aos="fade-up" to="/klassen" alt="Link to Team page">
        <button className={styles["gradient-button-light"]}>
          Führerschein Klassen
        </button>
      </Link>

      <div className={styles["dividing-line"]}></div>
    </section>
  );
};

export default ExtraInfoSection;
