import React from 'react';
import SearchForm from '../../components/SearchForm/SearchForm'
// import Preloader from '../../components/Preloader/Preloader'
import LogoLink from '../../components/LogoLink/LogoLink'
import MenuButton from '../MenuButton/MenuButton';

function Movies(props) {
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
         {/* MoviesCardList
         MoviesCard */}
        </main>
    )
}

export default Movies;