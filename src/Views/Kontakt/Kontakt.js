import React from "react";
import ContactForm from "../Kontakt/ContactForm";

import styles from "../Kontakt/kontakt.module.scss";

const Kontakt = () => {
  return (
    <div className={styles["contact-page-container"]}>
      <div className={styles["heading-container"]}>
        <h2 className={styles["heading"]}>Kontakt</h2>
        <div className={styles["heading-underline"]}></div>
      </div>

      <div className={styles["content-container"]}>
        {/*  Info container */}
        <div className={styles["info-container"]}>
          <h3>Unternehmenssitz</h3>

          {/* Address */}
          <a
            href="https://www.google.com/maps/place/Heideteam+Fahrschulgesellschaft/@51.10972,13.9174513,17z/data=!3m1!4b1!4m5!3m4!1s0x4709b5ff507ea5e9:0x3ec1a1955afef4e0!8m2!3d51.10972!4d13.91964"
            alt="Link to google maps address"
            target="_blank"
            rel="noopener noreferrer"
            className={styles["address"]}
          >
            {" "}
            01454 Radeberg - <br /> Pillnitzer Straße 8{" "}
          </a>

          {/* Phone */}
          <h5>Telefon: </h5>
          <a href="tel:+49-3528-226-9934" alt="Click to call">
            {" "}
            <span className={styles["phone-number"]}> +49 3528 226 9934</span>
          </a>

          <h5>Sowie nach Vereinbarung oder per Mail:</h5>
          <span>
            {" "}
            <a
              className={styles["email-link"]}
              href="mailto:info@fsheideteam.de"
            >
              info@fsheideteam.de
            </a>
          </span>

          {/*  Directions */}
          <h5>Lagebeschreibung:</h5>
          <ul>
            <li>stadtauswärts, nach der Bahnbrücke links</li>
            <li>vom Bahnhof über die Ladestraße 5 min</li>
          </ul>

          {/* Opening and lesson times */}
          <h5>Öffnungszeiten:</h5>
          <span>
            Mittwoch 15.00 bis 18.00 Uhr
            <br />
            sowie nach Vereinbarung
          </span>

          <h5>Unterrichtszeiten:</h5>
          <span>
            Mittwoch 18.00 bis 21.00 Uhr
            <br />
            sowie nach Vereinbarung
          </span>
        </div>

        {/* Map */}
        <iframe
          className={styles["map-container"]}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.931717850376!2d13.917451315755379!3d51.109719979571835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709b5ff507ea5e9%3A0x3ec1a1955afef4e0!2sHeideteam%20Fahrschulgesellschaft!5e0!3m2!1sen!2sde!4v1652710399234!5m2!1sen!2sde"
          // width="400"
          // height="300"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="map"
        ></iframe>

        {/* Contact form */}

        <ContactForm />
      </div>
    </div>
  );
};

export default Kontakt;
