import React from "react";

export default function MobileNav(props) {

  if(props.mobileNavState) {
    document.body.classList.add('fixed-position')
  } else {
    document.body.classList.remove('fixed-position')
  }
 
  return (
    <div className="mobile-nav">
      <div className="hamburger" onClick={props.handleToggle} >
        <div className={`burger-lines ${props.mobileNavState? "animate-burger" : ""}`}></div>
        <div className={`burger-lines ${props.mobileNavState? "animate-burger" : ""}`}></div>
        <div className={`burger-lines ${props.mobileNavState? "animate-burger" : ""}`}></div>
      </div>
      

      <div className={`mobile-nav-container ${props.mobileNavState ? "show-mobile-nav" : ""}`} onClick={props.handleToggle}>
        <a href="#about" className="mobile-nav-link">about</a>
        <a href="#work" className="mobile-nav-link">projects</a>
        <a href="#contact" className="mobile-nav-link">contact</a>
        <a href={require("../assets/dinardavis.pdf")} download="dinardavis" className="mobile-nav-link">resumé</a>
        <div className="mobile-nav-link dark-mode-toggle" onClick={props.toggleDarkMode}>{props.darkMode ? <i className="fa-regular fa-lightbulb"></i> : <i className="fa-solid fa-lightbulb"></i>}</div>
      </div>
    </div>
  )
}


