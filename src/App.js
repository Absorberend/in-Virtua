
import './App.css';
import Homepage from "./components/Homepage";
import Portfolio from "./components/Portfolio";
import ProductIntro from "./components/ProductIntro";
import Reviews from "./components/Reviews";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import React, {useState, useRef, useEffect} from 'react';
import useOnScreen from './hooks/useOnScreen';


function App() {
  const [expandMenu, setExpandMenu] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef();
  const isVisible = useOnScreen(ref)

  const handleHamburgerClick = () => {
    setExpandMenu(prevExpandMenu => !prevExpandMenu);
  }

  const handleCloseMenu = () => {
    setExpandMenu(false);
  }

  useEffect(() => {
    if (isVisible) {
      setInView(true);
    } else {
      setInView(false);
    }
  }, [isVisible])


  return (
    <>
      <header>
        <Nav expandMenu={expandMenu} onHamburgerClick={handleHamburgerClick} onCloseMenu={handleCloseMenu} inView={inView} />
      </header>
      <main className="main__content" >
        <div ref={ref}>
          <Homepage expandMenu={expandMenu} onHamburgerClick={handleHamburgerClick}/>
        </div>
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
