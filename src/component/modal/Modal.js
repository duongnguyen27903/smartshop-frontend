import React from "react";

const Modal = ({ message }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/20">
      <div className="relative bg-white w-1/2 h-1/2">{message}</div>
    </div>
  );
};

export default Modal;
