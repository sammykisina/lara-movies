import React from "react";
import { Icons } from "../";
import { GrFormClose } from "react-icons/gr";

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
        <div className="flex items-center justify-end px-3 py-1 text-white">
          <Icons
            iconStyles="icon group"
            icon={
              <GrFormClose
                className={`text-white text-[1.5rem] cursor-pointer transition-all duration-[0.5s] `}
              />
            }
            purpose={() => close(false)}
          />
        </div>
        {component}
      </div>
    </div>
  );
};

export default Modal;
