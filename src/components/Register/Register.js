import React from "react";
import "./Register.css";
import LogoLink from "../LogoLink/LogoLink";
import { Link } from "react-router-dom";
import {useForm} from "../../hooks/useForm";



function Register({onRegister, isSuccess,  setIsSuccess}) {
  const { values, handleChange, resetForm, errors, isValid } = useForm();

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleChangeInput(e) {
    handleChange(e);
    if (isSuccess.length > 0) {
        setIsSuccess('');
    }
};
  function handleSubmit(e){
    e.preventDefault();
    onRegister(values);
    resetForm();
  }
  function deleteError() {
    resetForm();
  
}
  return (
    <main className="register">
      <LogoLink />
      <h1 className="register__title">Добро пожаловать!</h1>
 
      <form className="register__form" disabled={!isValid} onSubmit={handleSubmit} >
        <label className="register__info-input">Имя</label>
        <input
          className="register__input"
          required
          type="text"
          minLength="2"
          maxLength="30"
          name="name"
          pattern="[а-яА-Яa-zA-ZёË\- ]{1,}"
          value={values.name || ""}
          onChange={handleChangeInput}
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
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          value={values.email || ""}
          onChange={handleChangeInput}
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
          onChange={handleChangeInput}
        />
        <span className="profile__error">{errors.password || ""} </span>
         <span className="profile__error">  {isSuccess} </span>
        <button className="register__button" type="submit" disabled={!isValid}>
          Зарегистрироваться
        </button>
      </form>
 
      <p className="register__paragraph">
        Уже зарегистрированы?&ensp;
        <Link className="register__link" to="/signin" onClick={deleteError}>
          Войти
        </Link>
      </p>
    </main>
  );
}

export default Register;
