import React from "react";
import { MdAdd, MdPlayArrow } from "react-icons/md";
import { Link } from "react-router-dom";
import { pages } from "../constants/pages";
import { MovieTV } from "../typings";
import SpinnerLoader from "./loader/SpinnerLoader";
import RateProgress from "./RateProgress";
import Button from "./ui/Button";
import Icons from "./ui/Icons";

interface props {
  data: MovieTV[];
  title: string;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const SpecificPagesData: React.FC<props> = ({ data, title, page, setPage }) => {
  return (
    <div>
      <div className="fixed md:ml-[calc(224px+1rem)] md:pr-[calc(224px+2rem)] xl:md:pr-[calc(500px+2rem)] top-[47px] left-0 z-50 bg-gray-900 w-full pt-3">
        {/* <span className="text-lg mx-3">Trending Now</span> */}
        <span className="mx-3 text-white/70 text-lg font-semibold">
          {title}
        </span>
        <div className="flex  mt-1 items-center justify-center gap-2 h-[30px]   w-full ">
          {pages.map((singlePage, pageIndex) => (
            <Button
              key={pageIndex}
              btnStyles={`hover:bg-[#ef4b4b]/50 w-5 h-5 rounded-full gap-2 flex items-center justify-center p-3 text-white/70 text-lg font-semibold ${
                singlePage.pageNumber === page && "bg-[#ef4b4b]"
              }`}
              title={String(singlePage.pageNumber)}
              purpose={() => setPage(singlePage.pageNumber)}
            />
          ))}
        </div>
      </div>

      {/* the movies */}
      {data.length === 0 ? (
        <div className="h-full mt-[300px]">
          <SpinnerLoader color="dark:fill-gray-300" />
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 items-center gap-3   overflow-scroll scrollbar-hide h-full mt-[150px]">
          {data.map((singleData, singleDataIndex) => (
            <div className="relative" key={singleDataIndex}>
              <Link to={`/movie/${singleData?.id}`} className="">
                <div className="flex justify-center items-center">
                  <div className="relative w-full flex h-[200px]">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${
                        singleData.backdrop_path || singleData.poster_path
                      }`}
                      alt=""
                      className="object-cover rounded-tl-3xl rounded-br-3xl w-full"
                    />
                  </div>

                  <div className=" absolute px-1 w-full top-[90px] flex flex-col">
                    <span className="truncate">
                      {singleData?.original_title}
                    </span>
                    <div className={`flex justify-between items-center`}>
                      <span>{singleData.release_date}</span>

                      <RateProgress
                        size={30}
                        progress={singleData!?.vote_average}
                        strokeWidth={4}
                        circleTwoStroke="#d2d531"
                      />
                    </div>
                  </div>
                </div>
              </Link>

              {/* btns */}
              <div className="absolute bottom-0 left-0 h-[40px] w-full z-40 bg-blue-500/40 rounded-full mb-2 flex items-center justify-between px-4">
                <Icons
                  iconStyles="icon group"
                  icon={
                    <MdPlayArrow
                      className={`text-[#66b2ff] text-[1.5rem] cursor-pointer transition-all duration-[0.5s] `}
                    />
                  }
                  // purpose={() => setShowSidebar(!showSidebar)}
                />

                <Icons
                  iconStyles="icon group"
                  icon={
                    <MdAdd
                      className={`text-[#66b2ff] text-[1.5rem] cursor-pointer transition-all duration-[0.5s] `}
                    />
                  }
                  // purpose={() => setShowSidebar(!showSidebar)}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SpecificPagesData;
