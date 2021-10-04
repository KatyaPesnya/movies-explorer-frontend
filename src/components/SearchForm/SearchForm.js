import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import useForm from "../../hooks/useForm";


function SearchForm() {

  const { values, handleChange, resetForm, isValid } = useForm();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    resetForm();
  };

  return (
    <form className="search-form" >
      <div>
        <input className="search-form__input" type="text" placeholder="Фильм" required   onChange={handleChange}/>
        <button className="search-form__button" type="submit" disabled={!isValid} onSubmit={handleSubmit}>
          Найти
        </button>
      </div>
      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;
