import React from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
// import Preloader from '../../components/Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
function Movies(props) {
    return (
        <main className="movies">
        <Header />
         <SearchForm />
         {/* <Preloader /> */}
        <MoviesCardList />
        <button className="movies__button-continuation">Ещё</button>
       <Footer />
        </main>
    )
}

export default Movies;