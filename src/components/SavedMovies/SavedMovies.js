import React from 'react';
import SearchForm from '../../components/SearchForm/SearchForm'
// import Preloader from '../../components/Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer'
import Header from '../Header/Header';

function SavedMovies(props) {
    return (
        <main className="movies">
            <div className="movies__container">
            <Header />
        </div>
         <SearchForm />
         {/* <Preloader /> */}
        <MoviesCardList />
       <Footer />
        </main>
    )
}

export default SavedMovies;