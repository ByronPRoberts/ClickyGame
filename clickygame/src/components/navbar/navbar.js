import React from "react";
import "./navbar.css";

const Navbar = props => (
    <nav className ="navbar">
    <ul>
        <li className="brand">
        <a href="/">Clicky Game</a>
        </li>
        <li> Click an image to begin!</li>
        <li>Score = {props.score} | Top Score = {props.topscore} </li>
    </ul>
</nav>
);

export default Navbar;