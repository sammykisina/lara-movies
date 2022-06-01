import React from "react";

interface props {
  component: React.ReactNode;
  modalState: boolean;
  close: React.Dispatch<React.SetStateAction<boolean>>;
  type: string;
}

const Modal: React.FC<props> = ({ component, modalState, close, type }) => {
  return (
    <div className={`${modalState ? "modal-wrapper show" : "modal-wrapper"}`}>
      <div
        className={`overflow-y-scroll scrollbar-hide modal  ${
          type === "autoModal" ? "autoHeight" : "modalHeight"
        }`}
      >
        {component}
      </div>
    </div>
  );
};

export default Modal;
