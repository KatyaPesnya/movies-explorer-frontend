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
    onSearchMovies(values.search);
  };

  function handleSubmitSavedMovies(evt) {
    evt.preventDefault();
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
          required
          onChange={handleChange}
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
