
import React from 'react';
import MobileNav from './MobileNav';
import { debounce } from './utilities/helpers';

export default function Navbar(props) {
  const [prevScroll, setPrevScroll] = React.useState(0) 
  const [visible, setVisible] = React.useState(true)
  const [mobileNavState, setMobileNavState] = React.useState(false)

  function handleToggle() {
    setMobileNavState(prevNav => !prevNav)
  }

  const handleScroll = debounce(() => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop
    if(scrollTop > prevScroll) {
      setVisible(false)
    } else {
      setVisible(true)
    }
    setPrevScroll(scrollTop)
  }, 10)

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)

  }, [prevScroll, visible, handleScroll])

  const styles = {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 25px',
    zIndex: '100',
    width: '100%',
    transition: 'top 0.3s'
  }

  
  return (
    <header className={`nav-container ${prevScroll === 0 || mobileNavState ? "" : "nav-shadow"}`} style = {{...styles, top: visible ? '0px' : '-75px', backgroundColor: mobileNavState ? "transparent" : ""}}>
      <a href="/#">
        <img className="nav-logo" style = {{opacity: mobileNavState ? "0" : "1"}}src="imgs/logo.png" alt="main logo" />
      </a>

      <div className="main-nav">
        <a href="/#about" className="nav-link">about</a>
        <a href="/#work" className="nav-link">projects</a>
        <a href="/#bonus" className="nav-link">experience</a>
        <a href="/#contact" className="nav-link">contact</a>
        <div className="dark-mode-toggle" onClick={props.toggleDarkMode}>{props.darkMode ? <i class="fa-regular fa-lightbulb"></i> : <i class="fa-solid fa-lightbulb"></i>}</div>
      </div>

      <MobileNav 
        mobileNavState={mobileNavState}
        handleToggle={handleToggle} 
      />
      
    </header>
      
  )
}