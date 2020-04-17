import React,  {Component } from "react";
import {
  HashRouter, Route, Link
} from "react-router-dom";
import Home from "./home";
import Portfolio from "./portfolio";
import Channels from "./channels";

class App extends Component {

  render() {
    return (
     <HashRouter basename='/'>
       <Route exact path="/" component={Home} />
       <Route path="/portfolio" component={Portfolio} />
       <Route path="/channels" component={Channels} />
     </HashRouter>
    );
   }
  }

export default App;