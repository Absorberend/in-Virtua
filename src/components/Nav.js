import React, {useRef, useEffect} from 'react'
import "./Nav.css";
import logo from "../assets/logo.png";
import hamburger from "../assets/menu-2.svg";
import useOutsideClick from "../hooks/useOutsideClick.js";
import useKeyPress from '../hooks/useKeyPress';

export default function Nav({expandMenu, onHamburgerClick, onCloseMenu}) {
    const ref = useRef();

    useOutsideClick(ref, () => onCloseMenu());
    useKeyPress(() => onCloseMenu());

    useEffect(() => {
        window.matchMedia("(max-width: 600px)").addEventListener("change", () => onCloseMenu());

        // eslint-disable-next-line
    }, []);

    return (
        <div className="nav__section nav__section__vis">
            <div className="nav__logo__wrapper">
                <a href="#homepage">
                    <img src={logo} className="nav__logo" alt="logo"/>
                </a>
            </div>
            <nav>
                <button className="nav__hamburger__wrapper" onClick={onHamburgerClick}>
                    <img src={hamburger} className="nav__hamburger" alt="menu" />
                </button>
                <div className={expandMenu ? "nav__links nav__links__active" : "nav__links"} ref={ref}>
                    <a href="#homepage" onClick={expandMenu ? onHamburgerClick : undefined} className="nav__link">Home</a>
                    <a href="#portfolio" onClick={expandMenu ? onHamburgerClick : undefined} className="nav__link">Portfolio</a>
                    <a href="#productintro" onClick={expandMenu ? onHamburgerClick : undefined} className="nav__link">Product</a>
                    <a href="#reviews" onClick={expandMenu ? onHamburgerClick : undefined} className="nav__link">Reviews</a>
                    <a href="#aboutus" onClick={expandMenu ? onHamburgerClick : undefined} className="nav__link">About</a>
                    <a href="#contact" onClick={expandMenu ? onHamburgerClick : undefined} className="nav__link">Contact</a>
                </div>
                <div className={expandMenu ? "nav__links__bg" : ""}></div>
            </nav>
        </div>
    )
}
