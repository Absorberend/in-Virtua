import React, {useState, useRef, useEffect} from 'react'
import "./Nav.css";
import logo from "../assets/logo.png";
import hamburger from "../assets/menu-2.svg";
import useOutsideClick from "../hooks/useOutsideClick.js";
import useCloseOnEsc from '../hooks/useCloseOnEsc';

export default function Nav() {
    const [expandMenu, setExpandMenu] = useState(false);
    const ref = useRef();

    const handleHamburgerClick = () => {
        setExpandMenu(prevExpandMenu => !prevExpandMenu);
    }

    useOutsideClick(ref, () => setExpandMenu(false));
    useCloseOnEsc(() => setExpandMenu(false));

    useEffect(() => {
        window.matchMedia("(max-width: 600px)").addEventListener("change", () => setExpandMenu(false));
    }, []);

    return (
        <div className="nav__section">
            <div className="nav__logo__wrapper">
                <a href="#homepage">
                    <img src={logo} className="nav__logo" />
                </a>
            </div>
            <nav>
                <button className="nav__hamburger__wrapper" onClick={handleHamburgerClick}>
                    <img src={hamburger} className="nav__hamburger"/>
                </button>
                <div className={expandMenu ? "nav__links nav__links__active" : "nav__links"} ref={ref}>
                    <a href="#homepage" onClick={expandMenu ? handleHamburgerClick : undefined} className="nav__link">Home</a>
                    <a href="#portfolio" onClick={expandMenu ? handleHamburgerClick : undefined} className="nav__link">Portfolio</a>
                    <a href="#productintro" onClick={expandMenu ? handleHamburgerClick : undefined} className="nav__link">Product</a>
                    <a href="#reviews" onClick={expandMenu ? handleHamburgerClick : undefined} className="nav__link">Reviews</a>
                    <a href="#aboutus" onClick={expandMenu ? handleHamburgerClick : undefined} className="nav__link">About</a>
                    <a href="#contact" onClick={expandMenu ? handleHamburgerClick : undefined} className="nav__link">Contact</a>
                </div>
                <div className={expandMenu ? "nav__links__bg" : ""}></div>
            </nav>
        </div>
    )
}
