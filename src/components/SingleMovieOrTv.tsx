import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { mediaTypeState, tvOrMovieState } from "../atoms/Atoms";
import { MovieTV } from "../typings";
import { InfoCard } from "./";

interface props {
  TvOrMovie: MovieTV;
  condition: string;
  media_type: string;
  conditionTwo: string;
}

const SingleMovieOrTv: React.FC<props> = ({
  TvOrMovie,
  condition,
  media_type,
  conditionTwo,
}) => {
  const mediaType = useRecoilValue(mediaTypeState);

  return (
    <div
      className={`relative cursor-pointer  transition-all duration-200 ease-out ${
        conditionTwo === "normal"
          ? `${
              condition === "display" ? "h-[200px]" : "h-[150px]"
            }  flex min-w-[300px] `
          : ` w-full flex h-[200px]`
      } `}
    >
      <Link
        to={`/${mediaType || media_type}/${TvOrMovie.id}`}
        className={`relative w-full flex h-full
        }`}
      >
        {TvOrMovie.backdrop_path || TvOrMovie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${
              TvOrMovie.backdrop_path || TvOrMovie.poster_path
            }`}
            alt=""
            className="object-cover rounded-tl-3xl rounded-br-3xl w-full "
          />
        ) : (
          <div className="hover:bg-blue-500/30 hover: absolute top-0 w-full h-full rounded-tl-3xl rounded-br-3xl border border-blue-500"></div>
        )}

        <div className="hover:bg-blue-500/30 hover: absolute top-0 w-full h-full rounded-tl-3xl rounded-br-3xl"></div>
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
