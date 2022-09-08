//Ranju
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import InsuranceMenu from "./InsuranceMenu";

function Navbar() {
  return (
    <div className="navbar">
      <div className="links">
        <div>Find a Vehicle</div>
        <div>How to Buy a Car</div>
        <div>Sell your Car</div>
        <div>Finance</div>
        <div>
          <InsuranceMenu></InsuranceMenu>{" "}
        </div>
      </div>
      <div className="searchContact">
        <form className="search">
          <button className="search-button">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <input
            className="search-input"
            type="text"
            id="search"
            placeholder="search"
          ></input>
        </form>
        <div className="contact"> Contact</div>
      </div>
    </div>
  );
}

export default Navbar;
