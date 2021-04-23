import React, { useState } from "react";
import anime from "animejs/lib/anime.es.js";

import Modal from "../Modal";
import ModalContent from '../ModalContent';

const Project = (props) => {
  const [hover, setHover] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const onHover = (e) => {
    e.preventDefault();

    const currentTarget = e._targetInst.pendingProps.id;

    setHover(currentTarget);

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
        <Modal currentModalState={openModal} closeModal={setOpenModal} info={props} />
      ) : null}
      <div
        id={props.projects.class}
        key={props.projects.title}
        className={`project-container ${props.projects.class}`}
        onMouseEnter={(event) => onHover(event)}
        onMouseOut={() => onLeave()}
        onClick={() => setOpenModal(true)}
      >
        <h2 className={props.projects.class}>{props.projects.title}</h2>
      </div>
    </>
  );
};

export default Project;
{
  /* <Modal>
  <h3>Description</h3>
  <p>{props.projects.description}</p>
</Modal>; */
}
