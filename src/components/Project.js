import React from 'react'

export default function Project(props) {
  let listItems = []
  for(let i = 0; i < 6; i++) {
    listItems.push(<li className='project-tech' key={i} >{props.tech[i]}</li>)
  }

  console.log(props.image)

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
            <a href={props.git} className="project-btn btn-1">Github</a>
            <a href={props.demo} className="project-btn btn-2">Preview</a>
          </div>
        </div>
      </div>

      <div className='project-card-desktop'>
      
        <div className="project-info">
            <h4 className="project-title">{props.title}</h4>
            <div className="project-desc">
              <p>{props.desc}</p>
            </div>
            <ul className="proj-tech-list">
              {listItems}
            </ul>
            <div className='btn-container'>
              <a href={props.git} className="project-btn btn-1">Github</a>
              <a href={props.demo} className="project-btn btn-2">Preview</a>
            </div>
          </div>
          <div className="project-card" style={{backgroundImage: props.image}}>
        </div>
      </div>
    
    </>
   
  )
}