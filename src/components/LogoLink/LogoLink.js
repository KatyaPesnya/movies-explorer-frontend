import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";

function LogoLink() {
  return (
    <Link
      className="logo-link"
      to="/"
      aria-label="перейти на страницу о проекте"
    >
      <img className="logo-img" alt="логотип" src={Logo} />
    </Link>
  );
}

export default LogoLink;
