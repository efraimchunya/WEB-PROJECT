import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';


const HeaderSocials = () => {
  return (
    
    <div className="header_socials">

        <a href="https://www.linkedin.com/in/efraim-chunya-5b1697310" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/efraimchunya" target="_blank" rel='noreferrer'><BsGithub/></a>
        
    </div>
  )
}

export default HeaderSocials;