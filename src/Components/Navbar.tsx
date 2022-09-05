//Ranju
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import '../Styles/Navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
      <div className='links'>
        <a href="/">Find a Vehicle</a>
        <a href="/">How to Buy</a>
        <a href="/">Sell your Car</a>
        <a href="/">Finance</a>
        <a href="/">Insurance</a>
      </div>
      <div className='searchContact'>
        <form className='search'>
          <button className='search-button'>
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
          </button>
          <input className='search-input' type='text' id='search' placeholder='search'></input>
        </form>
        <a href="/"> Contact</a>
      </div>
    </div>
  )
}

export default Navbar