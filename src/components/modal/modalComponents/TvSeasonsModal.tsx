import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { SetterOrUpdater, useRecoilValue, useSetRecoilState } from "recoil";
import {
  mediaTypeState,
  showTvSeasonsModalState,
  tvOrMovieState,
} from "../../../atoms/Atoms";
import { baseURL } from "../../../constants/movieOrTv";
import { TvSeason } from "../../../typings";
import Icons from "../../ui/Icons";
import { Button } from "../../";

interface props {
  original_title: string;
  original_name: string;
  first_air_date: string;
  number_of_seasons: number;
  number_of_episodes: number;
  setShowTvSeasonsModal: SetterOrUpdater<boolean>;
}

// the header inner component
const TopHeader: React.FC<props> = ({
  original_name,
  original_title,
  first_air_date,
  number_of_seasons,
  number_of_episodes,
  setShowTvSeasonsModal,
}) => (
  <div className="p-4 bg-gray-900 flex flex-col sticky top-0 z-40 left-0">
    <Icons
      iconStyles="modalBtn absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
      purpose={() => setShowTvSeasonsModal(false)}
      icon={<HiX className="h-6 w-6" />}
    />
    <span className="text-xl text-white">
      {original_name || original_title} ({first_air_date?.substring(0, 4)})
    </span>

    <div className="flex gap-4 text-sm ml-3 items-center text-gray-500/50">
      <span>{number_of_seasons} seasons available</span>
      <span>{number_of_episodes} episodes</span>
    </div>
  </div>
);

// the single season component
interface singleSeasonProps {
  poster_path: string;
  season_number: number;
  air_date: string;
  overview: string;
  name: string;
  episode_count: number;
}
const SingleSeason: React.FC<singleSeasonProps> = ({
  poster_path,
  season_number,
  air_date,
  overview,
  name,
  episode_count,
}) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="flex gap-2 ">
      {/* the episode poster */}
      <div className="relative w-[100px] h-[100px] rounded-full">
        <img
          src={`${baseURL}${poster_path}`}
          alt=""
          className="object-cover h-full w-full rounded-full"
        />

        <div className="absolute  bottom-0 right-0 rounded-full w-[30px] h-[30px] flex items-center justify-center p-3  bg-gray-500">
          {season_number}
        </div>
      </div>

      {/* the body */}
      <div className="ring-1 flex-1 px-2 py-4 my-2 rounded-tr-2xl rounded-bl-2xl transition-5 relative ">
        {/* the top season area*/}
        <div className="flex gap-2 items-center">
          {/* the air data */}
          <span className=" text-lg text-gray-500/50">{air_date}</span>

          <span className="text-xs">{name}</span>
        </div>

        <div className="ml-4 flex flex-col gap-2">
          {/* overview */}
          {overview.length === 0 ? (
            ""
          ) : (
            <p className=" text-sm transition-all transition-5">
              {readMore ? overview : `${overview.substring(0, 100)}... `}
              <button
                className=" capitalize text-blue-500"
                onClick={() => setReadMore(!readMore)}
              >
                {readMore ? "show less" : "read more"}
              </button>
            </p>
          )}
          {/* btn */}
          <Button
            btnStyles={`bg-[#ef4b4b] rounded-full px-4 py-1 w-fit`}
            title="Watch Trailer"
            purpose={() => {
              // setCurrentMovieTvId(Number(id));
              // setShowTrailerPLayModal(true);
              // setMediaType(mediaType!);
            }}
          />
        </div>

        <div className="absolute -bottom-[20px] w-12 h-12 rounded-full right-1 bg-blue-500 flex items-center justify-center text-sm">
          {episode_count} eps
        </div>
      </div>
    </div>
  );
};

const TvSeasonsModal = () => {
  const selectedTvShow = useRecoilValue(tvOrMovieState);
  const setShowTvSeasonsModal = useSetRecoilState(showTvSeasonsModalState);
  const mediaType = useRecoilValue(mediaTypeState);

  return (
    <div className=" text-white">
      {/* the top header */}
      <TopHeader
        first_air_date={selectedTvShow?.first_air_date}
        number_of_episodes={selectedTvShow?.number_of_episodes}
        number_of_seasons={selectedTvShow?.number_of_seasons}
        original_name={selectedTvShow?.original_name}
        original_title={selectedTvShow?.original_title}
        setShowTvSeasonsModal={setShowTvSeasonsModal}
      />

      <div>
        {/* episodes */}
        {mediaType === "tv" && (
          <div className="flex flex-col gap-3 px-2">
            {selectedTvShow?.seasons?.map(
              (season: TvSeason, seasonIndex: number) => (
                <SingleSeason
                  key={seasonIndex}
                  air_date={season?.air_date}
                  overview={season?.overview}
                  poster_path={season?.poster_path}
                  season_number={season?.season_number}
                  name={season?.name}
                  episode_count={season?.episode_count}
                />
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TvSeasonsModal;
