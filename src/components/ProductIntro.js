import React from 'react'
import './ProductIntro.css';

import vrIcon from "../assets/cardboards.svg";
import eventIcon from "../assets/event.svg";
import videoIcon from "../assets/video.svg";

export default function ProductIntro() {
  return (
    <section id="productintro" className="product__section">
      <h2 className="product__header">How it works.</h2>
      <div className="product__steps__container">
        <div className="product__step__wrapper">
          <img src={eventIcon} alt="add event" className="product__step__icon" />
          <p className="product__text product__bold">ipsum dolor sit amet</p>
          <p className="product__text">ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent.</p>
        </div>
        <div className="product__step__wrapper">
          <img src={vrIcon} alt="order and receive VR headset" className="product__step__icon" />
          <p className="product__text product__bold">eget nulla facilisi</p>
          <p className="product__text">eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit.</p>
        </div>
        <div className="product__step__wrapper">
          <img src={videoIcon} alt="watch livestream" className="product__step__icon" />
          <p className="product__text product__bold">erat pellentesque adipiscing</p>
          <p className="product__text">at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida.</p>
        </div>
      </div>
    </section>
  )
}
