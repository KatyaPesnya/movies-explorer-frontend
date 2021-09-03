import React from "react";
import './NavTab.css'
function NavTab() {
  return (
   <nav>
      <a href="#about-project" className="navTab__link">
      <button className="navTab__button">Узнать больше</button>
      </a>
      </nav>
  );
}

export default NavTab;
