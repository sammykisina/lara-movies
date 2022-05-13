import React, { useRef, useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useRecoilValue } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { MovieTV } from "../typings";
import InfoCard from "./InfoCard";
import Modal from "./modal/Modal";
import SingleMovieOrTv from "./SingleMovieOrTv";

interface props {
  data: MovieTV[];
  condition: string;
  condition_two?: string;
}

const MovieTVRow: React.FC<props> = ({ data, condition, condition_two }) => {
  const movieRowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState<boolean>(false);

  // handle chevron click
  const handleClick = (direction: string) => {
    setIsMoved(true);

    if (movieRowRef.current) {
      const { scrollLeft, clientWidth } = movieRowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      movieRowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="group relative">
      <IoIosArrowDropleftCircle
        onClick={() => handleClick("right")}
        className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition  group-hover:opacity-100 text-[#ef4b4b]`}
      />
      <div
        ref={movieRowRef}
        className="flex overflow-x-scroll scrollbar-hide gap-3 py-2"
      >
        {data.map((TvOrMovie, TvOrMovieIndex) => (
          <SingleMovieOrTv
            key={TvOrMovieIndex}
            TvOrMovie={TvOrMovie}
            condition={condition}
            condition_two={condition_two}
          />
        ))}
      </div>

      <IoIosArrowDroprightCircle
        onClick={() => handleClick("left")}
        className={`absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition  group-hover:opacity-100 text-[#ef4b4b] ${
          !isMoved && "hidden"
        }`}
      />
    </div>
  );
};

export default MovieTVRow;
