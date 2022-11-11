import React from 'react'
import "./Nav.css";
import logo from "../assets/logo.png";
import hamburger from "../assets/menu-2.svg";

export default function Nav() {
  return (
    <div className="nav__section">
        <div className="nav__logo__wrapper">
            <a href="#homepage">
                <img src={logo} className="nav__logo" />
            </a>
        </div>
        <nav>
            <div>
                <img src={hamburger} className="nav__hamburger"/>
            </div>
            <div className="nav__links">
                <a href="#homepage">Home</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#productintro">Product</a>
                <a href="#reviews">Reviews</a>
                <a href="#aboutus">About</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    </div>
  )
}
