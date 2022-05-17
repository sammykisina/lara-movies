import React from "react";
import { Link } from "react-router-dom";
import { baseURL } from "../constants/movieOrTv";
import { Cast } from "../typings";
interface props {
  singleCast: Cast;
}

const SingleCast: React.FC<props> = ({ singleCast }) => {
  return (
    <div className="relative  h-fit min-w-[150px] flex ">
      <Link
        to={``}
        className={`flex flex-col  cursor-pointer  transition duration-200 ease-out`}
      >
        {singleCast?.profile_path ? (
          <div className="h-[200px]">
            <img
              src={`${baseURL}${singleCast.profile_path}`}
              alt=""
              className="object-cover rounded-tr-lg rounded-bl-lg h-[200px]"
            />
          </div>
        ) : (
          <div className=" ring ring-[#132f4c]  min-h-[200px] min-w-[150px] rounded-tr-lg rounded-bl-lg"></div>
        )}

        <div className="w-full flex flex-col px-2 text-sm mt-3">
          <span className="hover:underline">{singleCast?.name}</span>
          <span className="text-sm">{singleCast?.character}</span>
        </div>
      </Link>
    </div>
  );
};

export default SingleCast;
