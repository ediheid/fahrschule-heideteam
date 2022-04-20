import React from "react";

import styles from "../Footer/footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles["footer-container-element"]}>
      <div className={styles["footer-content-container"]}>
        <h2>Fahrschule Heideteam</h2>
        {/* // Todo: Add link to contact page */}
        <h5>Kontakt</h5>
        {/* // Todo: Add link to covid section */}
        <h5>COVID-19</h5>
        {/* // Todo: Is there a way to add this as a google maps link? */}
        <h3> 01454 Radeberg - Pillnitzer Straße 8 </h3>
        {/* // Todo: add link to portfolio */}
        <h4>Website designed and built by Edith Heidmann</h4>
        {/* // Todo: Setup auto changing year and use &copy */}
        <span>© 2022 Fahrschule Heideteam GmbH</span>

        {/* // ! Impressum etc links will go in this container side by side.. */}
        <div>
          <span>Impressum</span>
          <span>DSGVO</span>
          <span>About Us</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
