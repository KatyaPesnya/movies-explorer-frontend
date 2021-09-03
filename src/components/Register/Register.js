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
            <input className="register__input"></input>
        <label className="register__info-input">E-mail</label>
            <input className="register__input"></input>
            <label className="register__info-input">Пароль</label>
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