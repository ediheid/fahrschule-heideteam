import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "../Home/home.module.scss";

// AOS
import Aos from "aos";
import "aos/dist/aos.css";

const ContactSection = () => {
  // AOS functionality
  useEffect(() => {
    Aos.init({ duration: 1000, once: false });
  }, []);

  return (
    <section data-aos="fade-up" className={styles["contact-section"]}>
      <h2 className={styles["headings"]}>
        Ready to book? Or still have questions?
      </h2>

      <Link to="/kontakt" alt="Link to Kontakt page">
        <button className={styles["contact-button"]}>Contact Us</button>
      </Link>
    </section>
  );
};

export default ContactSection;
