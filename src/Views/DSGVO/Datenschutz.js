import React from "react";

import styles from "../../Views/DSGVO/datenschutz.module.scss";

const Datenschutz = () => {
  return (
    <div className={styles["dsgvo-page-container"]}>
      <div className={styles["content-container"]}>
        <h3 className={styles["main-headings"]}>Datenschutzerklärung</h3>

        <h4 className={styles["sub-headings"]}>
          1. Datenschutz auf einen Blick
        </h4>

        <h5 className={styles["secondary-sub-headings"]}>
          Allgemeine Hinweise
        </h5>

        <p className={styles["paragraphs"]}>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was
          mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
          besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
          persönlich identifiziert werden können. Ausführliche Informationen zum
          Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
          Datenschutzerklärung.
        </p>

        <h5 className={styles["secondary-sub-headings"]}>
          Datenerfassung auf dieser Website
        </h5>

        <p className={styles["paragraphs"]}>
          <b>
            Wer ist verantwortlich für die Datenerfassung auf dieser Website?
          </b>
        </p>

        <p className={styles["paragraphs"]}>
          Die Datenverarbeitung auf dieser Website erfolgt durch den
          Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
          „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung
          entnehmen.
        </p>

        <p className={styles["paragraphs"]}>
          <b>Wie erfassen wir Ihre Daten?</b>
        </p>

        <p className={styles["paragraphs"]}>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
          mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein
          Kontaktformular eingeben.
        </p>

        <p className={styles["paragraphs"]}>
          Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
          Besuch der Website durch unsere IT- Systeme erfasst. Das sind vor
          allem technische Daten (z. B. Internetbrowser, Betriebssystem oder
          Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
          automatisch, sobald Sie diese Website betreten.
        </p>

        <p className={styles["paragraphs"]}>
          <b>Wofür nutzen wir Ihre Daten?</b>
        </p>

        <p className={styles["paragraphs"]}>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
          der Website zu gewährleisten. Andere Daten können zur Analyse Ihres
          Nutzerverhaltens verwendet werden.
        </p>

        <p className={styles["paragraphs"]}>
          <b>Welche Rechte haben Sie bezüglich Ihrer Daten?</b>
        </p>

        <p className={styles["paragraphs"]}>
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
          Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
          erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung
          dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
          Datenverarbeitung erteilt haben, können Sie diese Einwilligung
          jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht,
          unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
          Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
        </p>

        <p className={styles["paragraphs"]}>
          Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich
          jederzeit an uns wenden.
        </p>

        <h4 className={styles["sub-headings"]}>2. Hosting</h4>

        <h5 className={styles["secondary-sub-headings"]}>DomainFactory</h5>

        <p className={styles["paragraphs"]}>
          Wir hosten unsere Website bei DomainFactory. Anbieter ist die
          DomainFactory GmbH, Oskar-Messter-Str. 33, 85737 Ismaning (nachfolgend
          DomainFactory) Wenn Sie unsere Website besuchen, erfasst DomainFactory
          verschiedene Logfiles inklusive Ihrer IP-Adressen.
        </p>

        <p className={styles["paragraphs"]}>
          Details entnehmen Sie der Datenschutzerklärung von DomainFactory:
          <span className={styles["spans"]}>
            Phone:{" "}
            <a
              className={styles["anchor-tags"]}
              href="https://www.df.eu/de/datenschutz/."
              alt="Link to Domain Factory"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              +49 1520 442 3612{" "}
            </a>
          </span>
        </p>

        <p className={styles["paragraphs"]}>
          Die Verwendung von DomainFactory erfolgt auf Grundlage von Art. 6 Abs.
          1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer
          möglichst zuverlässigen Darstellung unserer Website. Sofern eine
          entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
          ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25
          Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder
          den Zugriff auf Informationen im Endgerät des Nutzers (z. B. für
          Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung
          ist jederzeit widerrufbar.
        </p>
      </div>
    </div>
  );
};

export default Datenschutz;
