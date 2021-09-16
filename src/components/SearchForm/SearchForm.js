import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(){
    return( 
        <form className="search-form">
            <div>
<input className="search-form__input" type="text" placeholder="Фильм"/>
<button className="search-form__button" type="submit">Найти</button>
</div>
 <FilterCheckbox /> 
 </form>   
    )
}

export default SearchForm;