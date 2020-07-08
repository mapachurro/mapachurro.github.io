import React, { Component } from "react";
import { Link } from "react-router-dom";


class Navbar extends Component {
render(){
    return(

<div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="linkbar">
        <h1 className="navbar-brand" href="#">oliver jl renwick</h1>
        <div className="navbar" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className={window.location.pathname === "./home.js" ? "nav-link active" : "nav-link"}>oliver jl renwick</Link>
            </li>
            <li className="nav-item">
                <Link to="/portfolio" className={window.location.pathname === "./portfolio.js" ? "nav-link active" : "nav-link"}>my work</Link>
            </li>
            <li className="nav-item">
                <Link to="/channels" className={window.location.pathname === "./channels.js" ? "nav-link active" : "nav-link"}>my channels</Link>
                </li>
          </ul>
        </div>
      </nav>

      </div>
);
}
}

export default Navbar;