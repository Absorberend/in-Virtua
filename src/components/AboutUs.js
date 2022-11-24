import React from 'react'
import About from "../assets/about.jpg"
import './AboutUs.css';

export default function AboutUs() {
  return (
    <section id="aboutus" className="about__section" >
      <div className="about__wrapper">
        <div className="about__img__wrapper">
          <img 
            src={About} 
            alt="In-Virtua team" 
            className="about__img" 
          />
          <div className="about__header">
            <h1>Hi,<br />we are In-Virtua</h1>
          </div>
        </div>
        <div className="about__text__container">
          <p className="about__text__bold">We bring you the future!</p>
          <p>
            sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit 
            amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et 
            ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet 
            porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero 
            justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate.
          </p>
        </div>
      </div>
    </section>
  )
}
