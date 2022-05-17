import React, { useEffect } from "react";

import styles from "../Team/team.module.scss";

import TeamCard from "./TeamCards";

// Import individual team photos
import wolli from "../Team/Static/wolli.png";
import joerg from "../Team/Static/joerg.png";
import jan from "../Team/Static/jan.png";
import peter from "../Team/Static/peter.png";
import michel from "../Team/Static/michel.png";

// AOS
import Aos from "aos";
import "aos/dist/aos.css";

const Team = () => {
  // AOS functionality
  useEffect(() => {
    Aos.init({ duration: 1000, once: false });
  }, []);

  // Add individual card data here that will be mapped below
  const cards = [
    // ? Wolli
    {
      id: "1",
      // Img from import
      // Alt tag updates with name
      img: wolli,
      name: "Wolfgang Franke",
      duties: "Prokurist der Fahrschul GmbH & Ausbilder auf Nutzfahrzeugen",

      backInfoText1:
        "Als ausgebildeter Kraftfahrzeugmechaniker mit einer über 15-jährigen Berufserfahrung, habe ich das nötige Wissen & Können, zukünftige Kapitäne der Landstraße auszubilden. Seit über 40 Jahren besitze ich den Fahrlehrerschein. Bis 1990 habe ich nebenberuflich mein Wissen an junge Fahrzeugführer weitergegeben & bin seither hauptberuflich als Fahrlehrer bei der Heideteam Fahrschul GmbH angestellt.",

      backInfoText2:
        "Meine Fahrerfahrungen auf Nutzfahrzeugen habe ich durch viele Fahrten im nationalen & internationalen Güter- & Personenverkehr erworben.",
    },

    // ? Jörg
    {
      id: "2",
      // Img from import
      // Alt tag updates with name
      img: joerg,
      name: "Jörg Seeberger",
      duties: "Geschäftsführer & Leiter der Ausbildung",

      backInfoText1:
        "Mein Motto: „Lernen ist Veränderung - der Weg ist das Ziel… Ich verlange von meinen Schülern nur das, was ich selber kann!",

      backInfoText2:
        "Schon in meiner Jugend war ich von Fahrzeugen begeistert. Daher gab ich meinen erlernten Beruf als Schlosser auf und wurde 1989 Fahrlehrer. Seither bilde ich non-stop Fahrschüler in allen Klassen aus. Aktuell vorrangig im PKW- & Traktorbereich. Darüber hinaus bin ich auch in der Weiterbildung von Kraftfahrern tätig.",

      backInfoText3:
        "Seit 10 Jahren arbeite ich mit professionellen Therapeuten zusammen, die Traumata (hauptsächlich Verkehrsunfälle) behandeln. Peu à peu habe ich dabei im praktischen Fahren die Aufgabe(n) übernommen, Unsicherheiten & Ängste abzubauen sowie das Selbstvertrauen der Patienten zu stärken.",

      backInfoText4:
        "Um der sitzenden Tätigkeit entgegenzuwirken, bin ich oft in den ruhigen Wäldern mit unserer Hündin Lanë unterwegs & betätige mich auch als Übungsleiter mit meiner AROHA-Sportgruppe.",
    },

    // ? Robby

    {
      id: "3",
      // img: examplePhoto,
      name: "Robby Mittag",
      duties: "Ausbilder auf Nutzfahrzeugen",

      backInfoText1:
        "Wenn mich nicht die endlose Lust zu reisen packt, weshalb ich auch einige Jahre Bus im Reiseverkehr gefahren bin (quasi vom Nordkap bis Marokko), bilde ich motivierte Fahrschüler hauptsächlich in den Klassen C/CE & D aus.",

      backInfoText2:
        "Seit den 80er Jahren besitze ich meinen Fahrlehrerschein. Neben zahlreichen, aktiven Freizeitaktivitäten (Wandern, Klettern, Skifahren) bin ich auch für Geländemotorsport zu begeistern.",
    },

    // ? Jan

    {
      id: "3",
      img: jan,
      name: "Jan Säuberlich",
      duties: "Ausbilder für PKW & Motorrad",

      backInfoText1:
        "Ich bin der frische Nachwuchs im Team & seit 2013 als Fahrlehrer tätig.",

      backInfoText2:
        "Mein Motto: „Mit Ruhe & Geduld ans Ziel. Spaß & Freude am Fahren sollte jeder haben!",

      backInfoText3:
        "Als begeisterter Motorradfahrer bilde ich aktuell vorrangig in den Klassen AM & A1 aus sowie auch in der Klasse B (Motivationstraining, Aufbaustunden von FührerscheinInhaber/innen).",
    },

    // ? Peter

    {
      id: "3",
      img: peter,
      name: "Peter Wildner",
      duties: "Ausbilder für PKW & Motorrad",

      backInfoText1: "TBD",
    },

    // ? Michel

    {
      id: "3",
      img: michel,
      name: "Michel Klein",
      duties: "Aktueller Fahrlehreranwärter in Ausbildung für PKW",

      backInfoText1: "TBD",
    },

    // ? Nancy

    {
      id: "3",
      // img: examplePhoto,
      name: "Nancy Köhler",
      duties: "Die gute Seele im Büro (Organisation, Anmeldung etc.)",

      backInfoText1: "TBD",
    },

    // ? Lanë

    {
      id: "3",
      // img: examplePhoto,
      name: "Lanë",
      duties: "Büroschnuffi für Kundenbetreuung & Fahrlehrerüberwachung",

      backInfoText1: "TBD",
    },
  ];

  return (
    <div data-aos="fade-up" className={styles["team-page-container"]}>
      {/*  // Todo: Waiting for text */}
      {/* <p>Longer about text will go here..</p> */}
      <h2 className={styles["heading"]}>
        {" "}
        <span>Meet the</span> Team
      </h2>
      <div className={styles["heading-underline"]}></div>

      <div className={styles["cards-container"]}>
        {/*  Cards are mapped here from array - passed into FlipCard*/}
        {cards.map((card) => (
          <TeamCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Team;
