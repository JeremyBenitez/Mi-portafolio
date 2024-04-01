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
          <h3 className="contact__title">Comunicate conmigo!</h3>

          <p className="contact__description">
          Contactame a mi número Telefónico o enviame un correo.

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

         
        </div>
      <ContactUs />
      </div>
    </section>


  );
};

export default Contact;
