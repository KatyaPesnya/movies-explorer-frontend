import React from "react";
import "./Register.css";
import LogoLink from "../LogoLink/LogoLink";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import Preloader from "../Preloader/Preloader";


function Register({onRegister, isSuccess, isLoading}) {
  const { values, handleChange, resetForm, errors, isValid } = useForm();

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleSubmit(e){
    e.preventDefault();
    onRegister(values);
    resetForm();
  }
  return (
    <main className="register">
      <LogoLink />
      <h1 className="register__title">Добро пожаловать!</h1>
      {isLoading ? <Preloader /> :(
      <form className="register__form" disabled={!isValid} onSubmit={handleSubmit} >
        <label className="register__info-input">Имя</label>
        <input
          className="register__input"
          required
          type="text"
          minLength="2"
          maxLength="30"
          name="name"
          value={values.name || ""}
          onChange={handleChange}
        />
        <span className="profile__error">{errors.name || ""} </span>
        <label className="register__info-input">E-mail</label>
        <input
          className="register__input"
          required
          type="email"
          minLength="2"
          maxLength="30"
          name="email"
          value={values.email || ""}
          onChange={handleChange}
        />
        <span className="profile__error">{errors.email || ""} </span>
        <label className="register__info-input">Пароль</label>
        <input
          className="register__input"
          required
          type="password"
          minLength="8"
          maxLength="30"
          name="password"
          value={values.password || ""}
          onChange={handleChange}
        />
        <span className="profile__error">{errors.password || ""} </span>
        {isSuccess ? (<span className="profile__error"> Что-то пошло не так! Попробуйте еще раз. </span>
  ) : ""}
        <button className="register__button" type="submit" disabled={!isValid}>
          Зарегистрироваться
        </button>
      </form>
      )}
      <p className="register__paragraph">
        Уже зарегистрированы?&ensp;
        <Link className="register__link" to="/signin">
          Войти
        </Link>
      </p>
    </main>
  );
}

export default Register;
