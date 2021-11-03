import React from "react";
//import { useLocation } from "react-router-dom";


function MoviesCard({
  movie,
  savedMovies,
  isSaved,
  savedMoviesAfterLike,
  deleteSavedMovies,
}) {
  const [isLike, setIsLike] = React.useState(false);

  //const { pathname } = useLocation();

   function handleLikeMovie(e) {
    if (isLike) {
        const moviesForSearch = 
        savedMovies.find((movie) => movie.movieId === movie.id);
      
        deleteSavedMovies(moviesForSearch._id);
        console.log(moviesForSearch)
    }
    else {
      savedMoviesAfterLike(movie);
    }
    setIsLike(!isLike);
}

function handleDeleteMovie(e) {
  deleteSavedMovies(movie._id);
}
  
  const duration = (time) => {
    const hours = Math.floor(time/ 60);
    const minutes = Math.floor(time % 60);
    return `${hours}ч ${minutes}м`;
  }
  
  return (
    <li className="movies-card">
        <a target="_blank" href={movie.trailerLink} rel="noreferrer">
                <img className="movies-card__img" alt={movie.nameRU} src={ "https://api.nomoreparties.co" + movie.image.url}/>
            </a>

      <div className="movies-card__container">
        <h2 className="movies-card__title">{movie.nameRU} </h2>
        {isSaved ? (
          <button
          className="movies-card__delete"
          onClick={handleDeleteMovie}
          />
        ) :
  (
    <button
    className={isLike ? 
      `movies-card__like_active movies-card__like` : 
      `movies-card__like`}
    onClick={handleLikeMovie}
    />
  )
    }
        {/* {pathname === "/movies" ? (
          <button 
          className={isLike ? `movies-card__like_active movies-card__like` : `movies-card__like`}
           onClick={ handleClick
            //  ()=> console.log('like')
            }></button>
        ) : (
          <button className="movies-card__delete"/>
        )} */}
        <p className="movies-card__subtitle">{duration(movie.duration)}</p>
      </div>
    </li>
  );
}
export default MoviesCard;
