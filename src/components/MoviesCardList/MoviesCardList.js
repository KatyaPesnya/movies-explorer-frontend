import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Card_1 from '../../images/MoviesCard_1.jpg'
import Card_2 from '../../images/MoviesCard_2.jpg'
import Card_3 from '../../images/MoviesCard_3.jpg'
import Card_4 from '../../images/MoviesCard_4.jpg'
import Card_5 from '../../images/MoviesCard_5.jpg'
import Card_6 from '../../images/MoviesCard_6.jpg'
import Card_7 from '../../images/MoviesCard_7.jpg'
import Card_8 from '../../images/MoviesCard_8.jpg'
import Card_9 from '../../images/MoviesCard_9.jpg'
import Card_10 from '../../images/MoviesCard_10.jpg'
import Card_11 from '../../images/MoviesCard_11.jpg'
import Card_12 from '../../images/MoviesCard_12.jpg'

function MoviesCardList(props) {
    return (
        <ul className="movies-card-list">
        <MoviesCard url={Card_1} title='33 слова о дизайне' subtitle='1ч 47м'/> 
        <MoviesCard url={Card_2} title='Киноальманах "100 лет дизайна"' subtitle='1ч 47м'/> 
        <MoviesCard url={Card_3} title='В погоне за Бенкси' subtitle='1ч 47м'/> 
        <MoviesCard url={Card_4} title='Баския:Взрыв реальности' subtitle='1ч 47м'/> 
        <MoviesCard url={Card_5} title='Бег это свобода' subtitle='1ч 47м'/> 
        <MoviesCard url={Card_6} title='Книготорговцы' subtitle='1ч 47м'/> 
        <MoviesCard url={Card_7} title='Когда я думаю о Германии ночью' subtitle='1ч 47м'/> 
        <MoviesCard url={Card_8} title='Gimme Danger: История Игги и The St...' subtitle='1ч 47м'/> 
        <MoviesCard url={Card_9} title='Дженис: Маленькая девочка грустит' subtitle='1ч 47м'/> 
        <MoviesCard url={Card_10} title='Соберись перед прыжком' subtitle='1ч 47м'/> 
        <MoviesCard url={Card_11} title='Пи Джей Харви: A dog called money' subtitle='1ч 47м'/> 
        <MoviesCard url={Card_12} title='По волнам: Искусство звука в кино' subtitle='1ч 47м'/> 
        </ul>
    )
}
export default MoviesCardList