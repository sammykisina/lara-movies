import React from "react";
import { MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { MovieTV } from "../typings";
import { MovieTVRow, MovieTvLoader } from "../components";

interface props {
  title: string;
  tvOrMoviesData: MovieTV[];
  condition: string;
  media_type: string;
  link: string;
}

const MovieOrTvIntro: React.FC<props> = ({
  title,
  tvOrMoviesData,
  condition,
  media_type,
  link,
}) => {
  return (
    <div>
      {/* title */}
      <div className="flex justify-between">
        <span className="text-white/70 text-lg font-semibold">{title}</span>

        <Link to={link} className="text-white/70 flex items-center gap-2 group">
          <span>see all</span>
          <MdChevronRight className="text-lg group-hover:scale-150 transition-5" />
        </Link>
      </div>

      {/* the data */}
      {tvOrMoviesData.length === 0 ? (
        <MovieTvLoader condition={condition} />
      ) : (
        <MovieTVRow
          data={tvOrMoviesData}
          condition={condition}
          media_type={media_type}
        />
      )}
    </div>
  );
};

export default MovieOrTvIntro;
