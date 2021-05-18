import React, { useState } from "react";
import anime from "animejs/lib/anime.es.js";

import Modal from "../Modal";

const Project = (props) => {
  const [hover, setHover] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const onHover = (e) => {
    e.preventDefault();

    const currentTarget = e._targetInst.pendingProps.id;

    if (hover === false) {
      setHover(currentTarget);
    }

    anime({
      targets: `#${currentTarget}`,
      scale: 1.2,
    });
  };

  const onLeave = () => {
    setHover("");
    anime({
      targets: ".project-container",
      scale: 1,
    });
  };

  return (
    <>
      {openModal === true ? (
        <Modal
          currentModalState={openModal}
          closeModal={setOpenModal}
          info={props}
        />
      ) : null}
      <div
        id={props.projects.classAnimation}
        key={props.projects.title}
        className={`project-container ${props.projects.classAnimation}`}
        onMouseEnter={(event) => onHover(event)}
        onMouseOut={() => onLeave()}
        onClick={() => setOpenModal(true)}
      >
        <h2 className={`${props.projects.classAnimation} proj-title`}>{props.projects.title}</h2>
      </div>
    </>
  );
};

export default Project;
