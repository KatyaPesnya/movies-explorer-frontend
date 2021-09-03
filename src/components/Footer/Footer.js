import React from "react";
import './Footer.css'


function Footer() {
  return (
    <section className="footer">
      <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className="footer__container">
      <nav className="footer__nav">
         <ul className="footer__links">
             <li className="footer__link"><a href="" className="footer__item">Яндекс.Практикум</a></li>
             <li className="footer__link"><a href="" className="footer__item">GitHub</a></li>
             <li className="footer__link"><a href="" className="footer__item">Facebook</a></li>
         </ul>   
      </nav>
      <p className="footer__copyright"> &copy;2021</p>
      </div>
    </section>
  );
}

export default Footer;