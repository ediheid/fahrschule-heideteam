import React from "react";

import styles from "../Home/home.module.scss";

const ExtraInfoSection = () => {
  return (
    <section className={styles["extra-info-section"]}>
      <h2 className={`${styles["headings"]} ${styles["extra-info-heading"]}`}>
        How we can help you achieve your driving goals
      </h2>
      <div>Icons will go here...</div>
    </section>
  );
};

export default ExtraInfoSection;
