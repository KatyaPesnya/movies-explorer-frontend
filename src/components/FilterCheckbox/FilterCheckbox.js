function FilterCheckbox({ shortFilmValue, setShortFilmValue }) {
  return (
    <div className="search-unput">
      <label htmlFor="film" className="search-unput__container">
        <input
          className="search-unput__checkbox"
          type="checkbox"
          id="film"
          value={shortFilmValue}
          checked={shortFilmValue}
          onChange={() => {
            setShortFilmValue(!shortFilmValue);
          }}
        />
        <span className="search-unput__slider" />
      </label>
      <p className="search-unput__text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
