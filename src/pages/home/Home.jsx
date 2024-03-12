import React from "react";
import Profile from "../../assets/home.jpeg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import '../../pages/home/home.css'


export const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>Soy Jeremy Benitez.</span>Desarrollador web
          </h1>

          <p className="home__description">
            Alguien de gustos simples, transparente y bastante creativo que, busca la mejoría constante en las áreas pertinentes
             al desarrollo y diseño frontend  y Backend de paginas web, y
            aplicaciones en un futuro.
          </p>

          <Link to="/about" className="button">
            Mas acerca de mi {""}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="color__block">

      </div>
    </section>
  );
};

export default Home;
