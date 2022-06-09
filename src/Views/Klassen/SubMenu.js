import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

import styles from "../Klassen/fschein-classes.module.scss";

const SubMenu = () => {
  // UseState
  const [fixMenu, setFixMenu] = useState(false);

  const stickyMenu = () => {
    // Set to stick once scroll passed height of header (8rem) on all devices except for small, x-small and extra-extra-small
    if (window.scrollY >= 80) {
      setFixMenu(true);
    } else {
      setFixMenu(false);
    }
  };

  // Event Listener for scroll and calling function
  window.addEventListener("scroll", stickyMenu);

  return (
    <div
      // Fixed menu is set on all devices except for small, x-small and extra-extra-small
      className={
        // styles["classes-sub-menu"]
        fixMenu
          ? ` ${styles["sticky-menu"]} ${styles["classes-sub-menu"]}`
          : styles["classes-sub-menu"]
      }
    >
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
        <HashLink smooth to="/klassen#galerie" className={styles["hashlink"]}>
          <li>Galerie</li>
        </HashLink>
      </ul>
    </div>
  );
};

export default SubMenu;
