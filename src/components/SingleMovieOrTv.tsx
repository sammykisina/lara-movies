import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { mediaTypeState } from "../atoms/modalAtom";
import { MovieTV } from "../typings";
import { InfoCard } from "./";

interface props {
  TvOrMovie: MovieTV;
  condition: string;
  media_type: string;
}

const SingleMovieOrTv: React.FC<props> = ({
  TvOrMovie,
  condition,
  media_type,
}) => {
  const mediaType = useRecoilValue(mediaTypeState);

  return (
    <div
      className={`relative flex min-w-[300px] ${
        condition === "display" ? "h-[200px]" : "h-[150px] "
      } cursor-pointer  transition duration-200 ease-out`}
    >
      <Link
        to={`/${mediaType || media_type}/${TvOrMovie.id}`}
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
        tvOrMovie={TvOrMovie}
        media_type={media_type}
      />
    </div>
    // </Link>
  );
};

export default SingleMovieOrTv;
