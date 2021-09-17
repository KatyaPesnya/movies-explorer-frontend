import React from "react";
import LogoLink from "../LogoLink/LogoLink";
import { NavLink } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
function Header({ lending }) {
  const loggedIn = false;
  return (
    <header className="header">
      <LogoLink />
      {!loggedIn && lending ? (
        <>
          <NavLink className="header__button" to="/signup">
            Регистрация
          </NavLink>
          <NavLink className="header__button" to="/signin">
            {" "}
            Войти
          </NavLink>
        </>
      ) : (
        <Navigation />
      )}
    </header>
  );
}

export default Header;
