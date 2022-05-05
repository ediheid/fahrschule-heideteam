import React from "react";
import { HashLink } from "react-router-hash-link";

import styles from "../FührerscheinClasses/fschein-classes.module.scss";

const SubMenu = () => {
  return (
    <div className={styles["classes-sub-menu"]}>
      {/* // Todo: Hashlinks ready to setup to sections once implemented */}
      <ul>
        <HashLink smooth to="/klassen#klasse-a" className={styles["hashlink"]}>
          <li>A</li>
        </HashLink>
        <HashLink smooth to="/klassen#klasse-a1" className={styles["hashlink"]}>
          {" "}
          <li>A1</li>
        </HashLink>
        <HashLink smooth to="/klassen#klasse-a2" className={styles["hashlink"]}>
          <li>A2</li>
        </HashLink>
        <HashLink smooth to="/klassen#klasse-am" className={styles["hashlink"]}>
          {" "}
          <li>AM</li>
        </HashLink>
        <HashLink smooth to="/klassen#klasse-b" className={styles["hashlink"]}>
          {" "}
          <li>B / B197</li>
        </HashLink>
        <HashLink smooth to="/klassen#klasse-be" className={styles["hashlink"]}>
          <li>BE</li>
        </HashLink>
        <HashLink smooth to="/klassen#klasse-c" className={styles["hashlink"]}>
          <li>C</li>
        </HashLink>
        <HashLink smooth to="/klassen#klasse-c1" className={styles["hashlink"]}>
          {" "}
          <li>C1</li>
        </HashLink>
        <HashLink
          smooth
          to="/klassen#klasse-c1e"
          className={styles["hashlink"]}
        >
          {" "}
          <li>C1E</li>
        </HashLink>
        <HashLink smooth to="/klassen#klasse-ce" className={styles["hashlink"]}>
          <li>CE</li>
        </HashLink>
        <HashLink smooth to="/klassen#klasse-d" className={styles["hashlink"]}>
          <li>D</li>
        </HashLink>
        <HashLink smooth to="/klassen#klasse-d1" className={styles["hashlink"]}>
          <li>D1</li>
        </HashLink>
        <HashLink smooth to="/klassen#klasse-t" className={styles["hashlink"]}>
          <li>T</li>
        </HashLink>
      </ul>
    </div>
  );
};

export default SubMenu;
