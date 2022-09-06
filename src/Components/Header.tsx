//Ranju
import React from 'react'
import '../Styles/Header.css'
function Header() {
  const turnerLogo = require('../images/Turners Cars logo.png')
  return (
    <div className='header'>
      <img className='title' src={String(turnerLogo)} alt="turner" />
      <div className='lang-button'>English</div>
    </div>
  )
}

export default Header