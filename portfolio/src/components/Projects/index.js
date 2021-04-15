import React from 'react'
import collectorsHaven from '../../assets/images/collectors-haven.PNG'

const Projects = () => {
    const projects = [
        {
            "title": "Collectors Haven",
            "description": "This site was built using MERN stack along with apollo boost, GraphQl for the API, react-router-dom, and more. I worked on the UI & UX trying to make a responsive, but clean and intuitive ui. ",
            "img": '../../assets/images/collectors-haven.PNG',
            "link": {collectorsHaven},
            "class": "collectors-haven",
        },
    ]
    return (
        <div className='projects-handler'>
          {projects.map((project) => {
            return (
              <div key={project.title} className='project-container'>
                <div alt='' className={project.class}></div>
                <div className='project-text-container'>
                  <h3>{project.title}</h3>
                  <p>{project.description} <a href={project.link}>Click Here</a></p>
                </div>
              </div>
            )
          })}
        </div>
    );
};

export default Projects;