import React from "react";

import styles from "../Team/team.module.scss";

import TeamCard from "./TeamCard";

// Import individual team photos
import wolli from "../Team/Static/wolli.png";
import joerg from "../Team/Static/joerg.png";
import jan from "../Team/Static/jan.png";
import peter from "../Team/Static/peter.png";
import robby from "../Team/Static/robby.png";
import nancy from "../Team/Static/nancy.png";

const Team = () => {
  // Add individual card data here that will be mapped below
  // Alt tag updates with name
  const cards = [
    // ? Jörg
    {
      id: "1",
      img: joerg,
      name: "Jörg Seeberger",
      duties: "Geschäftsführer & Leiter der Ausbildung",
      phoneNumber: "+49-172-944-0174",
      displayNumber: "+49 172 944 0174",
      email: 'j.seeberger@fsheideteam.de'
    },

    // ? Wolli
    {
      id: "2",
      img: wolli,
      name: "Wolfgang Franke",
      duties: "Prokurist der Fahrschul GmbH & Ausbilder auf Nutzfahrzeugen",
      phoneNumber: "+49-172-796-1932",
      displayNumber: "+49 172 796 1932",
      email: 'w.franke@fsheideteam.de'
    },

    // ? Robby

    {
      id: "3",
      img: robby,
      name: "Robby Mittag",
      duties: "Ausbilder auf Nutzfahrzeugen",
      phoneNumber: " +49-152-3406-6464",
      displayNumber: " +49 152 3406 6464",
      email: 'r.mittag@fsheideteam.de'
    },

    // ? Jan

    {
      id: "3",
      img: jan,
      name: "Jan Säuberlich",
      duties: "Ausbilder für PKW & Motorrad",
      phoneNumber: "+49-172-145-8149",
      displayNumber: "+49 172 145 8149",
      email: 'j.saeuberlich@fsheideteam.de'
    },

    // ? Peter

    {
      id: "3",
      img: peter,
      name: "Peter Wildner",
      duties: "Ausbilder für PKW & Motorrad",
      phoneNumber: "+49-174-914-3710",
      displayNumber: "+49 174 914 3710",
    },

    // ? Nancy

    {
      id: "3",
      img: nancy,
      name: "Nancy Köhler",
      duties: "Die gute Seele im Büro Organisation & Anmeldung",
      // ! Custom style for object position
      customStyle: "custom-style",
      phoneNumber: "+49-173-289-8009",
      displayNumber: "+49 173 289 8009",
      email: 'n.koehler@fsheideteam.de'
    },
  ];

  return (
    <div className={styles["team-page-container"]}>
      {/*  // Todo: Waiting for text */}
      {/* <p>Longer about text will go here..</p> */}
      <h2 className={styles["heading"]}>
        {" "}
        <span>Unser</span> Team
      </h2>
      <div className={styles["heading-underline"]}></div>

      <div className={styles["cards-container"]}>
        {/*  Cards are mapped here from array - passed into TeamCard*/}
        {cards.map((card) => (
          <TeamCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Team;
