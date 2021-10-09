import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import useForm from "../../hooks/useForm";


function SearchForm() {

  const { values, handleChange, isValid } = useForm();
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
  console.log('форма пустая ')
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div>
        <input className="search-form__input" type="text" placeholder="Фильм" required   onChange={handleChange} name="search"/>
        <button className="search-form__button" type="submit" value="search" disabled={!isValid} onSubmit={handleSubmit}>
          Найти
        </button>
      </div>
      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;
