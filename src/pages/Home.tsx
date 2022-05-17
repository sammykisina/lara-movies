import React, { useEffect, useState } from "react";
import requests from "../constants/requests";
import { MovieTV } from "../typings";
import { MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import MovieTVRow from "../components/MovieTVRow";
import Loader from "../components/loader/Loader";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState<MovieTV[]>([]);
  // change to a list checked from the db
  const [netflixOriginals, setNetflixOriginals] = useState<MovieTV[]>([]);

  const [topRated, setTopRated] = useState<MovieTV[]>([]);
  const [popularMovies, setPopularMovies] = useState<MovieTV[]>([]);

  console.log("top rated movies", topRated);

  // useEffect to fetch api data when the component loads
  const getData = async () => {
    const [trendingMovies, netflixOriginals, topRated, popularMovies] =
      await Promise.all([
        fetch(requests.fetchTreadingMovies).then((res) => res.json()),
        fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
        fetch(requests.fetchTopRatedMovies).then((res) => res.json()),
        fetch(requests.fetchPopularMovies).then((res) => res.json()),
      ]);

    setTrendingMovies(trendingMovies?.results);
    setNetflixOriginals(netflixOriginals?.results);
    setTopRated(topRated?.results);
    setPopularMovies(popularMovies?.results);
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
            Trending movies
          </span>

          <Link to="" className="text-white/70 flex items-center gap-2">
            <span>see all</span>
            <MdChevronRight className="text-lg" />
          </Link>
        </div>

        {/* movies */}
        {trendingMovies.length === 0 ? (
          <Loader condition="display" />
        ) : (
          <MovieTVRow data={trendingMovies} condition="display" />
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
      <div className=" mt-12">
        {/* title */}
        <div className="flex justify-between">
          <span className="text-white/70 text-lg font-semibold flex items-center gap-5">
            <span>Top Rated</span> <AiFillStar className="text-[#ef4b4b]" />
          </span>

          <Link to="" className="text-white/70 flex items-center gap-2">
            <span>see all</span>
            <MdChevronRight className="text-lg" />
          </Link>
        </div>

        {/* movies */}
        {topRated.length === 0 ? (
          <Loader condition="display" />
        ) : (
          <MovieTVRow
            data={topRated}
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
        {popularMovies.length === 0 ? (
          <Loader condition="display" />
        ) : (
          <MovieTVRow
            data={popularMovies}
            condition="display"
            condition_two="watch_later"
          />
        )}
      </div>
    </section>
  );
};

export default Home;
