import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="socials-mobile">
        <a href="https://github.com/dinardavis" className="social-link" target="_blank" rel="noopener noreferrer"><img src="imgs/social/github.svg" alt=""/></a>
        <a href="https://www.linkedin.com/in/dinardavis/" className="social-link" target="_blank" rel="noopener noreferrer"><img src="imgs/social/linkedin.svg" alt=""/></a>
        <a href="https://twitter.com/dinardavis" className="social-link" target="_blank" rel="noopener noreferrer"><img src="imgs/social/twitter.svg" alt=""/></a>
        <a href="/#" className="social-link" target="_blank" rel="noopener noreferrer"><img src="imgs/social/cv.svg" alt=""/></a>
      </div>
      <div>&copy;2023 Designed & Built by Dinar Davis</div>
    </footer>
  )
}