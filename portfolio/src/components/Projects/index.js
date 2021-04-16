import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Collectors Haven",
      description: "This site was built using MERN stack along with apollo boost, GraphQl for the API, react-router-dom, and more. I worked on the UI & UX trying to make a responsive, but clean and intuitive ui. ",
      link: "https://aqueous-taiga-86315.herokuapp.com/",
      class: "collectors-haven",
    },
    {
      title: "Budget Tracker",
      description: "This was a challenge where i was to convert an existing app into a pwa. Included is a web manifest, service worker to handle offline functionality, and indexDb to store offline data for when the user goes back online",
      link: "https://safe-oasis-51981.herokuapp.com/",
      class: "pwa",
    },
    {
      title: "Pizza Hunt",
      description: "This was a challenge where i was to convert an existing app into a pwa. Included is a web manifest, service worker to handle offline functionality, and indexDb to store offline data for when the user goes back online",
      link: "sleepy-shore-05861.herokuapp.com/",
      class: "pizza-hunt",
    },
  ];
  return (
    <div id="projects" className="projects-handler">
      {projects.map((project) => {
        return (
          <div key={project.title} className="project-container">
            <div alt="" className={`img ${project.class}`}></div>
            <div className="project-text-container">
              <h3>{project.title}</h3>
              <p>
                {project.description}{" "}
                <a href={project.link} target="_blank">
                  Click Here
                </a>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
