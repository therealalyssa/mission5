import React from 'react'
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Profile from './Components/Profile';
import Options from './Components/Options';
import Quotes from './Components/Quotes';
import FAQs from './Components/FAQs';
import Links from './Components/Links';
import Footer from './Components/Footer';

function InsurancePage() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Profile/>
        <Options/>
        <Quotes/>
        <FAQs/>
        <Links/>
        <Footer/>
    </div>
  )
}

export default InsurancePage