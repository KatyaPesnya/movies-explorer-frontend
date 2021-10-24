import React from "react";
import { useLocation } from "react-router-dom";


function MoviesCard({movie}) {
 
  const { pathname } = useLocation();
 //  console.log(movie)
   
  function handleClick(e) {
    e.target.classList.add("movies-card__like_active");
  }
  
  const duration = (time) => {
    const hours = Math.floor(time/ 60);
    const minutes = Math.floor(time % 60);
    return `${hours}ч ${minutes}м`;
  }
  
  return (
    <li className="movies-card">
        <a target="_blank" href={movie.trailerLink} rel="noreferrer">
                <img className="movies-card__img" alt={movie.nameRU} src={`https://api.nomoreparties.co${movie.image.url}`}/>
            </a>

      <div className="movies-card__container">
        <h2 className="movies-card__title">{movie.nameRU} </h2>
        {pathname === "/movies" ? (
          <button className="movies-card__like" onClick={handleClick}></button>
        ) : (
          <button className="movies-card__delete"></button>
        )}
        <p className="movies-card__subtitle">{duration(movie.duration)}</p>
      </div>
    </li>
  );
}
export default MoviesCard;
