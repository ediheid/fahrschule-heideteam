import React from "react";
import { HashLink } from "react-router-hash-link";

import styles from "../FührerscheinClasses/fschein-classes.module.scss";

const SubMenu = () => {
  return (
    <div className={styles["classes-sub-menu"]}>
      {/* // Todo: Hashlinks ready to setup to sections once implemented */}
      <ul>
        <HashLink to="/klassen#klasse-a" className={styles["hashlink"]}>
          <li>A</li>
        </HashLink>
        <HashLink to="/klassen#klasse-a1" className={styles["hashlink"]}>
          {" "}
          <li>A1</li>
        </HashLink>
        <HashLink to="/klassen#klasse-a2" className={styles["hashlink"]}>
          <li>A2</li>
        </HashLink>
        <HashLink to="/" className={styles["hashlink"]}>
          {" "}
          <li>AM</li>
        </HashLink>
        <HashLink to="/" className={styles["hashlink"]}>
          {" "}
          <li>B / B197</li>
        </HashLink>
        <HashLink to="/" className={styles["hashlink"]}>
          <li>BE</li>
        </HashLink>
        <HashLink to="/" className={styles["hashlink"]}>
          <li>C</li>
        </HashLink>
        <HashLink to="/" className={styles["hashlink"]}>
          {" "}
          <li>C1</li>
        </HashLink>
        <HashLink to="/" className={styles["hashlink"]}>
          {" "}
          <li>C1E</li>
        </HashLink>
        <HashLink to="/" className={styles["hashlink"]}>
          <li>CE</li>
        </HashLink>
        <HashLink to="/" className={styles["hashlink"]}>
          <li>D</li>
        </HashLink>
        <HashLink to="/" className={styles["hashlink"]}>
          <li>D1</li>
        </HashLink>
        <HashLink to="/" className={styles["hashlink"]}>
          <li>T</li>
        </HashLink>
      </ul>
    </div>
  );
};

export default SubMenu;
