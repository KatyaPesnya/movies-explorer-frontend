import React from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import Preloader from '../../components/Preloader/Preloader'
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Movies({ movies, isLoading, isSuccess, setIsSuccess,isNotFound, onSearchMovies,shortFilmValue,setShortFilmValue}) {
  // console.log(movies)

  return (
    <main className="movies">
      <Header />
      <SearchForm onSearchMovies={onSearchMovies} shortFilmValue={shortFilmValue} setShortFilmValue={setShortFilmValue}/>
      {isLoading && <Preloader/> }
      {isNotFound && (
        <p className="profile__error"> Ничего не найдено</p> )}
     
      {isSuccess &&  (<p className="profile__error"> 
         {setIsSuccess}
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
