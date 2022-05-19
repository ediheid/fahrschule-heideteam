import React from "react";
import { Link } from "react-router-dom";

import styles from "../Home/home.module.scss";

const ContactSection = () => {
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
