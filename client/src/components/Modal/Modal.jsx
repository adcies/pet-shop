import React from 'react';
import './Modal.scss';

const Modal = ({ children, handleCloseModal }) => {
  return (
    <div className='modal'>
      <button className='modal__close' onClick={handleCloseModal}>
        X
      </button>
      {children}
    </div>
  );
};

export default Modal;
