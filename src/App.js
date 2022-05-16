import React, { useState, createContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import CookieConsent from "react-cookie-consent";

// Views / Components
import Home from "./Views/Home/Home";
import Header from "./Components/Header/Header";
import DesktopNav from "./Components/Navbar/DesktopNav";
import FscheinClasses from "./Views/Klassen/FscheinClasses";
import Team from "./Views/Team/Team";
import Berufskraftfahrerqualifikation from "./Views/Berufskraftfahrerqualifikation/Berufskraftfahrerqualifikation";
import News from "./Views/News/News";
import Kontakt from "./Views/Kontakt/Kontakt";
import Footer from "./Components/Footer/Footer";
import Impressum from "./Views/Impressum/Impressum";
import Datenschutz from "./Views/DSGVO/Datenschutz";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import ToTopButton from "./Components/ToTopButton/ToTopButton";

// ? createContext variable
export const AppContext = createContext();

const App = () => {
  // State Hooks to pass down via useContext
  // Hamburger menu
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Handles nav close if user clicks anywhere else
  const closeNavOnClickAnywhere = () => {
    setIsNavOpen(false);
  };

  // Scroll to top on browser refresh
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  // Closes mobile nav dropdown if it is open and the user scrolls down the page past 100px
  window.onscroll = function () {
    if (window.scrollY > 100) {
      setIsNavOpen(false);
    }
  };

  return (
    <>
      {/* This is where context lives */}
      <AppContext.Provider
        value={{
          isNavOpen,
          setIsNavOpen,
          closeNavOnClickAnywhere,
        }}
      >
        <Router>
          {/* Scrolls to top on routing */}
          <ScrollToTop />

          {/* Mobile Nav lives inside Header */}
          <Header />
          <DesktopNav />

          {/*  // !! */}
          {/* // Todo: Check if site uses cookies once finished.. https://www.cookiemetrix.com/ and generate new Datenschutz if necessary..  https://dsgvo-muster-datenschutzerklaerung.dg-datenschutz.de/?lang=en */}
          {/* <CookieConsent debug={true} enableDeclineButton flipButtons>
            Data Privacy Policy
          </CookieConsent> */}

          <main
            // Handles nav close if user clicks anywhere on main content
            onClick={closeNavOnClickAnywhere}
            style={{ overflow: "hidden" }}
          >
            {/* Displays scroll to top button once user has scrolled down the page // * (hamburger menu devices only) */}
            <ToTopButton />

            <Routes>
              <Route path="/" exact element={<Home />} />

              <Route path="/klassen" exact element={<FscheinClasses />} />

              <Route path="/team" exact element={<Team />} />

              <Route
                path="/berufskraftfahrerqualifikation"
                exact
                element={<Berufskraftfahrerqualifikation />}
              />

              <Route path="/news" exact element={<News />} />

              <Route path="/kontakt" exact element={<Kontakt />} />

              <Route path="/impressum" exact element={<Impressum />} />

              <Route path="/datenschutz" exact element={<Datenschutz />} />

              {/* Redirects all unknown routes entered to home page view - Replaces Redirect in react-router-dom 6+ */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>

          <Footer />
        </Router>
      </AppContext.Provider>
    </>
  );
};
export default App;
