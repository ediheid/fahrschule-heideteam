import React from "react";
import { Link } from "react-router-dom";

import styles from "../Home/home.module.scss";

const News = () => {
  return (
    <section className={styles["news-section"]} id="news">
      <h2 className={styles["headings"]}>News</h2>

      <div className={styles["news-content"]}>
        {/* // ! Commented out <p> is for the truck course, when it comes back */}
        {/* <p className={styles["news-paragraphs"]}>
          Der nächste LKW Lehrgang wird am 13.05.2024 17 Uhr beginnen. <br />
          Anmeldung ist ab sofort möglich. <br /> Bitte telefonisch bei{" "}
          <a
            className={styles["email-link"]}
            href="tel:+49-152-3406-6464"
            alt="Click to call"
          >
            {" "}
            <span> Herr Mittag</span>
          </a>{" "}
          zwecks Absprache eines Termins Bzw. Beratung melden.
        </p> */}

        {/* // ! start */}

        <h3>
          <b style={{ textDecoration: "underline" }}>
            {" "}
            FÜR DIE KLASSEN B/ BF17/AM/A1:{" "}
          </b>
        </h3>
        <p className={styles["news-paragraphs"]}>
          <span style={{ color: "red" }}>
            Die persönliche Anmeldung für den Ferienkurs in den Klassen
            B/BF17/AM/A1 findet am Mittwoch, den 08.01.2025 um 17.30 Uhr in
            unserem Büro statt.
            <br />° Eine Voranmeldung per Mail oder Anruf ist nicht möglich.
          </span>
          <br />
          Unser nächster THEORIE-KURS für die Klassen B/ BF17 sowie AM/ A1
          findet vom 21.02.2025 - 28.02.2025 statt.
          <br />
          Zeit: jeweils von 9.00 – 12.00 Uhr // Am Sonntag, den 23.02.2025
          findet kein Unterricht statt.
          <br />
          Ort: Pillnitzer Straße 8, 01454 Radeberg
          <br />
          Teilnehmerzahl: max. 12 (Klasse B) // max. 6 (Klasse AM/A1)
          <br />
          ° Wir bitten zu beachten, dass eine zwingende Teilnahme an allen
          Unterrichtstagen zu gewährleisten ist.
          <br />° Ausnahmen sind aus organisatorischen Gründen nicht zu
          realisieren.
        </p>

        <h3>
          <b style={{ textDecoration: "underline" }}>FÜR DIE KLASSEN A/A2:</b>
        </h3>

        <p className={styles["news-paragraphs"]}>
          <span style={{ color: "red" }}>
            Die persönliche Anmeldung für den Kurs in den Klassen A/A2 findet am
            Mittwoch, den 15.01.2025 um 17.30 Uhr in unserem Büro statt.
            <br />° Eine Voranmeldung per Mail oder Anruf ist nicht möglich.
          </span>
          <br />
          Unser nächster THEORIE-KURS für die Klassen A/A2 findet am 10.02.2025
          + 12.02.2025 + 14.02.2025 (jeweils abends) + 15.02.2025 (vormittags)
          statt.
          <br />
          Zeit: Grundstoff jeweils 18.00 Uhr // A-Spezifik (15.02.2025): 9.00
          Uhr
          <br />
          Ort: Pillnitzer Straße 8, 01454 Radeberg
          <br />
          Teilnehmerzahl: max. 10
          <br />
          ° Wir bitten zu beachten, dass eine zwingende Teilnahme an allen
          Unterrichtstagen zu gewährleisten ist.
          <br />° Ausnahmen sind aus organisatorischen Gründen nicht zu
          realisieren.
        </p>

        <p className={styles["news-paragraphs"]}>
          <b style={{ textDecoration: "underline" }}> !! ACHTUNG !! </b>
          <br />
          ° Der Crashkurs gilt ausschließlich für die Klasse B bzw. BF17 als
          Ersterwerb.
          <br />° Aus gesetzlichen und organisatorischen Gründen ist es nur
          möglich, Anmeldungen entgegenzunehmen für Fahrschüler/innen, die das
          18. Lebensjahr bereits erreicht haben oder im nächsten halben Jahr 18
          Jahre (bei BF17 - 17 Jahre) alt werden.
        </p>

        {/* // ! finish */}

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
