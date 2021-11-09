import React from "react";
import promo__logo from "../../images/header__logo.svg";
import NavTab from "../NavTab/NavTab";
import Header from "../Header/Header";
function Promo({ loggedIn }) {
  return (
    <section className="promo">
      <Header lending loggedIn = { loggedIn }/>
      <div className="promo__container">
        <img
          className="promo__logo"
          alt="картинка земного шара"
          src={promo__logo}
        />
        <div className="promo__info">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className="promo__description">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <NavTab />
        </div>
      </div>
    </section>
  );
}

export default Promo;
