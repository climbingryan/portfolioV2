import React from "react";

import cHavenImg from '../../assets/images/artifact.png';
import pwaImg from '../../assets/images/bills.png';
import pizzaImg from '../../assets/images/fast-food-2.png';
import cryptoImg from '../../assets/images/cryptocurrency.png';

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
      title: "dBank",
      description:
        "This is my first Ethereum blockchain application called dBank. Users can deposit ETH into dBank and gain interest over time, and withdraw the ETH when they need to. This app was made with solidity, web3.js, react, metaMask, truffle, and ganache",
      link: "https://github.com/climbingryan/DeFiBank",
      classAnimation: "crypto",
      img: `${cryptoImg}`,
      alt: 'dBank',
      id: 4,
      key: 238,
    },
  ];

  return (
    <>
    <svg className='upper-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#d9cef5"
          fillOpacity="1"
          d="M0,224L48,224C96,224,192,224,288,197.3C384,171,480,117,576,117.3C672,117,768,171,864,170.7C960,171,1056,117,1152,133.3C1248,149,1344,235,1392,277.3L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
        <a href="https://storyset.com/work">Illustration by Freepik Storyset</a>
      </svg>
    <div id="projects" className="projects-handler">
      {projects.map((project) => {
        return (
          <>
            <Project key={project.key} projects={project}/>
          </>
        );
      })}
    </div>
  </>
  );
};

export default Projects;
