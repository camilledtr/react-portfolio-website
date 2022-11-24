import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/my-photo.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi there, I'm</h5>
        <h1>Camille Durthaller-Renard</h1>
        <h5 className="text-light">Junior Fullstack Developer</h5>
        <CTA/>

        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="me"/>
        </div>

        <a href="#contact" className="scrolldown">Scroll down</a>


      </div>
    </header>
  )
}

export default Header