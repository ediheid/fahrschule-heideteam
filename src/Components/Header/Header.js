import React from "react";
import { Link } from "react-router-dom";

import styles from "../Header/header.module.scss";

import Logo from "../Header/Static/logo.png";

const Header = () => {
  return (
    <>
      <div className={styles["header-container"]}>
        <Link to="/">
          <img
            className={styles["logo-img-link"]}
            src={Logo}
            alt="Fahrschule Heideteam green logo and link to home page"
          ></img>
        </Link>
      </div>
    </>
  );
};

export default Header;
