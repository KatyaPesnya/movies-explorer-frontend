import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import moviesCount from "../../utils/moviesCount";

function MoviesCardList({ movies }) {
  // if (!movies || !movies.length) return null;

  const [moviesCountStart, setMoviesCountStart] = React.useState(moviesCount());
  const [newMovies, setNewMovies] = React.useState([]);

  React.useEffect(() => {
    function setResize() {
      setMoviesCountStart(moviesCount());
    }
    window.addEventListener("resize", setResize);
    return () => {
      window.removeEventListener("resize", setResize);
    };
  }, []);

  React.useEffect(() => {
    const slicedMovies = movies.slice(0, moviesCountStart.moviesCount);
    setNewMovies(slicedMovies);

  }, [movies]);

 const addMoviesButton = () => {
    const slicedMovies = movies.slice(0, newMovies.length + moviesCountStart.newMoviesCount);
     setNewMovies(slicedMovies)
  }
  return (
    <>
      <ul className="movies-card-list">
        {newMovies.length ?
          newMovies.map((movie) => {
            return <MoviesCard movie={movie} key={movie.id} />;
          }): null }
      </ul>
      {(newMovies.length && (movies.length !== newMovies.length)) ? ( 
          <button 
      className="movies__button-continuation"
      onClick={addMoviesButton}
      >    
        Ещё
      </button>)
       : null
       }
    </>
  );
}
export default MoviesCardList;
