import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./home";
import Channels from "./channels";
import Portfolio from "./portfolio";
import {ParallaxProvider} from 'react-scroll-parallax'

export default function App() {
  return (
    <ParallaxProvider>
    <Router>
        <Switch>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/channels">
            <Channels />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </ParallaxProvider>
  );
}

// function About() {
//   return Home;
// }

// function Stuff() {
//   return Portfolio;
// }

// function Contact() {
//   return Channels;
// }