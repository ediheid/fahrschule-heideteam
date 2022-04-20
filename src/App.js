import React, { useState, createContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

// Views / Components
import Home from "./Views/Home/Home";
import Header from "./Components/Header/Header";
import DesktopNav from "./Components/Navbar/DesktopNav";
import FscheinClasses from "./Views/FührerscheinClasses/FscheinClasses";
import Team from "./Views/Team/Team";
import Preise from "./Views/Preise/Preise";
import Berufskraftfahrerqualifikation from "./Views/Berufskraftfahrerqualifikation/Berufskraftfahrerqualifikation";
import News from "./Views/News/News";
import Kontakt from "./Views/Kontakt/Kontakt";
import Footer from "./Components/Footer/Footer";

// ? createContext variable
export const AppContext = createContext();

const App = () => {
  // State Hooks to pass down via useContext
  // Hamburger menu
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      {/* This is where context lives */}
      <AppContext.Provider value={{ isNavOpen, setIsNavOpen }}>
        <Router>
          {/* // Todo: Scroll to top will go here */}
          {/* Mobile Nav lives inside Header */}
          <Header />
          <DesktopNav />

          <main style={{ overflow: "hidden" }}>
            <Routes>
              <Route path="/" exact element={<Home />} />

              <Route path="/klassen" exact element={<FscheinClasses />} />

              <Route path="/team" exact element={<Team />} />

              <Route path="/preise" exact element={<Preise />} />

              <Route
                path="/berufskraftfahrerqualifikation"
                exact
                element={<Berufskraftfahrerqualifikation />}
              />

              <Route path="/news" exact element={<News />} />

              <Route path="/kontakt" exact element={<Kontakt />} />

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
