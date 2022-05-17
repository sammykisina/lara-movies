import React, { useEffect, useState } from "react";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { BsBookmark, BsHeart, BsStar } from "react-icons/bs";
import { FiPlay } from "react-icons/fi";
import { useLocation, useParams } from "react-router-dom";
import InformationRow from "../components/InformationRow";
import RateProgress from "../components/RateProgress";
import Icons from "../components/ui/Icons";
import { baseURL } from "../constants/movieOrTv";
import { Cast, Crew, Element, MovieTV } from "../typings";
import { timeConvert } from "../utils/movieSeriesUtils";

const MovieDetails: React.FC = () => {
  // const { movieOrTv, id } = useParams();
  const [data, setData] = useState<MovieTV | null>(null);
  const [crew, setCrew] = useState<Crew[] | null>(null);
  const [cast, setCast] = useState<Cast[] | null>(null);

  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    const fetchMovieOrTv = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&append_to_response=videos,images,credits`
      ).then((response) => response.json());

      setData(data);

      if (data?.videos) {
        const index = data?.videos?.results.findIndex(
          (element: Element) => element.type === "Trailer"
        );

        // setTrailer(data.videos?.results[index]?.key);
      }

      if (data?.credits?.crew) {
        setCrew(data?.credits?.crew);
      }

      if (data?.credits?.cast) {
        setCast(data?.credits?.cast);
      }
    };

    fetchMovieOrTv();
  }, [id]);

  return (
    <div className="">
      <div className="relative h-[880px] md:h-[890px] lg:h-[600px]">
        {/* the bg img */}
        <img
          src={`${baseURL}${data?.backdrop_path || data?.poster_path}`}
          alt=""
          className="object-cover h-full w-full rounded-tr-2xl rounded-bl-2xl"
        />

        <div className=" absolute top-0 left-0 h-full w-full bg-gradient-to-br from-[#007efe]/80 to-[#0060c0]/60 rounded-tr-2xl rounded-bl-2xl"></div>

        <div className="absolute top-0 px-2 py-2 w-full h-full lg:flex gap-4 ">
          {/* img */}
          <div className="relative lg:w-[1000px] lg:h-[530px]">
            <img
              src={`${baseURL}${data?.backdrop_path || data?.poster_path}`}
              alt=""
              className="object-cover h-full w-full rounded-tl-3xl rounded-br-3xl"
            />

            <div className="absolute  -bottom-[30px] p-3">
              {/* <RateProgress
                size={40}
                progress={data!?.vote_average}
                strokeWidth={4}
                circleTwoStroke="#d2d531"
              /> */}
            </div>
          </div>

          {/* the details */}
          <div className="mt-5 flex flex-col text-shadow-lg">
            {/* the title */}
            <span className="text-2xl text-white">
              {data?.original_title || data?.original_name} (
              {data?.release_date?.substring(0, 4)})
            </span>

            <div>
              <div className=" flex gap-2 items-center">
                {/* the release data */}
                <span>{data?.release_date}</span>
                {/* total time */}
                <span className="text-sm">{timeConvert(data!?.runtime)}</span>
              </div>
              {/* genre */}
              <div className="flex  truncate gap-2 text-sm text-shadow-xl">
                {data?.genres.map((genre, genreIndex) => (
                  <span key={genreIndex}>{genre.name}</span>
                ))}
              </div>
            </div>

            {/* the btns */}
            <div className="flex gap-3 my-3 rounded-md bg-gray-900 py-2 px-3 items-center justify-center ">
              <Icons
                iconStyles="group p-1 rounded-lg ring-1 ring-[#132f4c] hover:bg-[#132f4c]/50 cursor-pointer"
                icon={
                  <AiOutlineFolderAdd
                    className={`text-[#66b2ff] text-[1.5rem] cursor-pointer transition-all duration-[0.5s] `}
                  />
                }
                // purpose={() => setShowSidebar(!showSidebar)}
              />
              <Icons
                iconStyles="group p-1 rounded-lg ring-1 ring-[#132f4c] hover:bg-[#132f4c]/50 cursor-pointer"
                icon={
                  <BsBookmark
                    className={`text-[#66b2ff] text-[1.5rem] cursor-pointer transition-all duration-[0.5s] `}
                  />
                }
                // purpose={() => setShowSidebar(!showSidebar)}
              />
              <Icons
                iconStyles="group p-1 rounded-lg ring-1 ring-[#132f4c] hover:bg-[#132f4c]/50 cursor-pointer"
                icon={
                  <BsHeart
                    className={`text-[#66b2ff] text-[1.5rem] cursor-pointer transition-all duration-[0.5s] `}
                  />
                }
                // purpose={() => setShowSidebar(!showSidebar)}
              />

              <Icons
                iconStyles="group p-1 rounded-lg ring-1 ring-[#132f4c] hover:bg-[#132f4c]/50 cursor-pointer"
                icon={
                  <BsStar
                    className={`text-[#66b2ff] text-[1.5rem] cursor-pointer transition-all duration-[0.5s] `}
                  />
                }
                // purpose={() => setShowSidebar(!showSidebar)}
              />

              <Icons
                iconStyles="group p-1 rounded-lg ring-1 ring-[#132f4c] hover:bg-[#132f4c]/50 cursor-pointer"
                icon={
                  <FiPlay
                    className={`text-[#66b2ff] text-[1.5rem] cursor-pointer transition-all duration-[0.5s] `}
                  />
                }
                // purpose={() => setShowSidebar(!showSidebar)}
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
                {crew === null ? (
                  <div></div>
                ) : (
                  <div className="grid grid-cols-3 md:grid-cols-3 gap-y-4">
                    {crew!.slice(0, 5).map((crew: Crew, crewIndex: number) => (
                      <div className="flex flex-col">
                        <span className=" text-gray-900 text-lg hover:underline cursor-pointer">
                          {crew?.name}
                        </span>
                        <span>{crew?.job}</span>
                      </div>
                    ))}
                  </div>
                )}
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
    </div>
  );
};

export default MovieDetails;