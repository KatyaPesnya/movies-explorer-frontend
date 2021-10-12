import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";


function MoviesCardList({movies}) {

  if (!movies || !movies.length) return null
  console.log(movies)
debugger;
  return (
    <ul className="movies-card-list">
   { movies.map((movie) => (
   <MoviesCard 
   movie ={ movie}
   key ={movie.id}
       />
  ))
}  
    </ul>
  );
}
export default MoviesCardList;
