import React from 'react'
import me from '../../assets/ebant.jpg'
import './header.css'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    
    
      <header id='home'>
        <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#contacts">Contacts</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#myprojects">My Projects</a></li>
        </ul>

        <div className="container header_container">

          <h5>Hello, I'm</h5>
          <h1>Efraim Henrico</h1>
          <h5 className="text-css">IT with Accounting Student</h5>
          <HeaderSocials/>

          <div className="me">

            <img src={me} alt='me'/>
          </div>

          <a href="#experience" className='scroll_down'>Scroll Down</a>
        </div>
      </header>

    
    
  )
}

export default Header