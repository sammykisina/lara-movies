import React from "react";
import { PlaceHolder, SpinnerLoader } from "../";

interface props {
  condition: string;
}

const MovieTvLoader: React.FC<props> = ({ condition }) => {
  return (
    <div
      className={`${
        condition === "display" ? "h-[200px] " : "h-[150px] "
      } flex overflow-scroll scrollbar-hide gap-2`}
    >
      {Array.from(Array(Math.ceil(16)).keys()).map((index) => (
        <div key={index} className=" relative">
          <PlaceHolder
            extraStyles={` ${
              condition === "display" ? "h-[200px]" : "h-[150px]"
            }   min-w-[300px] rounded-tl-3xl rounded-br-3xl`}
          />

          <div className=" absolute top-0 left-0  w-full h-full flex justify-center items-center">
            <div className="bg-gray-900 p-1 rounded-full">
              <SpinnerLoader color="fill-gray-300" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieTvLoader;
