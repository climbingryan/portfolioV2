import React from "react";

import cHavenImg from '../../assets/images/artifact.png';
import pwaImg from '../../assets/images/bills.png';
import pizzaImg from '../../assets/images/fast-food-2.png';
import techBlogImg from '../../assets/images/online-discussion.png'

import Project from '../Project';

const Projects = () => {

  const projects = [
    {
      title: "Collectors Haven",
      description:
        "This site was built using MERN stack along with apollo boost, GraphQl for the API, react-router-dom, and more. I worked on the UI & UX trying to make a responsive, but clean and intuitive ui. ",
      link: "https://aqueous-taiga-86315.herokuapp.com/",
      classAnimation: "collectors-haven",
      img: `${cHavenImg}`,
      alt: 'collectors haven',
      id: 1,
      key: 423,
    },
    {
      title: "Budget Tracker",
      description:
        "This was a challenge where i was to convert an existing app into a pwa. Included is a web manifest, service worker to handle offline functionality, and indexDb to store offline data for when the user goes back online",
      link: "https://safe-oasis-51981.herokuapp.com/",
      classAnimation: "pwa",
      img: `${pwaImg}`,
      alt: 'progressive web app',
      id: 2,
      key: 654,
    },
    {
      title: "Pizza Hunt",
      description:
        "This was my first mongodb fullstack application built as a lesson during my bootcamp. Using Node.js, Mongodb, mongoose",
      link: "https://boiling-ravine-77749.herokuapp.com/",
      classAnimation: "pizza-hunt",
      img: `${pizzaImg}`,
      alt: 'pizza hunt',
      id: 3,
      key: 963,
    },
    {
      title: "Tech Blogger",
      description:
        "This was my first MYSQL fullstack application built as a lesson during my bootcamp. Using Node.js, MYSQL, Sequillize & Handlebars",
      link: "https://sleepy-shore-05861.herokuapp.com/",
      classAnimation: "tech-blogger",
      img: `${techBlogImg}`,
      alt: 'tech blogger',
      id: 4,
      key: 238,
    },
  ];

  return (
    <div id="projects" className="projects-handler">
      {projects.map((project) => {
        return (
          <>
            <Project key={project.key} projects={project}/>
          </>
        );
      })}
    </div>
  );
};

export default Projects;
