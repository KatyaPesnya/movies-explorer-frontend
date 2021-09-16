import React from "react";
import './Register.css'
import  LogoLink from '../LogoLink/LogoLink'
import {Link} from 'react-router-dom'


function Register() {
  return (
    <main className="register">
         <LogoLink />
        <h1 className="register__title">Добро пожаловать!</h1>
        <form className="register__form">
        <label className="register__info-input">Имя</label>
            <input className="register__input"  required type="text"
         minLength="2" maxLength="30"></input>
        <label className="register__info-input">E-mail</label>
            <input className="register__input"  required type="email"
         minLength="2" maxLength="30"></input>
            <label className="register__info-input"  required type="password"
         minLength="2" maxLength="30">Пароль</label>
            <input className="register__input"></input>
            <button className="register__button" type="submit">Зарегистрироваться</button>
        </form>
        <p className="register__paragraph">
        Уже  зарегистрированы?&ensp;
        <Link className="register__link" to="/signin">
           Войти  
        </Link>
      </p>
    </main>
  );
}

export default Register;