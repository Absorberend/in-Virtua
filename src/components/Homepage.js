import React from 'react'
import './Homepage.css';
import MovingComponent from 'react-moving-text';

export default function Homepage({expandMenu, onHamburgerClick}) {
  return (
    <section className="homepage__section" id="homepage">
      <div className="homepage__header">
        <MovingComponent
          type="fadeIn"
          duration="6000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none">
          <h1>People. Together.</h1>
          <h2>Share your special moments</h2>
          <a href="#portfolio" onClick={expandMenu ? onHamburgerClick : undefined} className="nav__link">Portfolio</a>
        </MovingComponent>
      </div>
    </section>
  )
}
