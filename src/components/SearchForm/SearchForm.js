import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useFormSerch } from "../../hooks/useForm";

function SearchForm({
  isSaved,
  onSearchMovies,
  shortFilmValue,
  setShortFilmValue,
  onSavedMoviesSearch,
}) {
  const { values, handleChange } = useFormSerch();

  const handleSubmitMovies = (evt) => {
    evt.preventDefault();
    if(!evt.target.elements.search.valeue){
      evt.target.elements.search.setCustomValidity('Нужно ввести ключевое слово');
    } else {
      evt.target.elements.search.setCustomValidity('');
  
    }
    onSearchMovies(values.search);

  };

  function handleSubmitSavedMovies(evt) {
    evt.preventDefault();
    if(!evt.target.elements.search.valeue){
      evt.target.elements.search.setCustomValidity('Нужно ввести ключевое слово');
 
    } else {
      evt.target.elements.search.setCustomValidity('');
    
    }
    onSavedMoviesSearch(values.search);
  }
  return (
    <form
      className="search-form"
      onSubmit={isSaved ? handleSubmitSavedMovies : handleSubmitMovies}
    >
      <div>
        <input
          className="search-form__input"
          type="text"
          name="search"
          placeholder="Фильм"
          onChange={(evt) => {
          
            handleChange(evt);
            evt.target.setCustomValidity('')
          }}
        />
        <button className="search-form__button" type="submit">
          Найти
        </button>
      </div>
      <FilterCheckbox
        shortFilmValue={shortFilmValue}
        setShortFilmValue={setShortFilmValue}
      />
    
    </form>
  );
}

export default SearchForm;
