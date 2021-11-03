import React from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import Preloader from "../../components/Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

<<<<<<< HEAD
function Movies({
  movies,
  isLoading,
  isNotFound,
  onSearchMovies,
  shortFilmValue,
  setShortFilmValue,
  errorMessageMovies,
  savedMovies,
  savedMoviesAfterLike,
  deleteSavedMovies
}) {
  return (
    <main className="movies">
      <Header />
      <SearchForm
        onSearchMovies={onSearchMovies}
        shortFilmValue={shortFilmValue}
        setShortFilmValue={setShortFilmValue}
        isSaved={false}
      />
      {isLoading && <Preloader />}

      {isNotFound && 
      <p className="profile__error">
         Ничего не найдено</p>}

      {errorMessageMovies && (
        <p className="profile__error">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз.
        </p>
      )}
      <>
        <MoviesCardList 
        movies={movies} 
        savedMovies={savedMovies}
        isSaved={false}
        savedMoviesAfterLike={savedMoviesAfterLike}
        deleteSavedMovies={deleteSavedMovies}
         />
        <Footer />
      </>
=======
function Movies({ movies, isLoading, isNotFound, onSearchMovies,shortFilmValue,setShortFilmValue,errorMessageMovies}) {
  // console.log(movies)


  return (
    <main className="movies">
      <Header />
      <SearchForm onSearchMovies={onSearchMovies} shortFilmValue={shortFilmValue} setShortFilmValue={setShortFilmValue}/>
      {isLoading && <Preloader/> }
      
      {isNotFound && (
        <p className="profile__error"> Ничего не найдено</p> )}
     
      {errorMessageMovies &&  (<p className="profile__error"> 
      Во время запроса произошла ошибка. Возможно,
      проблема с соединением или сервер недоступен. 
      Подождите немного и попробуйте ещё раз.
         </p>)}
    
     <>
      <MoviesCardList movies={movies}/>
     
      <Footer / >
        </>
>>>>>>> 7fc20c32523fa92e4e3ae1280edcc51cde6fae03
    </main>
  );
}

export default Movies;
