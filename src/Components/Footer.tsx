//Alyssa
import React from 'react'

function Footer() {
  const email = require("../images/Group 87.png");
  const  insta= require("../images/Group 84.png");
  const facebook = require("../images/Group 88.png");
  const home = require("../images/Group 89.png");
  const shield = require("../images/Shield Icon.png");
  return (
    <div className='header2'>
    <p>Ⓒ2021 Turners </p>
    <h4> <img src={String(home)} alt="tick" /> Branch Details</h4>
    <h4><img src={String(facebook)} alt="tick" />  Facebook</h4>
    <h4><img src={String(email)} alt="tick" /> Newsletter</h4>
    <h4><img src={String(email)} alt="tick" /> Email Alerts</h4>
    <h4><img src={String(insta)} alt="tick" /> Instagram </h4>
    <h4><img src={String(shield)} alt="tick" /> </h4>
  </div>
  )
}

export default Footer;