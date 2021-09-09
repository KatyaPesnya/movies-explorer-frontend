import React from 'react';
import SearchForm from '../../components/SearchForm/SearchForm'
// import Preloader from '../../components/Preloader/Preloader'
import LogoLink from '../../components/LogoLink/LogoLink'
import MenuButton from '../MenuButton/MenuButton';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer'
function SavedMovies(props) {
    return (
        <main className="movies">
            <div className="movies__container">
        <LogoLink/>
        <MenuButton/>
       
        <div className="movies__buttons">
            <button className="movies__button">Фильмы</button>
            <button className="movies__button">Сохраненные фильмы</button>
            <button className="movies__button">Аккаунт</button>
            </div>
        </div>
         <SearchForm />
         {/* <Preloader /> */}
        <MoviesCardList />
       <Footer />
        </main>
    )
}

export default SavedMovies;