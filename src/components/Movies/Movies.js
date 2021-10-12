import React from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
//import Preloader from '../../components/Preloader/Preloader'
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Movies({ movies, isLoading, onSearchMovies}) {
  // console.log(movies)
  return (
    <main className="movies">
      <Header />
      <SearchForm onSearchMovies={onSearchMovies}/>
      {/* {isLoading && <Preloader/> } */}
    
      <MoviesCardList movies={movies}/>
      <button className="movies__button-continuation">Ещё</button>
      <Footer />
    </main>
  );
}

export default Movies;
