import React from 'react'

export default function SocialsDesktop() {
  return (
      <div className="socials-desktop">
        <a href="https://github.com/dinardavis" className="social-link" target="_blank" rel="noopener noreferrer"><img src="imgs/social/github.svg" alt="Github Logo"/></a>
        <a href="https://www.linkedin.com/in/dinardavis/" className="social-link" target="_blank" rel="noopener noreferrer"><img src="imgs/social/linkedin.svg" alt="LinkedIn Logo"/></a>
        <a href="https://twitter.com/dinardavis" className="social-link" target="_blank" rel="noopener noreferrer"><img src="imgs/social/twitter.svg" alt="Twitter Logo"/></a>
        <a href={require("../assets/dinardavis.pdf")} download="dinardavis" className="social-link" target="_blank" rel="noopener noreferrer"><img src="imgs/social/cv.svg" title="Download Resumé" alt="Resumé Logo"/></a>
      </div>
  )
}