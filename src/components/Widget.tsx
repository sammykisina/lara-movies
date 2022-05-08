import React, { SyntheticEvent, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../contexts/AppContext";

const Widget = () => {
  const { toggleWidget, setToggleWidget } = useGlobalContext();
  return (
    <div
      className={`p-3 ${
        toggleWidget ? "show__widget widget" : "widget"
      } text-[#afa5d9]/40 xl:show__widget`}
    >
      <button className="close-btn">
        <FaTimes
          className=" text-[#afa5d9] text-[1rem] cursor-pointer xl:hidden"
          onClick={() => setToggleWidget(false)}
        />
      </button>
    </div>
  );
};

export default Widget;
