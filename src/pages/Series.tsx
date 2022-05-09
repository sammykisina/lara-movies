import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";
import MovieTVRow from "../components/MovieTVRow";
import MovieRow from "../components/MovieTVRow";
import requests from "../constants/requests";
import { MovieTV } from "../typings";

const Series = () => {
  const [trendingTvs, setTrendingTvs] = useState<MovieTV[]>([]);

  console.log("trendingTvs", trendingTvs);

  // change to a list checked from the db
  const [netflixOriginals, setNetflixOriginals] = useState<MovieTV[]>([]);

  const [topRatedTvs, setTopRatedTvs] = useState<MovieTV[]>([]);
  const [popularTvs, setPopularTvs] = useState<MovieTV[]>([]);

  // useEffect to fetch api data when the component loads
  const getData = async () => {
    const [
      // trendingNow,
      // topRated,
      // actionMovies,
      // comedyMovies,
      // horrorMovies,
      // romanceMovies,
      // documentaries,
      trendingTvs,
      netflixOriginals,
      topRatedTvs,
      popularTvs,
    ] = await Promise.all([
      fetch(requests.fetchTopRatedTv).then((res) => res.json()),
      fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
      fetch(requests.fetchTopRatedTv).then((res) => res.json()),
      fetch(requests.fetchPopularTvs).then((res) => res.json()),
      // fetch(requests.fetchComedyMovies).then((res) => res.json()),
      // fetch(requests.fetchHorrorMovies).then((res) => res.json()),
      // fetch(requests.fetchRomanceMovies).then((res) => res.json()),
      // fetch(requests.fetchDocumentaries).then((res) => res.json()),
    ]);

    setTrendingTvs(trendingTvs?.results);
    setNetflixOriginals(netflixOriginals?.results);
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
          <div>holders</div>
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
          <div>holders</div>
        ) : (
          <MovieTVRow data={netflixOriginals} condition="watching" />
        )}
      </div>

      {/* top rated */}
      <div className=" mt-12">
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
          <div>holders</div>
        ) : (
          <MovieTVRow data={topRatedTvs} condition="display" />
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
          <div>holders</div>
        ) : (
          <MovieTVRow data={popularTvs} condition="display" />
        )}
      </div>
    </section>
  );
};

export default Series;
