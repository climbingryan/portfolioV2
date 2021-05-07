import React from "react";

const Modal = ({ currentModalState, closeModal, info }) => {
  const handleCloseModal = () => {
    closeModal(false);
    console.log("ModalState", currentModalState);
  };

  return (
    <div className="modal-handler">
      <div className="modal-container">
        <h2 style={{ backgroundColor: "white" }}>{info.projects.title}</h2>
        <img src={`${info.projects.img}`} alt={`${info.projects.alt}`} className='modal-img'></img>
        <div className="modal-text-container">
          <p style={{ backgroundColor: "white" }}>
            {info.projects.description}
          </p>
          <a
            style={{ backgroundColor: "white" }}
            href={info.projects.link}
            target="_none"
          >
            Click To Vist the Site
          </a>
        </div>
        <button
          className={currentModalState === true ? `modal-btn` : "modal-hidden"}
          onClick={handleCloseModal}
        >
          Close Modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
