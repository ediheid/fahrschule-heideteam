import React from "react";
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

const App = () => {
  return (
    <>
      <Router>
        {/* // Todo: Scroll to top will go here */}
        {/* // Todo: Nav will go here */}
        <Header />
        <DesktopNav />
        <main>
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

        {/* // Todo: Footer will go here.. */}
      </Router>
    </>
  );
};
export default App;
