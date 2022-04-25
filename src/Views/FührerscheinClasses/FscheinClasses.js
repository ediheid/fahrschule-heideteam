import React from "react";
import { Link } from "react-router-dom";

import styles from "../FührerscheinClasses/fschein-classes.module.scss";

import pkw from "../FührerscheinClasses/Static/car2.png";
import motorcycle from "../FührerscheinClasses/Static/motorcycle.png";
import bus from "../FührerscheinClasses/Static/bus.png";
import pkwPlus from "../FührerscheinClasses/Static/pkwPlus3.png";

const FscheinClasses = () => {
  return (
    <div className={styles["classes-page-container"]}>
      {/* // ? PKW */}
      <div className={styles["class-container"]}>
        <div className={styles["img-container"]}>
          <img
            className={styles["class-img"]}
            alt="White card hood"
            src={pkw}
          ></img>
        </div>
        <div className={styles["text-container"]}>
          {" "}
          <h2 className={styles["headings"]}>
            PKW <span className={styles["class-letter"]}>(Klasse B)</span>
          </h2>
          <ul className={styles["list-container"]}>
            <li>
              So können Sie Ihr Ausbildungsfahrzeug unter einem kompakten
              Kleinwagen, einer Mittelklasselimousine oder einem Kleinbus
              wählen.
            </li>
            <li>Alle Fahrzeuge verfügen über eine Klimaanlage.</li>
            <li>
              Im Bedarfsfall kann auch ein Automatikfahrzeug zur Verfügung
              gestellt werden.
            </li>
            <li>
              Gern verhelfen wir auch Menschen mit Handicap, gehörlosen und
              hörgeschädigten Menschen zum Führerschein.
            </li>
            <h3 className={styles["subheadings"]}>Info</h3>
            <li>
              Mindestalter 18 Jahre / begleitetes Fahren 17 Jahre, mehrspurige
              Kraftfahrzeuge bis zGM 3500 kg mit Anhänger 750 kg, bei Anhängern
              über 750 kg beträgt die max. zGM des Zuges 3500 kg
            </li>
          </ul>
          <Link to="/preise" alt="Link to price page">
            <button className={styles["price-button"]}>Preise</button>
          </Link>
          <Link to="/kontakt" alt="Link to contact page">
            <button className={styles["book-contact-button"]}>Book Now</button>
          </Link>
        </div>
      </div>
      {/* // ? PKW PLUS */}
      {/* // ! Right */}
      {/* // Todo: Need new image */}
      <div className={styles["class-container"]}>
        <div className={styles["img-container"]}>
          <img
            className={styles["class-img-right"]}
            alt="    By Markus Winkler - from
      pexels.com - a-movable-trailer-on-the-roadside-10304035/"
            src={pkwPlus}
          ></img>
        </div>
        <div className={styles["text-container"]}>
          {" "}
          <h2 className={styles["headings"]}>
            PKW + Anhänger{" "}
            <span className={styles["class-letter"]}>(Klasse BE, B96)</span>
          </h2>
          <ul className={styles["list-container"]}>
            <li>
              Für Ihre Hobbies wie z.B. Pferdesport, für die Urlaubsreise mit
              dem großen Wohnanhänger oder auch im Job ist es heute in vielen
              Fällen notwendig, einen Führerschein der Klasse BE zu besitzen.
              Wir machen Sie fit für das Fahren mit einem Hängerzug.
            </li>

            <h3 className={styles["subheadings"]}>BE Anhänger für PKW</h3>
            <li>
              Vorbesitz der Klasse B notwendig, Mindestalter 18 / 17 Jahre,
              Fahrzeug der Klasse B mit Anhänger bis 3500 kg
            </li>

            <h3 className={styles["subheadings"]}>
              Klasse B96 Anhänger für PKW
            </h3>
            <li>
              Vorbesitz der Klasse B notwendig, Mindestalter 18 / 17 Jahre,
              Fahrzeug der Klasse B mit Anhänger über 750 kg und einer zGM des
              Zuges bis 4250 kg
            </li>
          </ul>
          <Link to="/preise" alt="Link to price page">
            <button className={styles["price-button"]}>Preise</button>
          </Link>
          <Link to="/kontakt" alt="Link to contact page">
            <button className={styles["book-contact-button"]}>Book Now</button>
          </Link>
        </div>
      </div>
      {/* // ? Motorcycle */}
      <div className={styles["class-container"]}>
        <div className={styles["img-container"]}>
          <img
            className={styles["class-img"]}
            alt="Motorcycle front view"
            src={motorcycle}
          ></img>
        </div>
        <div className={styles["text-container"]}>
          {" "}
          <h2 className={styles["headings"]}>
            Motorrad <span className={styles["class-letter"]}>(Klasse A)</span>
          </h2>
          <ul className={styles["list-container"]}>
            <li>
              Nach dem Motto: "Biker lernen von Bikern!" Unsere
              Motorradfahrlehrer schulen einen Großteil der Ausbildung vom
              Motorrad aus. So lässt sich besser zeigen was ein Motorradfahrer
              alles beherrschen muss.
            </li>
          </ul>
          <Link to="/preise" alt="Link to price page">
            <button className={styles["price-button"]}>Preise</button>
          </Link>
          <Link to="/kontakt" alt="Link to contact page">
            <button className={styles["book-contact-button"]}>Book Now</button>
          </Link>
        </div>
      </div>
      {/* // ? LKW */}
      {/* // ! Right */}
      {/* // Todo: Need new image */}
      <div className={styles["class-container"]}>
        <div className={styles["img-container"]}>
          <img
            className={styles["class-img-right"]}
            alt="Fahrschule bus on country road"
            src={bus}
          ></img>
        </div>
        <div className={styles["text-container"]}> </div>
      </div>
    </div>
  );
};

export default FscheinClasses;
