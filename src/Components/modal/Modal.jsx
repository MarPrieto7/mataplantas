import React from 'react';

const Modal = ({ closeModal }) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
       
        <p>Producto añadido al carrito</p>
        <button onClick={closeModal}>Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;