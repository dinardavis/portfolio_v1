import React from 'react'

export default function Projects() {
  return (
    <div className="projects">
      <div className="project-card">
        <div className="project-info">
          <h4 className="project-name">Project Name</h4>
          <div className="project-desc">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quo ea odit perspiciatis vel fugit repellendus consectetur inventore, voluptates natus excepturi accusantium nesciunt autem cumque veritatis alias quos eum nulla!</p>
          </div>
          <ul className="proj-tech-list">
            <li className="project-tech"> JavaScript</li>
            <li className="project-tech">React</li>
            <li className="project-tech">Node JS</li>
            <li className="project-tech"> JavaScript</li>
            <li className="project-tech">React</li>
            <li className="project-tech">Node JS</li>
          </ul>
          <a href="/#" className="project-btn btn-2">Github</a>
          <a href="/#" className="project-btn btn-1">Live Preview</a>
        </div>
      </div>
    </div>
  )
}