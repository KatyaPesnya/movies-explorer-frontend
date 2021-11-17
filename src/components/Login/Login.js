import React from "react";
import "./Login.css";
import LogoLink from "../LogoLink/LogoLink";
import { Link } from "react-router-dom";
import {useForm} from "../../hooks/useForm";


function Login({ onLogin, isSuccess, setIsSuccess, }) {
  const { values, handleChange, resetForm, errors, isValid } = useForm();

 React.useEffect(() => {
   resetForm()
 },[resetForm]);

 function handleChangeInput(e) {
  handleChange(e);
  if (isSuccess.length > 0) {
      setIsSuccess('');
  }
}; 
 function handleSubmit(e){
  e.preventDefault()
  onLogin(values)
  resetForm()
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
          onChange={handleChangeInput}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
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
          onChange={handleChangeInput}
        />
        <span className="profile__error">{errors.password || ""} </span>
        <span className="profile__error"> {isSuccess} </span>
        <button className="login__button" type="submit" disabled={!isValid}>
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
