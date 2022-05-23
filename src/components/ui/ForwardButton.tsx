import React from "react";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

interface props {
  hover: boolean;
}

const ForwardButton: React.FC<props> = ({ hover }) => {
  return (
    <div>
      {hover ? (
        <div className="ml-[8px] text-[20px]">
          <MdArrowForward />
        </div>
      ) : (
        <div className="ml-[8px] text-[20px]">
          <MdKeyboardArrowRight />
        </div>
      )}
    </div>
  );
};

export default ForwardButton;
