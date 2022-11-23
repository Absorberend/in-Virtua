import React, {useState, useRef} from 'react'
import './Contact.css';
import emailjs from '@emailjs/browser';

import instagramIcon from "../assets/instagram.svg";
import facebookIcon from "../assets/facebook.svg";
import mailIcon from "../assets/mail.svg";


export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jfqzq6l', 'template_s7ls8wk', form.current, 'hw7Ip1LVxNRfEQ9jf')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    setName("");
    setEmail("");
    setMessage("");
  }


  return (
    <section id="contact" className="contact__section">
      <h2 className="contact__header">Contact Us</h2>
      <div className="contact__form__wrapper">
        <form 
          className="contact__form"
          name="contact__form"
          onSubmit={(e) => handleSubmit(e)}
          ref={form}
        >
          <div className="contact__social__media">
            <a 
              href="https://www.instagram.com/in_virtua/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img src={instagramIcon} alt="instagram icon" className="contact__social__media__img__1" />
            </a>
            <a 
              href="/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img src={facebookIcon} alt="facebook icon" className="contact__social__media__img__2" />
            </a>
            <a 
              href="mailto:info@in-virtua.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img src={mailIcon} alt="mail icon"  className="contact__social__media__img__3"/>
            </a>
          </div>
          <label htmlFor="contact__name">
            Name
            <input 
              className=""
              type="text" 
              name="contact__name" 
              id="contact__name" 
              size="25" 
              placeholder="Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </label>

          <label htmlFor="contact__email">
            Email
            <input 
              className=""
              type="email" 
              name="contact__email" 
              id="contact__email" 
              size="25" 
              placeholder="Email address" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </label>

          <label htmlFor="contact__message">
            Message
            <textarea 
              className=""
              rows="7" 
              cols="42"
              name="contact__message" 
              id="contact__message"
              placeholder="Type your message here."
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              required
            />
          </label>

          <input 
              className="contact__submit__button"
              type="submit" 
              value="Send"
            />

        </form>
      </div>
    </section>
  )
}
