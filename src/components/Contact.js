import React from "react"

export default function Contact() {
  return (
    <section className="contact section-container" id="contact">
      <div className="section-title">
        <h3 >Contact Me</h3>
        <div className="title-decoration"></div>
      </div>
      <div className="contact-info">
        <p className="contact-text">I am currently open to exploring new opportunities, so if you'd like to discuss how I might add to your project or team please feel free to reach out!</p>

        <a href="mailto:dinardavis@gmail.com?subject=I%20saw%20your%20portfolio%20and..." target="_blank" rel="noopener noreferrer" className="contact-btn">Say Hi!</a>
      </div>
    </section>
  )
}