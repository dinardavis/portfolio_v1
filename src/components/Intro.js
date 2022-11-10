import React from 'react'

export default function Intro() {

  return (
    <section className="intro">
      <div className="greeting-message">
        <div className='greeting-container'>
          <h1 className="intro-greeting">Hi, my name is<span className="name"><a className="pulse" href="https://www.google.com/search?q=dinar+pronunciation&rlz=1C5CHFA_enUS760US760&ei=cBthYdrKL5Cq_QbdorbAAw&oq=dinar+pronunciation&gs_lcp=Cgdnd3Mtd2l6EAEYADIECAAQQzIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIECAAQQzIGCAAQBxAeMgYIABAHEB4yCAgAEAcQChAeMggIABAHEAoQHjIGCAAQBRAeSgQIQRgASgUIRBiccUoFCEQYuXJKBAhDGAJKBQhFGLlyULhuWORxYI9_aABwAngAgAGMAYgB_QSSAQMwLjWYAQCgAQHAAQE&sclient=gws-wiz"  target="_blank" rel="noreferrer">Dinar</a> Davis.</span></h1>
        </div>
        <div className='intro-text-container'>
          <p className="paragraph-text intro-text">I'm a Web Developer focused on connecting with opportunities to build engaging, useful and accessible tools for the web.</p>
          <p className="paragraph-text intro-text">If you have a project that you're interested in collaborating on, feel free to drop me a line.</p>

        </div>
        <a href="mailto:dinardavis@gmail.com?subject=I%20saw%20your%20portfolio%20and..." target="_blank" rel="noopener noreferrer" className="contact-btn">Get In Touch</a>
      </div>
    </section>
  )
}