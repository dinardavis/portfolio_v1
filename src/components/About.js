import React from 'react'

export default function About() {
  return (
    <section className="about section-container" id="about">
      <div className="section-title">
        <h3 >About Me</h3>
        <div className="title-decoration"></div>
      </div>
      <div className="about-content">      
        <div className="about-text">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum at repellendus dolores molestias pariatur repellat esse blanditiis ea, quae fugit voluptates tenetur natus laborum iure! Reiciendis ea ab illum natus. Labore, in cumque eius laudantium voluptate aspernatur, recusandae deserunt magnam fuga dolores id quas nisi, suscipit voluptatibus tempora dolorum a asperiores earum consequatur molestias. Assumenda odio necessitatibus modi culpa ea.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum at repellendus dolores molestias pariatur repellat esse blanditiis ea, quae fugit voluptates tenetur natus laborum iure! Reiciendis ea ab illum natus. Labore, in cumque eius laudantium voluptate aspernatur, recusandae deserunt magnam fuga dolores id quas nisi, suscipit voluptatibus tempora dolorum a asperiores earum consequatur molestias. Assumenda odio necessitatibus modi culpa ea.</p>

          <p>Here are a few of the technologies that I working with:</p>
        </div>
        <div className="tech-stack">
          <div className="stack-logos">
            <img src="imgs/techstack/javascript.svg" alt="" />
            <img src="imgs/techstack/nodejs.svg" alt="" />
            <img src="imgs/techstack/react.svg" alt="" />
            <img src="imgs/techstack/html.svg" alt="" />
            <img src="imgs/techstack/css3.svg" alt="" />
            <img src="imgs/techstack/sass.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
  
}