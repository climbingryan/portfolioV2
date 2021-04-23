import React from "react";

const Modal = ({ hoverState, children, onClose }) => {
  console.log(hoverState);

  return (
    <div className='modal-handler'>
      <button className='close-modal' onClick={onClose}>Close Modal</button>
      {children}
    </div>
  );
};

export default Modal;
