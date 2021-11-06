import React, { useEffect } from "react";

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

  function handleLikeMovie(e) {
    if (isLike) {
      console.log("savedMovies", savedMovies);

      const moviesForSearch = savedMovies.find((i) => {
        console.log(i.movieId, movie.id);
        return i.movieId === movie.id.toString();
      });

      deleteSavedMovies(moviesForSearch._id);
    } else {
      saveMovieAfterLike(movie);
    }
    setIsLike(!isLike);
  }

  function handleDeleteMovie(e) {
    deleteSavedMovies(movie._id);
  }

  const duration = (time) => {
    const hours = Math.floor(time / 60);
    const minutes = Math.floor(time % 60);
    return `${hours}ч ${minutes}м`;
  };

  return (
    <li className="movies-card">
      <a target="_blank" href={movie.trailerLink} rel="noreferrer">
        <img
          className="movies-card__img"
          alt={movie.nameRU}
          src={"https://api.nomoreparties.co" + movie.image.url}
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
