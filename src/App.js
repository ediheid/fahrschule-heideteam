import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

// Views / Components
import Home from "./Views/Home/Home";

const App = () => {
  return (
    <>
      <Router>
        {/* // Todo: Scroll to top will go here */}
        {/* // Todo: Nav will go here */}

        <main>
          <Routes>
            <Route path="/" exact element={<Home />} />

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
