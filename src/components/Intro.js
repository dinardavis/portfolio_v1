import React from 'react'

export default function Intro() {
  return (
    <section className="intro">
      <div className="greeting-message">
        <div className="arrow-container">
          <div className="arrow">
            <i className="fa fa-long-arrow-right arrow-move" aria-hidden="true"></i>
          </div>
          <a className="name-sound" href="https://www.google.com/search?q=dinar+pronunciation&rlz=1C5CHFA_enUS760US760&ei=cBthYdrKL5Cq_QbdorbAAw&oq=dinar+pronunciation&gs_lcp=Cgdnd3Mtd2l6EAEYADIECAAQQzIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIECAAQQzIGCAAQBxAeMgYIABAHEB4yCAgAEAcQChAeMggIABAHEAoQHjIGCAAQBRAeSgQIQRgASgUIRBiccUoFCEQYuXJKBAhDGAJKBQhFGLlyULhuWORxYI9_aABwAngAgAGMAYgB_QSSAQMwLjWYAQCgAQHAAQE&sclient=gws-wiz"  target="_blank" rel="noreferrer">And this is pretty close to how you say my name.</a>
        </div>
        <h1 className="intro-greeting"><span className="name">Hi! I'm Dinar Davis,</span>a Software Engineer and builder of web things.</h1>
        
        <p className="intro-text">Also, I'm a Japanese birth certificate holder, globetrotter (Eaten McDonald's on 4 continents), Star Trek fanatic (TNG), and Fashionista...Interrupted.</p>
        
        <p className="intro-text">Please feel free to check out my work, and <a href="/#contact" className="pop-link">drop me a line</a> if you'd like to connect.</p>
      </div>
    </section>
  )
}