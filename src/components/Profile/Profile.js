import React from "react";
import './Profile.css'
import {Link } from 'react-router-dom'
import Header from '../Header/Header'

function Profile() {
  
  return (
    <main className="profile">
         <div className="profile__container">
           <Header />
         </div>
        <h1 className="profile__title">Привет, Екатерина!</h1>
        <form className="profile__form">
        <label className="profile__info-input" htmlFor="name">Имя
        <input className="profile__input" name="name"  required type="text"
         minLength="2" maxLength="30" placeholder="Katya" />
        </label>
        <span className="profile__error"> что-то пошло не так...</span>  
        <label className="profile__info-input" htmlFor="email">E-mail
        <input className="profile__input" name="email"  required type="email"
          placeholder="katya@mail.ru" />
        </label>
       
        <span className="profile__error"> что-то пошло не так...</span> 
        <button className="profile__paragraph" type="submit"> Редактировать</button>
        </form>
      
        <Link className="profile__link" >
             Выйти из аккаунта
        </Link>
    </main>
  );
}

export default Profile;