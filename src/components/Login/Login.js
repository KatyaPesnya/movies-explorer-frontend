import React from "react";
import "./Login.css";
import LogoLink from "../LogoLink/LogoLink";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";

function Login({onLogin}) {
  const { values, handleChange, resetForm, errors, isValid } = useForm();

 React.useEffect(() => {
   resetForm()
 },[resetForm]);

 function handleSubmit(e){
  e.preventDefault()
  onLogin(values)
}
  return (
    <main className="login">
      <LogoLink />
      <h1 className="login__title">Рады видеть!</h1>
      <form 
      className="login__form"
      disabled={!isValid}
      onSubmit={handleSubmit}
     >
        <label className="login__info-input">E-mail</label>
        <input
          className="login__input"
          name="email"
          required
          type="email"
          minLength="2"
          maxLength="30"
          value={values.email || ""}
          onChange={handleChange}
        />
        <span className="profile__error">{errors.email || ""} </span>
        <label className="login__info-input">Пароль</label>
        <input
          className="login__input"
          name="password"
          required
          type="password"
          minLength="2"
          maxLength="30"
          value={values.password || ""}
          onChange={handleChange}
        />
        <span className="profile__error">{errors.password || ""} </span>
        <button className="login__button" type="submit">
          Войти
        </button>
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
