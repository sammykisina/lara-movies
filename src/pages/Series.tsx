import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";
import MovieTvLoader from "../components/loader/MovieTvLoader";
import MovieTVRow from "../components/MovieTVRow";
import requests from "../constants/requests";
import useAuth from "../hooks/useAuth";
import useList from "../hooks/useList";
import { MovieTV, TV } from "../typings";

const Series = () => {
  const [trendingTvs, setTrendingTvs] = useState<MovieTV[]>([]);

  const [topRatedTvs, setTopRatedTvs] = useState<MovieTV[]>([]);
  const [popularTvs, setPopularTvs] = useState<MovieTV[]>([]);
  const { user } = useAuth();

  const list = useList(user?.uid);

  let tvsInList = list.filter((singleTv: TV) => singleTv.media_type === "tv");

  // useEffect to fetch api data when the component loads
  const getData = async () => {
    const [trendingTvs, topRatedTvs, popularTvs] = await Promise.all([
      fetch(requests.fetchTopRatedTv).then((res) => res.json()),
      fetch(requests.fetchTopRatedTv).then((res) => res.json()),
      fetch(requests.fetchPopularTvs).then((res) => res.json()),
    ]);

    setTrendingTvs(trendingTvs?.results);
    setTopRatedTvs(topRatedTvs?.results);
    setPopularTvs(popularTvs?.results);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="z-10">
      {/* trending movies */}
      <div>
        {/* title */}
        <div className="flex justify-between">
          <span className="text-white/70 text-lg font-semibold">
            Trending Tvs
          </span>

          <Link to="" className="text-white/70 flex items-center gap-2">
            <span>see all</span>
            <MdChevronRight className="text-lg" />
          </Link>
        </div>

        {/* movies */}
        {trendingTvs.length === 0 ? (
          <MovieTvLoader condition="display" extraCondition="trending" />
        ) : (
          <MovieTVRow data={trendingTvs} condition="display" />
        )}
      </div>

      {/* My List */}
      <div className=" mt-10">
        {/* title */}
        <div className="flex justify-between">
          <div className="text-white/70 text-lg font-semibold flex flex-col">
            <span>
              My List <span className=" text-xs">tv</span>
            </span>
            {tvsInList.length === 0 ? (
              <span className="text-sm -mt-1">
                Add Tv shows To Your List and watch them later
              </span>
            ) : (
              <span className="text-sm -mt-1">
                You currently have {tvsInList?.length} items
              </span>
            )}
          </div>

          <Link to="" className="text-white/70 flex items-center gap-2">
            <span>see all</span>
            <MdChevronRight className="text-lg" />
          </Link>
        </div>

        {/* movies */}
        {tvsInList.length === 0 || !user ? (
          <MovieTvLoader condition="watching" />
        ) : (
          <MovieTVRow data={tvsInList} condition="watching" />
        )}
      </div>

      {/* top rated */}
      <div className="mt-12">
        {/* title */}
        <div className="flex justify-between">
          <span className="text-white/70 text-lg font-semibold flex items-center gap-5">
            <span>Top Rated Tvs</span> <AiFillStar className="text-[#ef4b4b]" />
          </span>

          <Link to="" className="text-white/70 flex items-center gap-2">
            <span>see all</span>
            <MdChevronRight className="text-lg" />
          </Link>
        </div>

        {/* movies */}
        {topRatedTvs.length === 0 ? (
          <MovieTvLoader condition="display" />
        ) : (
          <MovieTVRow
            data={topRatedTvs}
            condition="display"
            condition_two="watch_later"
          />
        )}
      </div>

      {/* popular */}
      <div className=" my-12">
        {/* title */}
        <div className="flex justify-between">
          <span className="text-white/70 text-lg font-semibold ">
            What's Popular
          </span>

          <Link to="" className="text-white/70 flex items-center gap-2">
            <span>see all</span>
            <MdChevronRight className="text-lg" />
          </Link>
        </div>

        {/* movies */}
        {popularTvs.length === 0 ? (
          <MovieTvLoader condition="display" />
        ) : (
          <MovieTVRow
            data={popularTvs}
            condition="display"
            condition_two="watch_later"
          />
        )}
      </div>
    </section>
  );
};

export default Series;
