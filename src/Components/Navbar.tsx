//Ranju
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import '../Styles/Navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
      <div className='links'>
        {/* <a href="/">Find a Vehicle</a>
        <a href="/">How to Buy</a>
        <a href="/">Sell your Car</a>
        <a href="/">Finance</a>
        <a href="/">Insurance</a> */}
        <div>Find a Vehicle</div>
        <div>How to Buy</div>
        <div>Sell your Car</div>
        <div>Finance</div>
        <div>Insurance</div>
      </div>
      <div className='searchContact'>
        <form className='search'>
          <button className='search-button'>
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
          </button>
          <input className='search-input' type='text' id='search' placeholder='search'></input>
        </form>
        <div className='contact'> Contact</div>
      </div>
    </div>
  )
}

export default Navbar