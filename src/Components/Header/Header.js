import React, { useContext } from "react";
import { AppContext } from "../../App";

import { Link } from "react-router-dom";
import MobileNav from "../Navbar/MobileNav";

import styles from "../Header/header.module.scss";
import Logo from "../Header/Static/logo.png";

import Phone from "./Phone";
import { Sling as Hamburger } from "hamburger-react";

const Header = () => {
  // State Context from App.js
  const MobileNavContext = useContext(AppContext);
  return (
    <>
      <header className={styles["header-container"]}>
        {/* Logo / Link to Home */}
        <Link to="/">
          <img
            className={styles["logo-img-link"]}
            src={Logo}
            alt="Fahrschule Heideteam green logo and link to home page"
          ></img>
        </Link>

        {/* Container for Phone and Hamburger menu (displayed on mobile devices) */}
        <div className={styles["header-right-content"]}>
          {/*  Phone Number (call on click) */}
          <Phone />

          {/* Hamburger */}
          <div className={styles["hamburger-container"]}>
            <Hamburger
              // Aria label for accessibility
              label="Show menu"
              size={23}
              rounded
              toggled={MobileNavContext.isNavOpen}
              toggle={MobileNavContext.setIsNavOpen}
            />
          </div>
        </div>
        {MobileNavContext.isNavOpen && <MobileNav />}
      </header>
    </>
  );
};

export default Header;
