import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Genre } from "../typings";
interface props {
  genre: Genre;
}

const SingleGenre: React.FC<props> = ({ genre }) => {
  return (
    <button className=" bg-gray-900 px-3 py-1 flex  w-fit my-2 items-center justify-between gap-4 rounded-full">
      <span>{genre.name}</span>
      <AiOutlinePlus className="text-white" />
    </button>
  );
};

export default SingleGenre;
