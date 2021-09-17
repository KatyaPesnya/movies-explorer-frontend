import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import useForm from "../../hooks/useForm";

function Profile() {
  const { values, handleChange, resetForm, errors, isValid } = useForm();

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <main className="profile">
      <div className="profile__container">
        <Header />
      </div>
      <h1 className="profile__title">Привет, Екатерина!</h1>
      <form className="profile__form" disabled={!isValid}>
        <label className="profile__info-input" htmlFor="name">
          Имя
          <input
            className="profile__input"
            name="name"
            required
            type="text"
            minLength="2"
            maxLength="30"
            placeholder="Katya"
            value={values.name || ""}
            onChange={handleChange}
          />
        </label>
        <span className="profile__error"> {errors.name || ""}</span>
        <label className="profile__info-input" htmlFor="email">
          E-mail
          <input
            className="profile__input"
            name="email"
            required
            type="email"
            placeholder="katya@mail.ru"
            value={values.email || ""}
            onChange={handleChange}
          />
        </label>

        <span className="profile__error">{errors.email || ""} </span>
        <button className="profile__paragraph" type="submit">
          {" "}
          Редактировать
        </button>
      </form>

      <Link className="profile__link">Выйти из аккаунта</Link>
    </main>
  );
}

export default Profile;
