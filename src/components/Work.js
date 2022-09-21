import React from "react"
import Project from "./Project"
import projectData from "../projectData"

export default function Work() {
  const projects = projectData.map(project => {
    return ( 
      <Project 
        key={project.id}
        title={project.title}
        desc={project.description}
        tech={project.tech}
        git={project.gitURL}
        demo={project.liveDemoURL}
      />
    )
  })

  return (
    <section className="work section-container" id="work">
      <div className="section-title">
        <h3 >Projects</h3>
        <div className="title-decoration"></div>
      </div>

      {projects}
    
    </section>
  )
}