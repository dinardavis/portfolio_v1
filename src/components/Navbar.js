
import React from 'react';
import MobileNav from './MobileNav';
import { debounce } from './utilities/helpers';

export default function Navbar() {
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
    padding: '10px 20px',
    zIndex: '100',
    width: '100%',
    transition: 'top 0.3s',
  }
  
  return (
    <header className={`nav-container ${prevScroll && mobileNavState === 0 ? "" : "nav-shadow"}`} style = {{...styles, top: visible ? '0px' : '-75px'}}>
      <a href="/#">
        <img className="nav-logo" src="imgs/logo.png" alt="" />
      </a>

      <div className="main-nav">
        <a href="/#about" className="nav-link">about</a>
        <a href="/#work" className="nav-link">work</a>
        <a href="/#bonus" className="nav-link">bonus</a>
        <a href="/#contact" className="nav-link">contact</a>
      </div>

      <MobileNav 
        mobileNavState={mobileNavState}
        handleToggle={handleToggle} 
      />
      
    </header>
      
  )
}