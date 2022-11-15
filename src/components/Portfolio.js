import React from 'react'
import Band from "../assets/videos/band.mp4";
import Brioni from "../assets/videos/brioni2man.mp4";
import Harajuku from "../assets/videos/harajuku.mp4";
import "./Portfolio.css";


export default function Portfolio() {

  return (
    <section id="portfolio" className="portfolio__section">
        <h1 className="portfolio__header">What we do</h1>
        <div className="portfolio__wrapper">
          <div className="portfolio__video__wrapper">
            <video src={Band} muted loop autoPlay />
            <button className="portfolio__button">Watch here</button>
          </div>
          <div className="portfolio__video__wrapper">
            <video src={Brioni} muted loop autoPlay  />
            <button className="portfolio__button">Watch here</button>
          </div>
          <div className="portfolio__video__wrapper">
            <video src={Harajuku} muted loop autoPlay  />
            <button className="portfolio__button">Watch here</button>
          </div>
        </div>
    </section>
  )
}
