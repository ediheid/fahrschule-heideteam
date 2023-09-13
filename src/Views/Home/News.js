import React from "react";
import { Link } from "react-router-dom";

import styles from "../Home/home.module.scss";

const News = () => {
  return (
    <section className={styles["news-section"]} id="news">
      <h2 className={styles["headings"]}>News</h2>

      <div className={styles["news-content"]}>
        <p style={{ color: "red" }} className={styles["news-paragraphs"]}>
          Die Anmeldung für den unten stehenden Ferienkurs (ausschließlich
          Klasse B/B f17) findet am Samstag den 16.09. - 12:00 Uhr in unserem
          Büro statt.
        </p>

        <p className={styles["news-paragraphs"]}>
          Unser nächster THEORIE-KURS findet vom 07.10.2023 – 14.10.2023 statt.
          <br />
          Ort: Pillnitzer Straße 8, 01454 Radeberg
          <br />
          Zeit: jeweils von 9.00 – 12.00 Uhr
          <br />
          Teilnehmerzahl: max. 15
        </p>
        <p className={styles["news-paragraphs"]}>
          <b style={{ textDecoration: "underline" }}> !! ACHTUNG !! </b>
          <br />
          ° Der Crashkurs gilt ausschließlich für die Klasse B bzw. BF17 als
          Ersterwerb.
          <br />
          ° Keine A-Klassen!
          <br />
          ° Aus gesetzlichen und organisatorischen Gründen ist es nur möglich,
          Anmeldungen entgegenzunehmen für Fahrschüler/innen, die das 18.
          Lebensjahr bereits erreicht haben oder im nächsten halben Jahr 18
          Jahre (bei BF17 - 17 Jahre) alt werden.
          <br />° Info zur Anmeldung: Datum und Uhrzeit werden in Kürze bekannt
          gegeben.
        </p>

        <p className={styles["news-paragraphs"]}>
          Der nächste LKW Lehrgang wird am 15.01.2024 17 Uhr beginnen. <br />
          Anmeldung ist ab sofort möglich. <br /> Bitte telefonisch bei{" "}
          {/* <a
            className={styles["email-link"]}
            href="tel:+49-172-7961932"
            alt="Click to call"
          >
            {" "}
            <span>Herrn Franke </span>
          </a>
          oder */}
          <a
            className={styles["email-link"]}
            href="tel:+49-152-3406-6464"
            alt="Click to call"
          >
            {" "}
            <span> Herr Mittag</span>
          </a>{" "}
          zwecks Absprache eines Termins Bzw. Beratung melden.
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
          Ab 01.01.2023 werden nur noch Kartenzahlung oder Banküberweisungen
          akzeptiert.
          <br />
          Bar Zahlungen können nicht mehr angenommen werden.
        </p>

        <p className={styles["news-paragraphs"]}>
          Im Augenblick ist es nicht möglich, kurzfristig in eine
          Führerscheinausbildung (vorrangig Klasse B und alle A-Klassen) zu
          starten.
        </p>
        {/* // Todo: instead of putting the email here, put a hashlink to the contact
      form */}
        <p className={styles["news-paragraphs"]}>
          Bitte informieren Sie sich in unserem Büro (jeweils mittwochs von
          15.00 - 18.00 Uhr) oder jederzeit per Mail unter:
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
          Zum Abklären weiterer Fragen sprechen Sie uns einfach an!
        </p>

        <div className={styles["news-contact-button-container"]}>
          <Link smooth to="/kontakt" className={styles["news-contact-button"]}>
            Kontakt
          </Link>
        </div>

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
      {/* <div className={styles["dividing-line"]}></div> */}
    </section>
  );
};

export default News;
