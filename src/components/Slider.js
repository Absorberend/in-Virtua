import React from 'react'
import ReactSlider from 'react-slider'
import "./Slider.css";

export default function Slider({onSliderChange}) {
  return (
    <ReactSlider 
        className="customSlider"
        trackClassName="customSlider-track"
        thumbClassName="customSlider-thumb"
        max={3}
        min={1}
        step={1}
        renderThumb={(props, state) => <div {...props}><div className="customSlider-thumb-value">{state.valueNow}</div></div>}
        onChange={(value) => onSliderChange(value)}
    />
  )
}
