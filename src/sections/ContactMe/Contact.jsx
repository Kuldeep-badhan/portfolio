import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  AiOutlineMail,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import "./Contact.scss";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nih58hb",
        "template_2gk6ghh",
        form.current,
        "aJUQCCJOnjn7Ps4zB"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Successfully Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact">
      <div className="contact">
        <p>Get In Touch</p>
        <h2>Contact Me</h2>
        <div className="contact__container">
          <div className="contact__container--cards">
            <div className="card">
              <span>
                <AiOutlineMail className="icon" />
              </span>
              <span className="tag">Email</span>
              <small className="contact__info">support@email.com</small>
              <a href="mailto:kuldeepbadhan781@gmail.com" target={"blank"}>
                Send a message
              </a>
            </div>
            <div className="card">
              <span>
                <AiOutlineTwitter className="icon" />
              </span>
              <span className="tag">Twitter</span>
              <small className="contact__info">kuldeepbadhan</small>
              <a href="https://twitter.com/KuldeepBadhan78" target={"blank"}>
                Send a message
              </a>
            </div>
            <div className="card">
              <span>
                <AiOutlineWhatsApp className="icon" />
              </span>
              <span className="tag">Whatsapp</span>
              <small className="contact__info">+971 54 469 7789</small>
              <a href="https://wa.me/+971544697789" target={"blank"}>
                Send a message
              </a>
            </div>
          </div>
          <div className="contact__container--form">
            <form onSubmit={sendEmail} ref={form}>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                placeholder="Your Full Name..."
              />
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                placeholder="Your Email..."
              />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Your message..."
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
