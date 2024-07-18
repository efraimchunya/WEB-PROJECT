import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import './footer.css'


const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footer_logo'>EPHRAIM HENRIQUE</a>
        <div className="footer_socials">
          <a href="https://www.linkedin.com/in/efraim-chunya-5b1697310"><BsLinkedin/></a>
          <a href="https://github.com/efraimchunya"><BsGithub/></a>
        </div>
        
        <div className="footer_copyright">
            <small>&copy;efraimchunya. All rights reserved.</small>
        </div>
    </footer>
  )
}
export default Footer;