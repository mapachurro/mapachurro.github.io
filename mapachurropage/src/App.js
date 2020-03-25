import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./home";
import Channels from "./channels";
import Portfolio from "./portfolio"


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portfolio">portfolio</Link>
            </li>
            <li>
              <Link to="/channels">channels</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/portfolio">
            <Stuff />
          </Route>
          <Route path="/channels">
            <Contact />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return Home;
}

function Stuff() {
  return Portfolio;
}

function Contact() {
  return Channels;
}