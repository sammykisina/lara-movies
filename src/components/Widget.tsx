import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { mediaServices } from "../constants/mediaServices";
import { AiOutlinePlus } from "react-icons/ai";
import requests from "../constants/requests";
import { Link, useNavigate } from "react-router-dom";
import { MdChevronRight } from "react-icons/md";
import { PopOver, Search, MovieTVRow } from "./";
import { useRecoilState } from "recoil";
import { widgetState } from "../atoms/Atoms";
import { useAuth } from "../hooks";
import { MovieTV } from "../typings";

const Widget = () => {
  const [showWidget, setShowWidget] = useRecoilState(widgetState);
  const [netflixOriginals, setNetflixOriginals] = useState<MovieTV[]>([]);

  const { user } = useAuth();
  const navigate = useNavigate();

  // sent request
  const getWidgetData = async () => {
    const [netflixOriginals] = await Promise.all([
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
        showWidget ? "show__widget widget" : "widget"
      } text-[#afa5d9]/40 xl:show__widget mt-[2.5rem] rounded-l-md`}
    >
      <button className="close-btn">
        <FaTimes
          className=" text-[#afa5d9] text-[1rem] cursor-pointer xl:hidden"
          onClick={() => setShowWidget(false)}
        />
      </button>

      {/* the body */}
      <div>
        {/* the current user */}
        {user ? (
          <PopOver />
        ) : (
          <button
            onClick={() => {
              navigate("/login");
              setShowWidget(false);
            }}
            className="mt-4 mb-4  w-full py-2 rounded-full text-lg  text-white bg-[#e50914]"
          >
            login
          </button>
        )}

        {/* search button */}
        <Search />

        {/* media and recently view */}
        <div className="flex flex-col justify-between h-[520px]">
          {/* media services */}
          <div className="mt-10 ">
            <span className=" text-lg text-white/50">Media Service</span>

            <div className="grid grid-cols-3 gap-y-4 py-4">
              {mediaServices.map((mediaService, mediaServiceIndex) => {
                const { icon } = mediaService;
                return (
                  <button
                    key={mediaServiceIndex}
                    className="ring-1 ring-[#132f4c] w-12 h-12 flex justify-center items-center text-3xl rounded-md transition-3 hover:bg-[#132f4c]/50"
                  >
                    {icon}
                  </button>
                );
              })}

              <button className=" w-12 h-12 flex justify-center items-center rounded-full transition-5 hover:bg-[#132f4c]/50 ">
                <AiOutlinePlus className="text-3xl text-[#66b2ff]" />
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
            {netflixOriginals?.length === 0 ? (
              <div>holders</div>
            ) : (
              <MovieTVRow
                data={netflixOriginals}
                condition="watching"
                media_type="tv"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Widget;
