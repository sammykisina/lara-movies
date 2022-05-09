import React from "react";
import { MovieTV } from "../typings";
import InfoCard from "./InfoCard";

interface props {
  TvOrMovie: MovieTV;
  condition: string;
}

const SingleMovieOrTv: React.FC<props> = ({ TvOrMovie, condition }) => {
  return (
    <div
      className={`relative flex ${
        condition === "display"
          ? "h-[200px]  min-w-[300px]"
          : "min-w-[300px] h-[150px] "
      } cursor-pointer  transition duration-200 ease-out`}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${
          TvOrMovie.backdrop_path || TvOrMovie.poster_path
        }`}
        alt=""
        className="rounded-lg object-cover"
      />

      <InfoCard
        original_title={TvOrMovie?.original_title || TvOrMovie.original_name}
        release_date={TvOrMovie?.release_date}
        vote_average={TvOrMovie?.vote_average}
        condition={condition}
      />
    </div>
  );
};

export default SingleMovieOrTv;
