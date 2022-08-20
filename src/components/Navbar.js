import React from "react";
import Links from './Socials'

export default function Navbar() {
  return (
    <header className="nav-container">
      <a href="/#">
        <img className="nav-logo" src="imgs/logo.png" alt="" />
      </a>

      <div className="main-nav">
        <a href="/#about" className="nav-link">about</a>
        <a href="/#work" className="nav-link">work</a>
        <a href="/#bonus" className="nav-link">bonus</a>
        <a href="/#contact" className="nav-link">contact</a>
      </div>

      <div className="mobile-nav">
        <div className="burger nav-line1"></div>
        <div className="burger nav-line2"></div>
        <div className="burger nav-line2"></div>
      </div>
    </header>
      
  )
}