
function FilterCheckbox() {
  return (
     <div className="search-unput"> 
      <label htmlFor="film" className="search-unput__container"> 
        <input className="search-unput__checkbox" type="checkbox" id="film" /> 
        <span className="search-unput__slider" /> 
      </label>
      <p className="search-unput__text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;