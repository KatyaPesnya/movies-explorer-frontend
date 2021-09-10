import React from 'react';
import LogoLink from '../LogoLink/LogoLink'
import { NavLink } from "react-router-dom";

function Header() {

    return (
        <header className="header">
            <LogoLink />
            
  <NavLink className="header__button" to="/signup">Регистрация</NavLink>
<NavLink className="header__button" to="/signin"> Войти</NavLink>
        </header>
    )
}

export default Header;
