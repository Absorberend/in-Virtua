import React from 'react'
import ReactSlider from 'react-slider'
import "./Slider.css";

export default function Slider({onSliderChange, viewProject}) {
  return (
    <div className="slider__container">
      <ReactSlider 
          className="customSlider"
          trackClassName="customSlider-track"
          thumbClassName="customSlider-thumb"
          max={3}
          min={1}
          renderThumb={(props, state) => <div {...props}><div className="customSlider-thumb-value">{state.valueNow}</div></div>}
          onChange={(value) => onSliderChange(value)}
      />
      <div className="marks__container">
        <div className="example-mark" />
        <div className="example-mark" />
        <div className="example-mark" />
      </div>
    </div>
  )
}
