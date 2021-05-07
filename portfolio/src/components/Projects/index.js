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
      key: 11,
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
      key: 22,
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
      key: 33,
    },
    {
      title: "Tech Blogger",
      description:
        "This was my first mongodb fullstack application built as a lesson during my bootcamp. Using Node.js, Mongodb, mongoose",
      link: "sleepy-shore-05861.herokuapp.com/",
      classAnimation: "tech-blogger",
      img: `${techBlogImg}`,
      alt: 'tech blogger',
      id: 4,
      key: 44,
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#d9cef5"
          fillOpacity="1"
          d="M0,288L48,272C96,256,192,224,288,224C384,224,480,256,576,272C672,288,768,288,864,282.7C960,277,1056,267,1152,240C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default Projects;
