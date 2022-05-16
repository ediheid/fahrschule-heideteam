import React from "react";

import styles from "../../Views/Impressum/impressum.module.scss";

const Impressum = () => {
  return (
    <div className={styles["impressum-page-container"]}>
      <div className={styles["impressum-content-container"]}>
        <h2 className={styles["main-headings"]}>Impressum</h2>

        <div>
          <h2 className={styles["company-name-heading"]}>
            Heideteam Fahrschul GmbH
          </h2>
          <span className={styles["spans"]}>
            Pillnitzer Str. 8 - 01454 Radeberg
          </span>
        </div>

        {/*  // ! This might be unnecessary as we have 'vetreten durch' */}
        {/* <div>
        <h3>Seiteninhaber:</h3>
        <span>Jörg Seeberger / Wolfgang Franke </span>
      </div> */}

        <div>
          {/* // Todo: Add links to contact areas - 2nd spans will be anchors */}
          <h3 className={styles["sub-headings"]}>Kontakt:</h3>

          <span className={styles["spans"]}>
            Tel:{" "}
            <a
              className={styles["anchor-tags"]}
              href="tel:+49-3528-226-9934"
              alt="Click to call tel"
            >
              +49 3528 226 9934{" "}
            </a>
          </span>

          <br />
          <span className={styles["spans"]}>
            Mobil:{" "}
            <a
              className={styles["anchor-tags"]}
              href="tel:+49-172-944-0174"
              alt="Click to call mobile"
            >
              +49 172 944 0174
            </a>
          </span>

          <br />
          <span className={styles["spans"]}>
            E-mail:{" "}
            <a
              className={styles["anchor-tags"]}
              href="mailto:info@fsheideteam.de"
              alt="Email link to info at fs heideteam dot d e"
            >
              info@fsheideteam.de
            </a>
          </span>
        </div>

        <div>
          <h3 className={styles["sub-headings"]}>Vertreten durch:</h3>
          <span className={styles["spans"]}>
            Geschäftsführer/Verantwortlicher Leiter der Fahrschule: Jörg
            Seeberger
          </span>
          <br />
          <span className={styles["spans"]}>
            Einzelprokura: Wolfgang Franke
          </span>
        </div>

        {/*  // ! What is the sub-heading for this section? - Is it 'Registereintrag:'? */}
        <div>
          <h3 className={styles["sub-headings"]}>Registereintrag:</h3>
          <span className={styles["spans"]}>
            {" "}
            HR. B 1144 Dresden Amtsgericht Dresden
          </span>
          <br />
          <span className={styles["spans"]}> USt-Id Nr.: DE140207477 </span>
        </div>

        {/* // Todo: Add links to contact areas - 2nd spans will be anchors */}
        <div>
          <h3 className={styles["sub-headings"]}>Aufsichtsbehörden:</h3>

          <span className={styles["spans"]}>
            Fahrschule: Landesamt für Straßenbau und Verkehr, Bautzner Str. 19a,
            01099 Dresden{" "}
            <a
              className={styles["anchor-tags"]}
              href="mailto:poststelle@lasuv.sachsen.de"
              alt="Email link to poststelle at lasuv dot sachsen dot d e"
            >
              (poststelle@lasuv.sachsen.de)
            </a>{" "}
          </span>

          <br />
          <span className={styles["spans"]}>
            zuständige BG "Berufsgenossenschaft für Fahrzeughaltung"
          </span>
        </div>

        <h2 className={styles["main-headings"]}>Haftungsausschluss</h2>
        <p className={styles["paragraphs"]}>
          Die Informationen auf dieser Website verstehen sich als "Aussagen an
          sich" ohne implizite Garantien jedweder Art. Die bereitgestellten
          Informationen auf dieser Website wurden sorgfältig geprüft und werden
          regelmäßig aktualisiert. Jedoch kann keine Garantie dafür übernommen
          werden, dass alle Angaben zu jeder Zeit vollständig, richtig und in
          letzter Aktualität dargestellt sind. Alle Angaben können ohne
          vorherige Ankündigung ergänzt, entfernt oder geändert werden.
        </p>

        <p className={styles["paragraphs"]}>
          Alle aufgeführten Firmennamen, Markennamen und Warenzeichen sind
          Eigentum ihrer Inhaber und dienen lediglich zur Identifikation und
          Beschreibung von Produkten und Leistungen.
        </p>
      </div>
    </div>
  );
};

export default Impressum;
