import React from "react";
import './AboutMe.css'
import img from '../../images/aboutMe.jpeg'

function AboutMe() {
  return (
    <section className="aboutMe">
      <h2 className="aboutMe__title">Студент</h2>
      <div className="aboutMe__container">
      <img className="aboutMe__pic" src={img} ></img>
      <h3 className="aboutMe__name">Екатерина</h3>
      <p className="aboutMe__info">Фронтенд-разработчик, 30 лет</p>
      <p className="aboutMe__description">Я родился и живу в Саратове, закончил факультет экономики СГУ.
       У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
        С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, 
        начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
        <div className="aboutMe__links">
        <a className="aboutMe__link" href="">FaceBook </a>
        <a className="aboutMe__link" href="">GitHub</a>
        </div>
        </div>
    </section>
  );
}

export default AboutMe;