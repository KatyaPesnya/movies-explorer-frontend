import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import useForm from "../../hooks/useForm";
import  CurrentUserContext  from "../../contexts/CurrentUserContext";

function Profile({ onSignOut, onUpdateProfile}) {

  const currentUser = React.useContext(CurrentUserContext)

  const { values, handleChange, resetForm, errors, isValid } = useForm({currentUser});

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <main className="profile">
      <div className="profile__container">
        <Header />
      </div>
      <h1 className="profile__title">`Привет,{currentUser.name}!`</h1>
      <form className="profile__form" disabled={!isValid} values={values} errors={errors}>
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
            value={currentUser.name || ""}
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
            value={currentUser.email || ""}
            onChange={handleChange}
          />
        </label>

        <span className="profile__error">{errors.email || ""} </span>
        <button 
        className="profile__paragraph"
         type="submit"
           onClick={onUpdateProfile}
          >
          Редактировать
        </button>
      </form>

      <button 
      className="profile__link"
      type="button"
      onClick={onSignOut}
      >
        Выйти из аккаунта
        </button>
    </main>
  );
}

export default Profile;
