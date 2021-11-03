import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import {useFormSerch} from "../../hooks/useForm";

<<<<<<< HEAD
function SearchForm({isSaved,
  onSearchMovies,
  shortFilmValue,
  setShortFilmValue, 
  onSavedMoviesSearch
}) {
  
  const { values, handleChange } = useFormSerch();
  
  
  const handleSubmitMovies = (evt) => {
=======
function SearchForm({ onSearchMovies, shortFilmValue, setShortFilmValue }) {
  
  const { values, handleChange } = useFormSerch();

  const handleSubmit = (evt) => {
>>>>>>> 7fc20c32523fa92e4e3ae1280edcc51cde6fae03
    evt.preventDefault();
    onSearchMovies(values.search);
  };

  function handleSubmitSavedMovies(evt) {
    evt.preventDefault();
    onSavedMoviesSearch(values.search);
}
  return (
    <form className="search-form"
     onSubmit={ isSaved ?
      handleSubmitSavedMovies : 
      handleSubmitMovies }>
      <div>
        <input
          className="search-form__input"
          type="text"
          name="search"
          placeholder="Фильм"
          required
          onChange={handleChange}
        />
        <button className="search-form__button" type="submit">
          Найти
        </button>
      </div>
<<<<<<< HEAD
      <FilterCheckbox
       shortFilmValue={shortFilmValue}
       setShortFilmValue={setShortFilmValue}
       />
=======
      <FilterCheckbox shortFilmValue={shortFilmValue} setShortFilmValue={setShortFilmValue}/>
>>>>>>> 7fc20c32523fa92e4e3ae1280edcc51cde6fae03
    </form>
  );
}

export default SearchForm;
