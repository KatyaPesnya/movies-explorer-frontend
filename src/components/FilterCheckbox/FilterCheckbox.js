import React from 'react';

function FilterCheckbox(){ 
    return(
<div className="search-unput__container">
<input  type="checkbox" id="film" className="search-unput__checkbox" preloader="Короткометражки"/>
<label for="film" className="search-input__label" >Короткометражки</label >
 </div>
    )
}

export default FilterCheckbox;