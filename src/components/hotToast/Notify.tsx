import React from "react";
import { Toast } from "react-hot-toast";
import { Link } from "react-router-dom";

interface props {
  t: Toast;
  titleOne?: string;
  titleTwo?: string;
  login: boolean;
}

const Notify: React.FC<props> = ({ t, titleOne, titleTwo, login }) => {
  return (
    <div
      className={`bg-white/50 text-gray-900 px-6  w-fit  rounded-full py-2 text-sm ${
        t.visible ? "animate-enter" : "animate-leave"
      }`}
    >
      {login ? (
        <Link to="/login">Click To Login </Link>
      ) : (
        <p>
          <span className=" font-bold">
            {titleOne} {""}
          </span>
          {titleTwo}
        </p>
      )}
    </div>
  );
};

export default Notify;
