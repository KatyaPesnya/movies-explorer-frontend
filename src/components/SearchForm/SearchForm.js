import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import useForm from "../../hooks/useForm";


function SearchForm({onSubmit}) {

  const { values, handleChange, isValid } = useForm();
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(values)

  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div>
        <input className="search-form__input" value ={values} type="text" placeholder="Фильм" required   onChange={handleChange} name="search"/>
        <button className="search-form__button" type="submit" value="search" disabled={!isValid}>
          Найти
        </button>
      </div>
      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;
