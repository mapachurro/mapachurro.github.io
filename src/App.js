import React, {Component } from "react";
import {
HashRouter, Route, Link} from "react-router-dom";
import Home from "./home";
import Portfolio from "./portfolio";
import Channels from "./channels";

class App extends Component {
  render() {
    return(
      <HashRouter basename='/'>
        <div>
          <hr />
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/channels" component={Channels}/>
        </div>
      </HashRouter>
    );
  }
}

export default App; 

// export default function App() {
//   return (
//     <Router>
//         <Switch>
//           <Route path="/portfolio">
//             <Portfolio />
//           </Route>
//           <Route path="/channels">
//             <Channels />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//     </Router>
//   );
// }

// function About() {
//   return Home;
// }

// function Stuff() {
//   return Portfolio;
// }

// function Contact() {
//   return Channels;
// }