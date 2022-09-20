import React from "react"
import './App.css';
import Navbar from './components/Navbar'
import SocialsDesktop from './components/SocialsDesktop'
import Intro from './components/Intro'
import Email from './components/Email'
import About from './components/About'
import Work from './components/Work'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  const [darkMode, setDarkMode] = React.useState(true)

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
    if(darkMode) {
      document.body.id = "dark-mode"
    } else {
      document.body.id = ""
    }
  }
  
  return (
      <>  
        <Navbar 
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
        />
        <SocialsDesktop />
        <Email />
        <div className="main-container">
          <div className='main-content'>
            <Intro />
            <About />
            <Work />
            <Skills /> 
            <Contact />
            <Footer />
          </div>
        </div>
      </>
  
  );
}

export default App;
