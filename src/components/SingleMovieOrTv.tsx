import React from "react";
import { Link } from "react-router-dom";
import { MovieTV } from "../typings";
import InfoCard from "./InfoCard";

interface props {
  TvOrMovie: MovieTV;
  condition: string;
  condition_two?: string;
}

const SingleMovieOrTv: React.FC<props> = ({
  TvOrMovie,
  condition,
  condition_two,
}) => {
  return (
    // <Link to={`/movie/${TvOrMovie.id}`}>
    <div
      className={`relative flex ${
        condition === "display"
          ? "h-[200px]  min-w-[300px]"
          : "min-w-[300px] h-[150px] "
      } cursor-pointer  transition duration-200 ease-out`}
    >
      <Link
        to={`/${TvOrMovie?.media_type === "movie" ? "movie" : "tv"}/${
          TvOrMovie.id
        }`}
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
      </Link>

      <InfoCard
        condition={condition}
        condition_two={condition_two}
        tvOrMovie={TvOrMovie}
      />
    </div>
    // </Link>
  );
};

export default SingleMovieOrTv;
