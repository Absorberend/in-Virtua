import React from 'react'
import Band from "../assets/videos/band.mp4";
import Brioni from "../assets/videos/brioni2man.mp4";
import Harajuku from "../assets/videos/harajuku.mp4";
import Slider from './Slider';
import "./Portfolio.css";


export default function Portfolio({onOpenModal, onSliderChange, viewProject}) {

  return (
    <section id="portfolio" className="portfolio__section">
        <h1 className="portfolio__header">What we do.</h1>
        <div className="portfolio__slidecontainer">
          <Slider onSliderChange={onSliderChange} />
        </div>
        <div className="portfolio__wrapper">
          {viewProject === 1 && <div className="portfolio__video__wrapper">
            <div className="portfolio__video">
              <video src={Band} muted loop autoPlay />
            </div>
            <div className="portfolio__video__text">
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan, urna eu viverra pharetra, enim justo pharetra tellus, nec rhoncus nisi nunc non purus. Aliquam.</span>
              <button className="portfolio__button" data-link="rcniHWJWPF0" onClick={(e) => onOpenModal(e.currentTarget.dataset.link)}>Watch video</button>
            </div>
          </div>}
          {viewProject === 2 && <div className="portfolio__video__wrapper portfolio__flex__reverse">
            <div className="portfolio__video">
              <video src={Brioni} muted loop autoPlay />
            </div>
            <div className="portfolio__video__text">
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus dui est, in fermentum nisl pellentesque eget. Nunc pellentesque aliquam tellus id volutpat.</span>
              <button className="portfolio__button" data-link="FAR08NY5dyM" onClick={(e) => onOpenModal(e.currentTarget.dataset.link)}>Watch video</button>
            </div>
          </div>}
          {viewProject === 3 && <div className="portfolio__video__wrapper">
            <div className="portfolio__video">
              <video src={Harajuku} muted loop autoPlay />
            </div>
            <div className="portfolio__video__text">
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas odio risus, gravida nec elit at, vestibulum gravida orci. Proin id augue sem. Duis vel nisl.</span>
              <button className="portfolio__button" data-link="G3D-UoqhFEA" onClick={(e) => onOpenModal(e.currentTarget.dataset.link)}>Watch video</button>
            </div>
          </div>}
        </div>
        <p>
          Are you curious about what we can do for you? &nbsp;
          <a href="#contact">Contact us</a> and let's make something special.
        </p>
    </section>
  )
}
