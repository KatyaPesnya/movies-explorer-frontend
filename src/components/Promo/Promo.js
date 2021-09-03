import React from 'react';
import promo__logo from '../../images/header__logo.svg'
import NavTab from '../NavTab/NavTab'
function Promo() {
    return (
        <section className="promo">
        <img className="promo__logo" alt="картинка земного шара" src={promo__logo} />
        <div className="promo__info">
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            <p className="promo__description">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
            <NavTab />
            </div>
        </section>
    )
}

export default Promo;
