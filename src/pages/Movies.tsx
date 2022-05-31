import { useEffect, useState } from "react";
import requests from "../constants/requests";
import { MovieTV } from "../typings";
import { useList, useAuth } from "../hooks";
import { EmptyListIdentifier, MovieOrTvIntro, MovieTVRow } from "../components";
import { useSetRecoilState } from "recoil";
import { mediaTypeState } from "../atoms/Atoms";

const Movies = () => {
  const [trendingMovies, setTrendingMovies] = useState<MovieTV[]>([]);
  const [topRated, setTopRated] = useState<MovieTV[]>([]);
  const [popularMovies, setPopularMovies] = useState<MovieTV[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<MovieTV[]>([]);
  const setMediaType = useSetRecoilState(mediaTypeState);

  //* the authenticated (login) user
  const { user } = useAuth();
  //* the list (movies and series) of the authenticated user
  const list = useList(user?.uid);
  //* filter only the movies to display
  let moviesInList = list.filter(
    (singleMovie: MovieTV) => singleMovie.media_type === "movie"
  );

  //* useEffect to fetch api data when the component loads
  const getData = async () => {
    try {
      const [trendingMovies, topRated, popularMovies, upcomingMovies] =
        await Promise.all([
          fetch(requests.fetchTreadingMovies).then((res) => res.json()),
          fetch(requests.fetchTopRatedMovies).then((res) => res.json()),
          fetch(requests.fetchPopularMovies).then((res) => res.json()),
          fetch(requests.fetchUpcomingMovies).then((res) => res.json()),
        ]);

      setTrendingMovies(trendingMovies?.results);
      setTopRated(topRated?.results);
      setPopularMovies(popularMovies?.results);
      setUpcomingMovies(upcomingMovies?.results);

      setMediaType("movie");
    } catch (error) {
      console.log("something went wrong.");
      setMediaType("");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="z-10">
      {/* trending movies */}
      <div>
        <MovieOrTvIntro
          title="Trending movies"
          tvOrMoviesData={trendingMovies}
          condition="display"
          media_type="movie"
          link="/movies/trending"
        />
      </div>

      {/* My List */}
      <div className="mt-10">
        {/* title */}
        <div className="flex justify-between">
          <div className="text-white/70 text-lg font-semibold flex flex-col">
            <span>
              My List <span className=" text-xs">movies</span>
            </span>
            {moviesInList.length === 0 ? (
              <span className="text-sm -mt-1">
                Add Movies to My List and watch them later
              </span>
            ) : (
              <span className="text-sm -mt-1">
                You currently have {moviesInList?.length} items
              </span>
            )}
          </div>
        </div>

        {/* movies */}
        {moviesInList.length === 0 || !user ? (
          <EmptyListIdentifier />
        ) : (
          <MovieTVRow
            data={moviesInList}
            media_type="movie"
            condition="watching"
          />
        )}
      </div>

      {/* top rated */}
      <div className=" mt-12">
        <MovieOrTvIntro
          title="Top Rated"
          tvOrMoviesData={topRated}
          condition="watch_later"
          media_type="movie"
          link="/movies/top-rated"
        />
      </div>

      {/* popular */}
      <div className=" my-12">
        <MovieOrTvIntro
          title="What's Popular"
          tvOrMoviesData={popularMovies}
          condition="watch_later"
          media_type="movie"
          link="/movies/popular"
        />
      </div>

      {/* popular */}
      <div className=" my-12">
        <MovieOrTvIntro
          title="Upcoming"
          tvOrMoviesData={upcomingMovies}
          condition="display"
          media_type="movie"
          link="/movies/upcoming"
        />
      </div>
    </section>
  );
};

export default Movies;
