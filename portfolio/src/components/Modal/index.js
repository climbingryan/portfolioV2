import React from "react";

const Modal = ({ currentModalState, closeModal, info }) => {
  const handleCloseModal = () => {
    closeModal(false);
    console.log("ModalState", currentModalState);
  };

  return (
    <div className="modal-handler">
      <button
        className={currentModalState === true ? `close-modal` : "modal-hidden"}
        onClick={handleCloseModal}
      >
        Close Modal
      </button>
      <h2>{info.projects.title}</h2>
      <p>{info.projects.description}</p>
      <a href={info.projects.link} target='_none'>Click To Vist the Site</a>
    </div>
  );
};

export default Modal;
