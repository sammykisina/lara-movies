import React from "react";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();

  return (
    // <Link to={`/movie/${TvOrMovie.id}`}>
    <div
      className={`relative flex min-w-[300px] ${
        condition === "display" ? "h-[200px]" : "h-[150px] "
      } cursor-pointer  transition duration-200 ease-out`}
    >
      <Link
        to={`/${location?.pathname === "/" ? "movie" : "tv"}/${TvOrMovie.id}`}
        className={`relative w-full flex h-full
        } cursor-pointer  transition duration-200 ease-out`}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${
            TvOrMovie.backdrop_path || TvOrMovie.poster_path
          }`}
          alt=""
          className="object-cover rounded-tl-3xl rounded-br-3xl w-full"
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
