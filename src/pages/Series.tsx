import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Loader from "../components/loader/Loader";
import MovieTVRow from "../components/MovieTVRow";
import requests from "../constants/requests";
import { MovieTV } from "../typings";

const Series = () => {
  const [trendingTvs, setTrendingTvs] = useState<MovieTV[]>([]);

  // change to a list checked from the db
  const [netflixOriginals, setNetflixOriginals] = useState<MovieTV[]>([]);

  const [topRatedTvs, setTopRatedTvs] = useState<MovieTV[]>([]);
  const [popularTvs, setPopularTvs] = useState<MovieTV[]>([]);

  // useEffect to fetch api data when the component loads
  const getData = async () => {
    const [trendingTvs, netflixOriginals, topRatedTvs, popularTvs] =
      await Promise.all([
        fetch(requests.fetchTopRatedTv).then((res) => res.json()),
        fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
        fetch(requests.fetchTopRatedTv).then((res) => res.json()),
        fetch(requests.fetchPopularTvs).then((res) => res.json()),
      ]);

    setTrendingTvs(trendingTvs?.results);
    setNetflixOriginals(netflixOriginals?.results);
    setTopRatedTvs(topRatedTvs?.results);
    setPopularTvs(popularTvs?.results);
  };
  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 1000);
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
          <Loader condition="display" extraCondition="trending" />
        ) : (
          <MovieTVRow data={trendingTvs} condition="display" />
        )}
      </div>

      {/* continue watching */}
      <div className=" mt-10">
        {/* title */}
        <div className="flex justify-between">
          <span className="text-white/70 text-lg font-semibold">
            Continue watching
          </span>

          <Link to="" className="text-white/70 flex items-center gap-2">
            <span>see all</span>
            <MdChevronRight className="text-lg" />
          </Link>
        </div>

        {/* movies */}
        {netflixOriginals.length === 0 ? (
          <Loader condition="watching" />
        ) : (
          <MovieTVRow data={netflixOriginals} condition="watching" />
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
          <Loader condition="display" />
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
          <Loader condition="display" />
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
