import React from 'react'

export default function Project(props) {
  let listItems = []
  for(let i = 0; i < 6; i++) {
    listItems.push(<li className='project-tech' key={i} >{props.tech[i]}</li>)
  }

  return (
    <>
      <div className="project-card mobile" style={{backgroundImage: props.image}}>
        <div className="project-info">
          <h4 className="project-title">{props.title}</h4>
          <div className="project-desc">
            <p>{props.desc}</p>
          </div>
          <ul className="proj-tech-list">
            {listItems}
          </ul>
          <div className='btn-container'>
            <a href={props.git} className="project-btn btn-1" target="_blank" rel="noopener noreferrer">Github</a>
            <a href={props.demo} className="project-btn btn-2" target="_blank" rel="noopener noreferrer">Preview</a>
          </div>
        </div>
      </div>

      <section className='project-card-desktop'>
        <div className="project-info">
            <h4 className="project-title">{props.title}</h4>
            <div className="project-desc">
              <p>{props.desc}</p>
            </div>
            <ul className="proj-tech-list">
              {listItems}
            </ul>
            <div className='btn-container'>
              <a href={props.git} className="project-btn btn-1" target="_blank" rel="noopener noreferrer">Github</a>
              <a href={props.demo} className="project-btn btn-2" target="_blank" rel="noopener noreferrer">Preview</a>
            </div>    
          </div>
          <div className="project-card" style={{backgroundImage: props.image}}>
          </div>     
      </section>
    
    </>
   
  )
}