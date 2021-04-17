import React, { useState } from "react";
import anime from 'animejs/lib/anime.es.js';

const Projects = () => {
  const [hover, setHover] = useState('');

  const projects = [
    {
      title: "Collectors Haven",
      description:
        "This site was built using MERN stack along with apollo boost, GraphQl for the API, react-router-dom, and more. I worked on the UI & UX trying to make a responsive, but clean and intuitive ui. ",
      link: "https://aqueous-taiga-86315.herokuapp.com/",
      class: "collectors-haven",
    },
    {
      title: "Budget Tracker",
      description:
        "This was a challenge where i was to convert an existing app into a pwa. Included is a web manifest, service worker to handle offline functionality, and indexDb to store offline data for when the user goes back online",
      link: "https://safe-oasis-51981.herokuapp.com/",
      class: "pwa",
    },
    {
      title: "Pizza Hunt",
      description:
        "This was my first mongodb fullstack application built as a lesson during my bootcamp. Using Node.js, Mongodb, mongoose",
      link: "https://boiling-ravine-77749.herokuapp.com/",
      class: "pizza-hunt",
    },
  ];

  const onHover = (e) => {
    e.preventDefault();

    const currentTarget = e._targetInst.pendingProps.id;

    setHover(currentTarget);

    anime({
      targets: `#${currentTarget}`,
      scale: 1.2
    });

    switch (currentTarget) {
      case ('collectors-haven'):
        const targetOne = e._targetInst.sibling.memoizedProps.id;
        const targetTwo = e._targetInst.sibling.sibling.memoizedProps.id;
        anime({
          targets: [`.${targetOne}`, `.${targetTwo}`],
          scale: .75,
        });
        break;
      case ('pwa'):
        const targetOnePwa = e._targetInst.sibling.memoizedProps.id;
        const targetTwoPwa = e._targetInst.return.child.memoizedProps.id;
        console.log(targetTwoPwa);
        anime({
          targets: `.${targetOnePwa}`,
          scale: .75,
        });
        anime({
          targets: `.${targetTwoPwa}`,
          scale: .75,
        });
        break;
      case ('pizza-hunt'):
        console.log(e);  
        const targetOnePizza = e.relatedTarget.firstChild.id;
        const targetTwoPizza = e.relatedTarget.children[1].id;
        anime({
          targets: [`.${targetOnePizza}`, `.${targetTwoPizza}`],
          scale: .75,
          direction: 'alternate'
        });
      default:
        break;
    }

  };

  const onLeave = () => {
    setHover('')
    anime({
      targets: '.project-container',
      scale: 1,
    });
  };

  return (
    <div id="projects" className="projects-handler">
      {projects.map((project) => {
        return (
          <div
            id={project.class}
            key={project.title}
            className={`project-container ${project.class}`}
            onMouseEnter={(event) => onHover(event)}
            onMouseOut={() => onLeave()}
          >
            <h2 className={project.class}>{project.title}</h2>
          </div>
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


// {
//   title: "Collectors Haven",
//   description: "This site was built using MERN stack along with apollo boost, GraphQl for the API, react-router-dom, and more. I worked on the UI & UX trying to make a responsive, but clean and intuitive ui. ",
//   link: "https://aqueous-taiga-86315.herokuapp.com/",
//   class: "collectors-haven",
// },
// {
//   title: "Budget Tracker",
//   description: "This was a challenge where i was to convert an existing app into a pwa. Included is a web manifest, service worker to handle offline functionality, and indexDb to store offline data for when the user goes back online",
//   link: "https://safe-oasis-51981.herokuapp.com/",
//   class: "pwa",
// },
// {
//   title: "Pizza Hunt",
//   description: "This was my first mongodb fullstack application built as a lesson during my bootcamp. Using Node.js, Mongodb, mongoose",
//   link: "https://boiling-ravine-77749.herokuapp.com/",
//   class: "pizza-hunt",
// },

{
  /* <div className="project-text-container">
              <h3>{project.title}</h3>
              <p>
                {project.description}{" "}
                <a
                  className="accent"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Click Here
                </a>
              </p>
            </div> */
}

// .img {
//   background-position: fixed;
//   background-size: cover;
//   overflow: none;
// }
// .collectors-haven {
//   background-image: url('./assets/images/collectors-haven.PNG');
//   width: 476px;
//   height: 220px;
// }
// .pwa {
//   background-image: url('./assets/images/pwa-screenshot.PNG');
//   width: 476px;
//   height: 220px;
// }
// .pizza-hunt {
//   background-image: url('./assets/images/pizza-hunt.PNG');
//   width: 476px;
//   height: 220px;
// }
