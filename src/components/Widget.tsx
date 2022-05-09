import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../contexts/AppContext";
import Image from "../assets/images/sammy profile pic.jpg";
import { BiChevronDown, BiGitPullRequest } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { mediaServices } from "../constants/mediaServices";
import { AiOutlinePlus } from "react-icons/ai";
import requests from "../constants/requests";
import { Genre, MovieTV } from "../typings";
import SingleGenre from "./SingleGenre";
import { Link } from "react-router-dom";
import { MdChevronRight } from "react-icons/md";
import MovieTVRow from "./MovieTVRow";

const Widget = () => {
  const { toggleWidget, setToggleWidget } = useGlobalContext();
  const [netflixOriginals, setNetflixOriginals] = useState<MovieTV[]>([]);

  // sent request
  const getWidgetData = async () => {
    const [genre, netflixOriginals] = await Promise.all([
      fetch(requests.fetchGenres).then((res) => res.json()),
      fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    ]);

    setNetflixOriginals(netflixOriginals?.results);
  };

  useEffect(() => {
    getWidgetData();
  }, []);

  return (
    <section
      className={`p-3 ${
        toggleWidget ? "show__widget widget" : "widget"
      } text-[#afa5d9]/40 xl:show__widget mt-[3rem] rounded-l-md`}
    >
      <button className="close-btn">
        <FaTimes
          className=" text-[#afa5d9] text-[1rem] cursor-pointer xl:hidden"
          onClick={() => setToggleWidget(false)}
        />
      </button>

      {/* the body */}
      <div>
        {/* the current user */}
        <div className="flex gap-3 items-center mt-4 mb-4">
          <div className="w-12 h-12">
            <img src={Image} alt="" className=" object-cover  rounded-full" />
          </div>

          <div className="flex items-center">
            <div className="flex flex-col">
              <span className=" text-white">Sammy K</span>
              <span>sammy.k.mutua@gmail.com</span>
            </div>

            <BiChevronDown className="w-10 h-10 cursor-pointer" />
          </div>
        </div>

        {/* search input */}
        <div className="flex gap-3 px-2 rounded-md bg-slate-900/50 py-1 ">
          <FiSearch className="w-10 h-10" />
          <input
            type="text"
            className="w-full bg-transparent outline-none"
            placeholder="Search in Lara"
          />
          <BiGitPullRequest className="w-10 h-10 rotate-90" />
        </div>

        {/* media and recently view */}
        <div className="flex flex-col justify-between h-[520px]">
          {/* media services */}
          <div className="mt-10 ">
            <span className=" text-lg text-white">Media Service</span>

            <div className="grid grid-cols-3 gap-y-4 py-4">
              {mediaServices.map((mediaService, mediaServiceIndex) => {
                const { id, icon } = mediaService;
                return (
                  <button
                    key={mediaServiceIndex}
                    className="border w-12 h-12 flex justify-center items-center text-3xl rounded-full hover:text-[#ef4b4b] transition-3"
                  >
                    {icon}
                  </button>
                );
              })}

              <button className="bg-gray-50/50 w-12 h-12 flex justify-center items-center rounded-full transition-5 hover:bg-[#ef4b4b] ">
                <AiOutlinePlus className="text-3xl text-white" />
              </button>
            </div>
          </div>

          {/* recently viewed */}
          <div className=" mt-7">
            {/* title */}
            <div className="flex justify-between">
              <span className="text-white/70 text-lg font-semibold">
                Recently Viewed
              </span>

              <Link to="" className="text-white/70 flex items-center gap-2">
                <span>see all</span>
                <MdChevronRight className="text-lg" />
              </Link>
            </div>

            {/* movies */}
            {netflixOriginals.length === 0 ? (
              <div>holders</div>
            ) : (
              <MovieTVRow data={netflixOriginals} condition="watching" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Widget;
