import React from 'react';
import { useLocation } from "react-router-dom";
function MoviesCard(props) {
    const { pathname } = useLocation();
    function handleClick(e) {
        e.target.classList.add('movies-card__like_active');
    }
   
    return (
       <li className="movies-card">
           <img src={props.url} alt={props.title} className="movies-card__img"></img>
           <div className="movies-card__container">
         
               <h2 className="movies-card__title">{props.title} </h2>
               {pathname === "/movies" ? <button className="movies-card__like" onClick={handleClick}></button> :
                <button className="movies-card__delete" ></button>
               }
               <p className="movies-card__subtitle">{props.subtitle}</p>
               
           </div>
       </li> 
    )
}
export default MoviesCard;