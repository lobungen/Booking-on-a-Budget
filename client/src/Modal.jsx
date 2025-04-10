// Modal.jsx
import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, destination }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{destination.name}</h2>
        <p>{destination.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
