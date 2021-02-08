import React from "react";
import "./styles.css";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <div id="container">
          <div class="logo">
            <h3>LOGO</h3>
          </div>
          <NavBar /> <hr />
          <Route path="/About" component={About} />
          <Route path="/Services" component={Services} />
          <Route path="/Contact" component={Contact} />
        </div>
      </div>
    </Router>
  );
}

export default App;
