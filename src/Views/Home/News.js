import React from "react";

import styles from "../Home/home.module.scss";

const News = () => {
  return (
    <section className={styles["news-section"]} id="news">
      <h2 className={styles["headings"]}>News</h2>

      <div className={styles["news-content"]}>
        <p className={styles["news-paragraphs"]}>
          Im Augenblick ist es nicht möglich, kurzfristig in eine
          Führerscheinausbildung (vorrangig Klasse B und alle A-Klassen) zu
          starten.
        </p>
        {/* // Todo: instead of putting the email here, put a hashlink to the contact
      form */}
        <p className={styles["news-paragraphs"]}>
          Bitte informieren Sie sich in unserem Büro (jeweils mittwochs von
          15.00 - 18.00 Uhr) oder jederzeit per Mail unter :
          <a
            className={styles["email-link"]}
            href="mailto:info@fsheideteam.de"
            alt="email link to info"
            target="_blank"
            rel="noopener noreferrer"
          >
            <br /> info@fsheideteam.de
          </a>
          .
        </p>
        <p className={styles["news-paragraphs"]}>
          Aus organisatorischen Gründen können wir zum jetzigen Zeitpunkt die
          theoretische Ausbildung (Grundstoff) nur in den Ferien - als
          Feriencrashkurs - anbieten.
        </p>
        <p className={styles["news-paragraphs"]}>
          Bitte bedenken Sie auch, dass es im Moment zu sehr langen Wartezeiten
          bei den Behörden (Fahrerlaubnisbehörde) und auch bei Prüfungsterminen
          für Theorie und Praxis (DEKRA) kommt.
        </p>

        <p className={styles["news-paragraphs"]}>
          Zum Abklären weiterer Fragen sprechen Sie uns einfach an!
        </p>

        {/* // Section ================ */}
        <h2
          className={`${styles["headings"]} ${styles["covid-heading"]}`}
          id="covid"
        >
          Corona Info
        </h2>
        <p className={styles["news-paragraphs"]}>
          Es bestehen keine aktuellen Einschränkungen.
        </p>
      </div>
      <div className={styles["dividing-line"]}></div>
    </section>
  );
};

export default News;
