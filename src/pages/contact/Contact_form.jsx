import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FiSend } from "react-icons/fi";
import "./contact.css";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7jljtkg', 'template_l6j60o2', form.current, {
        publicKey: '_h4w_fZnG1JkfPpuo',
      })
      .then(
        () => {
          alert('Correo enviado exitosamente');
        },
        (error) => {
         alert('Falló al enviar correo', error.text);
        },
      );
  };

  return (
   <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input name="name"
                type="text"
                placeholder="Tu nombre"
                className="form__control"
              />
            </div>

            <div className="form__input-div">
              <input name="email"
                type="email"
                placeholder="Tu email"
                className="form__control"
              />
            </div>

            
          </div>

          <div className="form__input-div">
            <textarea name="message"
               placeholder="Escribe un mensaje"
              className="form__control textarea"
            ></textarea>
          </div>
          <button type='submit' className="button">Enviar mensaje
            <span className="button__icon contact__button-icon">
                <FiSend/>
            </span>
          </button>
        </form>
  );
};
