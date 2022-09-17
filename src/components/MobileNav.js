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
      

      <div className={`mobile-nav-container ${props.mobileNavState ? "show-mobile-nav" : ""}`}>
        <a href="/#about" className="mobile-nav-link" onClick={props.handleToggle}>about</a>
        <a href="/#work" className="mobile-nav-link" onClick={props.handleToggle}>work</a>
        <a href="/#bonus" className="mobile-nav-link" onClick={props.handleToggle}>bonus</a>
        <a href="/#contact" className="mobile-nav-link" onClick={props.handleToggle}>contact</a>
        <a href="/#contact" className="mobile-nav-link" onClick={props.handleToggle}>resumé</a>
      </div>
    </div>
  )
}


