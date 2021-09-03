import React from 'react';
import LogoLink from '../LogoLink/LogoLink'


function Header() {
    return (
        <header className="header">
            <LogoLink />
          <button className="header__button header__button">Регистрация</button>
            <button className="header__button">Войти</button>
        </header>
    )
}

export default Header;