import React, { useEffect, useState } from "react";
import requests from "../constants/requests";
import { MovieTV } from "../typings";
import { MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import MovieTVRow from "../components/MovieTVRow";
import Loader from "../components/loader/MovieTvLoader";
import useList from "../hooks/useList";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState<MovieTV[]>([]);
  // change to a list checked from the db
  const [netflixOriginals, setNetflixOriginals] = useState<MovieTV[]>([]);

  const [topRated, setTopRated] = useState<MovieTV[]>([]);
  const [popularMovies, setPopularMovies] = useState<MovieTV[]>([]);

  const { user } = useAuth();
  const list = useList(user?.uid);
  let moviesInList = list.filter(
    (singleMovie: MovieTV) => singleMovie.media_type === "movie"
  );

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
    getData();
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

      {/* My List */}
      <div className=" mt-10">
        {/* title */}
        <div className="flex justify-between">
          <div className="text-white/70 text-lg font-semibold flex flex-col">
            <span>
              My List <span className=" text-xs">movies</span>
            </span>
            {moviesInList.length === 0 ? (
              <span className="text-sm -mt-1">
                Add Movies and watch them later
              </span>
            ) : (
              <span className="text-sm -mt-1">
                You currently have {moviesInList?.length} items
              </span>
            )}
          </div>

          <Link to="" className="text-white/70 flex items-center gap-2">
            <span>see all</span>
            <MdChevronRight className="text-lg" />
          </Link>
        </div>

        {/* movies */}
        {moviesInList.length === 0 || !user ? (
          <Loader condition="watching" />
        ) : (
          <MovieTVRow data={moviesInList} condition="watching" />
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

          <Link
            to="/movies/popular"
            className="text-white/70 flex items-center gap-2"
          >
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
