import React, { useEffect } from "react";
import { MINUTES } from "../../config/constants";

function MoviesCard({
  movie,
  savedMovies = [],
  isSaved,
  saveMovieAfterLike,
  deleteSavedMovies,
}) {
  const [isLike, setIsLike] = React.useState(false);

  useEffect(() => {
    const isLiked = savedMovies.some((mov) => String(movie.id) === mov.movieId);
    setIsLike(isLiked);
  }, [savedMovies]);

  function handleLikeMovie(evt) {
    evt.preventDefault()
    if (isLike) {
      const moviesForSearch = savedMovies.find((i) => {
        return i.movieId === movie.id.toString();
      });
      deleteSavedMovies(moviesForSearch._id);
    } else {
      saveMovieAfterLike(movie);
    }
    setIsLike(!isLike);
  }

  function handleDeleteMovie(evt) {
    evt.preventDefault()
    deleteSavedMovies(movie._id);
  }

  const duration = (time) => {
    const hours = Math.floor(time / MINUTES);
    const minutes = Math.floor(time % MINUTES);
    return `${hours}ч ${minutes}м`;
  };

  return (
    <li className="movies-card">
      <a target="_blank" href={movie.trailerLink} rel="noreferrer">
        <img
          className="movies-card__img"
          alt={movie.nameRU}
          src={ movie.image.url.includes('http') ? movie.image.url : ("https://api.nomoreparties.co" + movie.image.url) }
        />
      </a>

      <div className="movies-card__container">
        <h2 className="movies-card__title">{movie.nameRU} </h2>
        {isSaved ? (
          <button className="movies-card__delete" onClick={handleDeleteMovie} />
        ) : (
          <button
            className={
              isLike
                ? `movies-card__like_active movies-card__like`
                : `movies-card__like`
            }
            onClick={handleLikeMovie}
          />
        )}
        <p className="movies-card__subtitle">{duration(movie.duration)}</p>
      </div>
    </li>
  );
}
export default MoviesCard;
