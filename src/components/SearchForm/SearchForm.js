import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ onSearchMovies }) {
  const [message, setMessage] = React.useState("");

  const handleChange = (evt) => {
    setMessage(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSearchMovies(message);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div>
        <input
          className="search-form__input"
          type="text"
          name="message"
          value={message || ''}
          placeholder="Фильм"
          required
          onChange={handleChange}
        />
        <button className="search-form__button" type="submit">
          Найти
        </button>
      </div>
      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;
