import React, { useEffect }  from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import Preloader from "../../components/Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Movies({
  movies,
  isLoading,
  isNotFound,
  setIsNotFound,
  onSearchMovies,
  shortFilmValue,
  setShortFilmValue,
  errorMessageMovies,
  savedMovies,
  saveMovieAfterLike,
  deleteSavedMovies,
}) {
  useEffect(() => {
    setIsNotFound(false)
  }, []);

  return (
    <main className="movies">
      <Header />
      <SearchForm
        onSearchMovies= { onSearchMovies }
        shortFilmValue= { shortFilmValue }
        setShortFilmValue= { setShortFilmValue }
        isSaved= { false }
      />
      {isLoading && <Preloader />}

      {isNotFound && <p className="profile__error">Ничего не найдено</p>}

      {errorMessageMovies && (
        <p className="profile__error">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз.
        </p>
      )}
      <>
        <MoviesCardList
          movies= { movies }
          savedMovies= { savedMovies }
          isSaved= { false }
          saveMovieAfterLike= { saveMovieAfterLike }
          deleteSavedMovies= { deleteSavedMovies }
        />
        <Footer />
      </>
    </main>
  );
}

export default Movies;
