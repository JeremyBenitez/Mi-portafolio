import React from "react";
import {ContactUs} from "./Contact_form"
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";
import "./contact.css";

export const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Ponte en <span>Contacto</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">don´t be shy!</h3>

          <p className="contact__description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
            magni odit ipsum, rem modi aut neque! Laudantium, ratione
            consectetur minus, eum vel distinctio, non porro numquam fuga
            maiores sed officia.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />

              <div>
                <span className="info__title">Enviame un correo</span>
                <h4 className="info__desc">Jerebautista2001@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />

              <div>
                <span className="info__title">Llámame</span>
                <h4 className="info__desc">+58 4242646005</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="https://www.facebook.com" className="contact__socials-link">
              <FaFacebookF />
            </a>

            <a href="https://twitter.com" className="contact__socials-link">
              <FaTwitter />
            </a>

            <a
              href="https://www.instagram.com"
              className="contact__socials-link"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      <ContactUs />
      </div>
    </section>


  );
};

export default Contact;
