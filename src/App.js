
import './App.css';
import Homepage from "./components/Homepage";
import Portfolio from "./components/Portfolio";
import ProductIntro from "./components/ProductIntro";
import Reviews from "./components/Reviews";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import VideoModal from "./components/VideoModal";
import React, {useState} from 'react';


function App() {
  const [expandMenu, setExpandMenu] = useState(false);

  const handleHamburgerClick = () => {
    setExpandMenu(prevExpandMenu => !prevExpandMenu);
  }

  const handleCloseMenu = () => {
    setExpandMenu(false);
  }



  return (
    <>
      <VideoModal />
      <header>
        <Nav expandMenu={expandMenu} onHamburgerClick={handleHamburgerClick} onCloseMenu={handleCloseMenu}/>
      </header>
      <main className="main__content" >
        <Homepage />
        <Portfolio/>
        <ProductIntro />
        <Reviews />
        <AboutUs />
        <Contact />
      </main>
    </>
  );
}

export default App;
