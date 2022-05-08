import React, { useEffect, useState } from "react";
import requests from "../constants/requests";
import { Movie } from "../typings";
import { MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";
import MovieRow from "../components/MovieRow";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
  console.log("trendingMovies", trendingMovies);

  // useEffect to fetch api data when the component loads
  const getData = async () => {
    const [
      // netflixOriginals,
      // trendingNow,
      // topRated,
      // actionMovies,
      // comedyMovies,
      // horrorMovies,
      // romanceMovies,
      // documentaries,
      trendingMovies,
    ] = await Promise.all([
      fetch(requests.fetchTreadingMovies).then((res) => res.json()),
      // fetch(requests.fetchTrending).then((res) => res.json()),
      // fetch(requests.fetchTopRated).then((res) => res.json()),
      // fetch(requests.fetchActionMovies).then((res) => res.json()),
      // fetch(requests.fetchComedyMovies).then((res) => res.json()),
      // fetch(requests.fetchHorrorMovies).then((res) => res.json()),
      // fetch(requests.fetchRomanceMovies).then((res) => res.json()),
      // fetch(requests.fetchDocumentaries).then((res) => res.json()),
    ]);

    setTrendingMovies(trendingMovies?.results);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <section>
      {/* trending movies */}
      <div>
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
          <div>holders</div>
        ) : (
          <MovieRow movies={trendingMovies} />
        )}
      </div>
    </section>
  );
};

export default Home;
