import React from "react";

const News = () => {
  return (
    <>
      <div>
        Aufgrund verschiedenster Hintergründe ist es im Augenblick nicht
        möglich, kurzfristig in eine Führerscheinausbildung (vorrangig Klasse B
        und alle A-Klassen) zu starten.
      </div>
      {/* // Todo: instead of putting the email here, put a hashlink to the contact
      form */}
      <div>
        Bitte informieren Sie sich persönlich über unser Büro (jeweils mittwochs
        von 15.00 - 18.00 Uhr) oder jederzeit per Mail unter
        info@fsheideteam.de.
      </div>
      <div>
        Aus organisatorischen Gründen können wir zum jetzigen Zeitpunkt die
        theoretische Ausbildung (Grundstoff) nur in den Ferien - als
        Feriencrashkurs - anbieten.
      </div>
      <div>
        Bitte bedenken Sie auch, dass es im Moment zu sehr langen Wartezeiten
        bei den Behörden (Fahrerlaubnisbehörde) und auch bei Prüfungsterminen
        für Theorie und Praxis (DEKRA) kommt.
      </div>

      {/* // ! Is this actual text? */}
      {/* <div>Zum Abklären weiterer Fragen sprechen Sie uns einfach an!</div> */}
      <h3>Covid</h3>
      <p>Keine aktuellen Einschränkungen</p>
    </>
  );
};

export default News;
