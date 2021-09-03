import React from "react";
import './AboutProject.css'

function AboutProject() {
  return (
    <section className="aboutProject">
      <h2 id="about-project" className="aboutProject__title">О проекте</h2>
      <div className="aboutProject__container">
      <h3 className="aboutProject__info">Дипломный проект включал 5 этапов</h3>
      <p className="aboutProject__description">Составление плана, работу над бэкендом,
       вёрстку, добавление функциональности и финальные доработки.</p>
      <h3 className="aboutProject__info">На выполнение диплома ушло 5 недель</h3>
      <p className="aboutProject__description">У каждого этапа был мягкий и жёсткий дедлайн,
       которые нужно было соблюдать, чтобы успешно защититься.</p>
       </div>
       <div className="aboutProject__times">
         <p className="aboutProject__week">1 неделя</p>
         <p className="aboutProject__week">4 недели</p>
         <p className="aboutProject__text">Back-end</p>
         <p className="aboutProject__text">Front-end</p>
       </div>
    </section>
  );
}

export default AboutProject;