import React from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import Preloader from '../../components/Preloader/Preloader'
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Movies({ movies, isLoading, isSuccess, isNotFound, onSearchMovies}) {
   //console.log(movies)
 
  return (
    <main className="movies">
      <Header />
      <SearchForm onSearchMovies={onSearchMovies}/>
      {isLoading && <Preloader/> }
      {isNotFound && (
        <p className="profile__error"> Ничего не найдено</p> )}
     
      {isSuccess &&  (<p className="profile__error"> 
         Во время запроса произошла ошибка. Возможно, проблема с соединением
         или сервер недоступен. Подождите немного и попробуйте ещё раз{" "}
         </p>)}
     <>
      <MoviesCardList movies={movies}/>
      <button className="movies__button-continuation">Ещё</button>
      <Footer / >
        </>
    </main>
  );
}

export default Movies;
