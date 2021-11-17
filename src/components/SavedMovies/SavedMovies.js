import React, { useEffect } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import Preloader from "../../components/Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function SavedMovies({
  movies,
  savedMovies,
  isLoading,
  isNotFound,
  setIsNotFound,
  onSearchMovies,
  shortFilmValue,
  setShortFilmValue,
  errorMessageMovies,
  onSavedMoviesSearch,
  saveMovieAfterLike,
  deleteSavedMovies,
  setSavedFilteredMovies,
}) {
  useEffect(() => {
    setIsNotFound(false);
    setSavedFilteredMovies(savedMovies);
  }, [])

  return (
    <main className="movies">
      <div className="movies__container">
        <Header />
      </div>
      <SearchForm
        onSearchMovies={onSearchMovies}
        onSavedMoviesSearch={onSavedMoviesSearch}
        shortFilmValue={shortFilmValue}
        setShortFilmValue={setShortFilmValue}
        isSaved={true}
      />
      {isLoading && <Preloader />}
      {isNotFound && <p className="profile__error"> Ничего не найдено</p>}
      {errorMessageMovies && (
        <p className="profile__error">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз.
        </p>
      )}
      <MoviesCardList
        movies={movies}
        savedMovies={savedMovies}
        isSaved={true}
        saveMovieAfterLike={saveMovieAfterLike}
        deleteSavedMovies={deleteSavedMovies}
      />
      <Footer />
    </main>
  );
}

export default SavedMovies;
