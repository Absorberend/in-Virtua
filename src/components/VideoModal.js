import React, {useRef} from 'react'
import useOutsideClick from "../hooks/useOutsideClick.js";
import useCloseOnEsc from '../hooks/useCloseOnEsc';
import closeIcon from "../assets/close-icon.svg";

import "./VideoModal.css";

export default function VideoModal({onCloseModal, frameVideo}) {
  const ref = useRef();

  useOutsideClick(ref, () => onCloseModal());
  useCloseOnEsc(() => onCloseModal());

  return (
    <div className="video__modal__container">
      <button className="video__modal__close__icon" onClick={onCloseModal}>
        <img src={closeIcon} alt="close icon"/>
      </button>
      <div className="video__modal__wrapper" ref={ref}>
          <iframe 
            src={`https://www.youtube-nocookie.com/embed/${frameVideo}`}
            title="YouTube video player" 
            frameBorder="0" 
            width="100%"
            height="100%"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
      </div>
    </div>
  )
}
