import React from "react"

export default function Contact() {
  return (
    <section className="contact section-container" id="contact">
      <div className="section-title">
        <h3 >Contact Me</h3>
        <div className="title-decoration"></div>
      </div>
      <div className="contact-info">
        <p className="contact-text">If you'd like to chat about a work opportunity, debate whether or not golf is sport, or discuss how you too are not over them killing off Tasha Yar in Season 1; I'm up for all of it!</p>

        {/* <img className="call-me-img" alt="" src="./imgs/emoji_callme.png" /> */}
        <a href="mailto:dinardavis@gmail.com?subject=I%20saw%20your%20portfolio%20and..." target="_blank" rel="noopener noreferrer" className="contact-btn">Talk soon!</a>
      </div>
    </section>
  )
}