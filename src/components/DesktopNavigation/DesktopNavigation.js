import { NavLink } from 'react-router-dom';

function DesktopNavigation() {
  return (
    <nav className="navigation__desktop">
      <ul className="navigation__list">
        <li className="navigation__item"><NavLink activeClassName="navigation__link_active" className="navigation__link" exact to="/movies">Фильмы</NavLink></li>
        <li className="navigation__item"><NavLink activeClassName="navigation__link_active" className="navigation__link" exact to="/saved-movies">Сохраненные фильмы</NavLink></li>
        <li className="navigation__item navigation__item_account"><NavLink activeClassName="navigation__link_active" className="navigation__link" to="/profile">Аккаунт</NavLink></li>
      </ul>
    </nav>
  );
}
export default DesktopNavigation;