import React from 'react';

function Navbar() {
  return (

<div>
<nav class="navbar navbar-expand-sm navbar-expand-md navbar-inverse navbar-expand-lg navbar-light bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#">
            <img src="assets/images/square 42.jpg" width="30" height="30"></img></a>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
                <a class="nav-link" href="./index.html" style="color: #7C98E2;">oliver jl renwick <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="./portfolio.html" style="color: #7C98E2;">my work</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="./contact.html" style="color: #7C98E2;">my channels</a>
            </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div>
</nav>
</div>
)
};

export default Navbar;