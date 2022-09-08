//Ranju
import React from "react";

import LanguageMenu from "./LanguageMenu";
import "../Styles/Header.css";

function Header() {
  const turnerLogo = require("../images/Turners Cars logo.png");
  return (
    <div className="header" data-testid = "header-1">
      <img className="title" src={String(turnerLogo)} alt="turner" />
      <div className="title">
      <LanguageMenu></LanguageMenu>
      </div>
    </div>
  );
}

export default Header;
