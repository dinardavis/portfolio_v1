import React from "react"
import { useRef } from "react";
import { useInView } from "framer-motion";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="contact section-container" id="contact">
      <span
        style={{
          transform: isInView ? "none" : "translateX(700px)",
          opacity: isInView ? 1 : 0,
          transition: "all .9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function Contact() {
  return (
    <>
      <Section>
        <div className="section-title">
          <h3 >Contact</h3>
          <div className="title-decoration"></div>
        </div>
        <div className="contact-info">
          <p className="contact-text">If you'd like to chat about a work opportunity, debate whether or not golf is sport, or discuss how you too are not over them killing off Tasha Yar in Season 1; I'm up for all of it!</p>
          <a href="mailto:dinardavis@gmail.com?subject=I%20saw%20your%20portfolio%20and..." target="_blank" rel="noopener noreferrer" className="contact-btn contact">Talk soon!</a>
        </div>
      </Section>
    </>
  )
}