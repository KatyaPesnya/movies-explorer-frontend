import React from "react";
import './Portfolio.css'
import Arrow from '../../images/arrow.svg'

function Portfolio() {
  return (
    <section className="portfolio">
      <h3  className="portfolio__title"> Портфолио</h3>
      <ul className="portfolio__list">
          <li className="portfolio__item">Статичный сайт</li>
          <a className="portfolio__item-link" href="">
              <img className="portfolio__item-pic" src={Arrow}></img>
          </a>
          <li className="portfolio__item">Адаптивный сайт</li>
          <a className="portfolio__item-link" href="">
              <img className="portfolio__item-pic" src={Arrow}></img>
          </a>
          <li className="portfolio__item">Одностраничное приложение </li>
          <a className="portfolio__item-link" href="">
              <img className="portfolio__item-pic" src={Arrow}></img>
           </a>
    
      </ul>  
    </section>
  );
}

export default Portfolio;