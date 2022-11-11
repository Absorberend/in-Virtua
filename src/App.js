
import './App.css';
import Homepage from "./components/Homepage";
import Portfolio from "./components/Portfolio";
import ProductIntro from "./components/ProductIntro";
import Reviews from "./components/Reviews";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Nav from "./components/Nav";


function App() {

  return (
    <>
      <header>
        <Nav />
      </header>
      <main className="main__content">
        <Homepage />
        <Portfolio />
        <ProductIntro />
        <Reviews />
        <AboutUs />
        <Contact />
      </main>
    </>
  );
}

export default App;
