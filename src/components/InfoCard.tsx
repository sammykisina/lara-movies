import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiPlay } from "react-icons/fi";

interface props {
  original_title: string;
  release_date?: string;
  vote_average: number;
  condition: string;
}

const InfoCard: React.FC<props> = ({
  original_title,
  release_date,
  vote_average,
  condition,
}) => {
  return (
    <div
      className={`absolute top-0 left-0 p-2 h-full w-full  text-white rounded-md  transition-all duration-[0.5s] ease-out ${
        condition === "display" ? "bg-[#afa5d9]/30 hover:bg-[#afa5d9]/10 " : ""
      }`}
    >
      {condition === "display" ? (
        <div className="flex flex-col justify-between  h-full w-full">
          <span></span>
          <div className="">
            {/* title and date */}
            <div className="flex flex-col">
              <span className="text-lg">{original_title}</span>
              <span className="text-sm">{release_date}</span>
            </div>

            {/* rate and btns */}
            <div className="flex justify-between">
              <span className="text-lg">{vote_average} rating</span>

              <div className="flex gap-2">
                <button className="bg-[#ef4b4b] rounded-full px-2 py-1">
                  Watch now
                </button>

                <button className="bg-gray-50/50 w-[30px] h-[30px] flex justify-center items-center rounded-full">
                  <AiOutlinePlus />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center  h-full w-full relative">
          <div className="flex justify-center items-center">
            <button className="bg-gray-50/80 w-[60px] h-[60px] flex justify-center items-center rounded-full ">
              <FiPlay className="w-8 h-8 text-gray-900 hover:text-[#ef4b4b]" />
            </button>
          </div>

          <div className="absolute left-0 bottom-0">{original_title}</div>
        </div>
      )}
    </div>
  );
};

export default InfoCard;
