import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import "../Navigation/Navigation.css";

function MobileNavigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const history = useHistory();
  function openMenu() {
    setIsOpen(!isOpen);
  }
  function closeMenu() {
    setIsOpen(false);
  }
  return (
    <>
      {!isOpen ? <button className="menu-button" onClick={openMenu} /> : ""}
      {isOpen ? (
        <nav className="navigation__mobile">
          <div className="navigation__container">
            <button className="navigation__close" onClick={closeMenu} />
            <ul className="navigation__list navigation__list_mob">
              <li className="navigation__item">
                {" "}
                <NavLink
                  activeClassName="navigation__link_active navigation__link_active_mob"
                  className="navigation__link"
                  exact
                  to="/"
                >
                  Главная
                </NavLink>
              </li>
              <li className="navigation__item">
                <NavLink
                  activeClassName="navigation__link_active navigation__link_active_mob"
                  className="navigation__link"
                  to="/movies"
                >
                  Фильмы
                </NavLink>
              </li>
              <li className="navigation__item">
                <NavLink
                  activeClassName="navigation__link_active navigation__link_active_mob"
                  className="navigation__link"
                  to="/saved-movies"
                >
                  Сохраненные фильмы
                </NavLink>
              </li>
            </ul>
            <button
              className="navigation__item navigation__item_account navigation__item_account_mob"
              onClick={() => history.push("/profile")}
            >
              Аккаунт{" "}
            </button>
          </div>
        </nav>
      ) : (
        ""
      )}
    </>
  );
}
export default MobileNavigation;
