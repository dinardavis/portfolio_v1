import React from "react";

export default function MobileNav() {
  const [mobileNav, setMobileNav] = React.useState(false)

  function handleToggle() {
    setMobileNav(prevNav => !prevNav)
  }

  return (
    <div className="mobile-nav">
      <div className="hamburger" onClick={handleToggle} >
        <div className="burger-lines nav-line1"></div>
        <div className="burger-lines nav-line2"></div>
        <div className="burger-lines nav-line2"></div>
      </div>
      

      <div className={`mobile-nav-container ${mobileNav ? "showMobileNav" : ""}`}>
        <a href="/#about" className="mobile-nav-link" onClick={handleToggle}>about</a>
        <a href="/#work" className="mobile-nav-link" onClick={handleToggle}>work</a>
        <a href="/#bonus" className="mobile-nav-link" onClick={handleToggle}>bonus</a>
        <a href="/#contact" className="mobile-nav-link" onClick={handleToggle}>contact</a>
      </div>
    </div>
  )
}