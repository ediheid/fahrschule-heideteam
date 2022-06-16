import React from "react";
import { Link } from "react-router-dom";

import styles from "../Home/home.module.scss";

const ContactSection = () => {
  return (
    <section className={styles["contact-section"]}>
      <h2 className={styles["headings"]}>Gern beantworten wir Ihre Fragen!</h2>

      <Link to="/kontakt" alt="Link to Kontakt page">
        <button className={styles["contact-button"]}>Kontakt</button>
      </Link>
    </section>
  );
};

export default ContactSection;
