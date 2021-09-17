import React from "react";
import "./AboutMe.css";
import img from "../../images/aboutMe.jpeg";

function AboutMe() {
  return (
    <section className="aboutMe">
      <h2 className="aboutMe__title">Студент</h2>
      <div className="aboutMe__container">
        <img className="aboutMe__pic" src={img} alt="фото студента"></img>
        <h3 className="aboutMe__name">Екатерина</h3>
        <p className="aboutMe__info">Фронтенд-разработчик, 30 лет</p>
        <p className="aboutMe__description">
          Я живу в Яранске, закончила факультет экономики БГУ им. И.Г.
          Петровского. Недавно начала кодить. В свободное время читаю книги и
          занимаюсь спортом.
        </p>
        <div className="aboutMe__links">
          <a
            className="aboutMe__link"
            href="https://vk.com/katyapesnya"
            target="_blank"
            rel="noreferrer"
          >
            Вконтакте
          </a>
          <a
            className="aboutMe__link"
            href="https://github.com/KatyaPesnya"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
