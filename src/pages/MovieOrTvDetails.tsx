import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import {
  currentMovieTvIdState,
  mediaTypeState,
  showTrailerPlayModalState,
  // modalState,
  trailerState,
} from "../atoms/Atoms";
import {
  InformationRow,
  MovieOrTvDetailsLoader,
  RateProgress,
  Button,
} from "../components";

import { baseURL } from "../constants/movieOrTv";
import { Cast, Crew, Element, MovieTV } from "../typings";
import { timeConvert } from "../utils/movieSeriesUtils";

const MovieOrTvDetails: React.FC = () => {
  const [data, setData] = useState<MovieTV | null>(null);
  const [crew, setCrew] = useState<Crew[] | null>(null);
  const [cast, setCast] = useState<Cast[] | null>(null);
  const setTrailer = useSetRecoilState(trailerState);
  const setShowTrailerPLayModal = useSetRecoilState(showTrailerPlayModalState);
  const setCurrentMovieTvId = useSetRecoilState(currentMovieTvIdState);
  const setMediaType = useSetRecoilState(mediaTypeState);

  const { id, mediaType } = useParams();
  console.log("the selected movie of series", data);

  useEffect(() => {
    if (!id) return;

    const fetchMovieOrTv = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&append_to_response=videos,images,credits`
      ).then((response) => response.json());

      setData(data);

      if (data?.videos) {
        const index = data?.videos?.results.findIndex(
          (element: Element) => element.type === "Trailer"
        );

        setTrailer(data.videos?.results[index]?.key);
      }

      if (data?.credits?.crew) {
        setCrew(data?.credits?.crew);
      }

      if (data?.credits?.cast) {
        setCast(data?.credits?.cast);
      }
    };

    fetchMovieOrTv();
  }, [id, mediaType]);

  return (
    <div>
      {data === null ? (
        <MovieOrTvDetailsLoader />
      ) : (
        <div className="relative h-[880px] md:h-[890px] lg:h-[600px]">
          {/* the bg img */}
          <img
            src={`${baseURL}${data?.backdrop_path || data?.poster_path}`}
            alt=""
            className="object-cover h-full w-full rounded-tr-2xl rounded-bl-2xl"
          />
          <div className=" absolute top-0 left-0 h-full w-full bg-blue-500/50 from-[#007efe]/80 to-[#0060c0]/60 rounded-tr-2xl rounded-bl-2xl"></div>

          <div className="absolute top-0 px-2 py-2 w-full h-full lg:flex gap-4 ">
            {/* img */}
            <div className="relative lg:w-[2500px] lg:h-[530px]">
              <img
                src={`${baseURL}${data?.backdrop_path || data?.poster_path}`}
                alt=""
                className="object-cover h-full w-full rounded-tl-3xl rounded-br-3xl"
              />

              <div className="absolute  -bottom-[30px] p-3">
                {data!?.vote_average > 0 && (
                  <RateProgress
                    size={40}
                    progress={data!?.vote_average}
                    strokeWidth={4}
                    circleTwoStroke="#d2d531"
                  />
                )}
              </div>
            </div>

            {/* the details */}
            <div className="mt-5 flex flex-col text-shadow-lg">
              <div>
                {/* the title */}
                <span className="text-2xl text-white">
                  {data?.original_title || data?.original_name} (
                  {data?.release_date?.substring(0, 4) ||
                    data?.first_air_date?.substring(0, 4)}
                  )
                </span>

                <div>
                  <div className=" flex gap-2 items-center">
                    {/* the release data */}
                    <span>{data?.release_date || data?.first_air_date}</span>
                    {/* total time */}
                    <span className="text-sm">
                      {mediaType === "movie"
                        ? timeConvert(data!?.runtime)
                        : data?.episode_run_time}
                    </span>
                  </div>
                  {/* genre */}
                  <div className="flex  truncate gap-2 text-sm text-shadow-xl">
                    {data?.genres.map((genre, genreIndex) => (
                      <span key={genreIndex}>{genre.name}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* the btns */}
              <div>
                <Button
                  btnStyles={`bg-[#ef4b4b] rounded-full px-4 py-1 w-fit`}
                  title="Watch now"
                  purpose={() => {
                    setCurrentMovieTvId(Number(id));
                    setShowTrailerPLayModal(true);
                    setMediaType(mediaType!);
                  }}
                />
              </div>

              {/* the tag */}
              <span className=" text-base font-semibold">{data?.tagline}</span>

              <div className="mt-4">
                <span className="text-lg">Overview</span>
                <p className="pl-3 font-extralight">{data?.overview}</p>
              </div>

              {/* the crew */}
              <div className="mt-5">
                <span className="text-lg ">Crew</span>
                <div className="">
                  <div className="grid grid-cols-3 md:grid-cols-3 gap-y-4">
                    {crew!.slice(0, 3).map((crew: Crew, crewIndex: number) => (
                      <div key={crewIndex} className="flex flex-col">
                        <span className=" text-gray-900 text-lg hover:underline cursor-pointer">
                          {crew?.name}
                        </span>
                        <span>{crew?.job}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* the  cast*/}
          <div className="my-3">
            {/* title */}
            <span className="text-3xl">Cast</span>
            <InformationRow data={cast} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieOrTvDetails;
