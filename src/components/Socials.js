import React from 'react'

export default function Links() {
  return (
      <div className="socials-desktop">
        <a href="/#" className="social-link"><img src="imgs/social/github.svg" alt=""/></a>
        <a href="/#" className="social-link"><img src="imgs/social/linkedin.svg" alt=""/></a>
        <a href="/#" className="social-link"><img src="imgs/social/twitter.svg" alt=""/></a>
        {/* <a href="/#" className="social-link"><img src="imgs/social/codepen.svg" alt=""/></a> */}
        <a href="/#" className="social-link" target="_blank"><img src="imgs/social/cv.svg" alt=""/></a>
      </div>
  )
}