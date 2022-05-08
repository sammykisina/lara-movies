import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

interface props {
  original_title: string;
  release_date?: string;
  vote_average: number;
}

const InfoCard: React.FC<props> = ({
  original_title,
  release_date,
  vote_average,
}) => {
  return (
    <div className="absolute top-0 left-0 p-2 flex flex-col justify-between h-full w-full bg-[#afa5d9]/30 text-white rounded-md hover:bg-[#afa5d9]/10  transition-all duration-[0.5s] ease-out">
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
            <button className="bg-red-500/80 rounded-full px-2 py-1">
              Watch now
            </button>

            <button className="bg-gray-50/50 w-[30px] h-[30px] flex justify-center items-center rounded-full">
              <AiOutlinePlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
