import React from "react";
import { portfolio } from "../../../data";
import PortfolioItem from "../../../components/PortfolioItem";
import "./portfolio.css"

export const Portfolio = () => {
  return (
    <section className="portafolio section">
      <h2 className="section__title">
        Mi <span>Portafolio</span>
      </h2>

      <div className="portfolio__container container grid">
        {portfolio.map((item) => {
          return <PortfolioItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Portfolio;
