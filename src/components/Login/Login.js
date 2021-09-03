import React from "react";
import './Login.css'
import  LogoLink from '../LogoLink/LogoLink'
import {Link} from 'react-router-dom'

function Login() {
  return (
    <main className="login">
         <LogoLink />
        <h1 className="login__title">Рады видеть!</h1>
        <form className="login__form">
        <label className="login__info-input">E-mail</label>
            <input className="login__input"></input>
            <label className="login__info-input">Пароль</label>
            <input className="login__input"></input>
            <button className="login__button" type="submit">Войти</button>
        </form>
        <p className="login__paragraph">
        Ещё не зарегистрированы?&ensp;
        <Link className="login__link" to="/signup">
         Регистрация 
        </Link>
      </p>
    </main>
  );
}

export default Login;