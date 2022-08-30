import './App.css';
import Navbar from './components/Navbar'
import Socials from './components/Socials'
import Email from './components/Email'
import Intro from './components/Intro'
import About from './components/About'
import Work from './components/Work'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
      <>
        <Navbar />
        <Socials />
        {/* <Email /> */}
        <div className="main-container">
          <Intro />
          <About />
          <Work />
          <Skills /> 
          <Contact />
          <Footer />
        </div>
      </>
  
  );
}

export default App;
