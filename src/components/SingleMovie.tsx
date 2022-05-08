import React from "react";
import { Movie } from "../typings";
import InfoCard from "./InfoCard";

interface props {
  movie: Movie;
}

const SingleMovie: React.FC<props> = ({ movie }) => {
  return (
    <div className="relative flex h-[200px] w-[300px] min-w-[300px] cursor-pointer  transition duration-200 ease-out ">
      <img
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        alt=""
        className="rounded-lg object-cover"
      />

      <InfoCard
        original_title={movie?.original_title}
        release_date={movie?.release_date}
        vote_average={movie?.vote_average}
      />
    </div>
  );
};

export default SingleMovie;
