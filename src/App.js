
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
  const [viewModal, setViewModal] = useState(false);
  const [frameVideo, setFrameVideo] = useState("");
  const [viewProject, setViewProject] = useState(1);

  const handleHamburgerClick = () => {
    setExpandMenu(prevExpandMenu => !prevExpandMenu);
  }

  const handleCloseMenu = () => {
    setExpandMenu(false);
  }

  const handleCloseModal = () => {
    setFrameVideo("");
    setViewModal(false);
  }

  const handleOpenModal = (e) => {
    setExpandMenu(false);
    setFrameVideo(e);
    setViewModal(true);
  }

  const handleSliderChange = (e) => {
    setViewProject(e);
  }


  return (
    <>
      {viewModal && <VideoModal onCloseModal={handleCloseModal} frameVideo={frameVideo} />}
      <header>
        <Nav expandMenu={expandMenu} onHamburgerClick={handleHamburgerClick} onCloseMenu={handleCloseMenu}/>
      </header>
      <main className="main__content" >
        <Homepage expandMenu={expandMenu} onHamburgerClick={handleHamburgerClick} />
        <AboutUs />
        <Portfolio onOpenModal={handleOpenModal} onSliderChange={handleSliderChange} viewProject={viewProject} />
        <ProductIntro />
        <Reviews />
        <Contact />
      </main>
    </>
  );
}

export default App;
