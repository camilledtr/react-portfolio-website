import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a rel='noopener noreferrer' href="https://www.linkedin.com/in/camille-durthaller-renard/" target="_blank"><FaLinkedin/></a>
        <a rel='noopener noreferrer' href="https://github.com/camilledtr" target="_blank"><FaGithub/></a>
        <a rel='noopener noreferrer' href="https://twitter.com/dtlrnd" target="_blank"><FaTwitter/></a>
    </div>
  )
}

export default HeaderSocials