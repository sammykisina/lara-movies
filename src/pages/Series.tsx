import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { mediaTypeState } from "../atoms/Atoms";
import EmptyListIdentifier from "../components/EmptyListIdentifier";
import MovieOrTvIntro from "../components/MovieOrTvIntro";
import MovieTVRow from "../components/MovieTVRow";
import requests from "../constants/requests";
import useAuth from "../hooks/useAuth";
import useList from "../hooks/useList";
import { MovieTV, TV } from "../typings";

const Series = () => {
  const [trendingTvs, setTrendingTvs] = useState<MovieTV[]>([]);
  const setMediaType = useSetRecoilState(mediaTypeState);
  const [topRatedTvs, setTopRatedTvs] = useState<MovieTV[]>([]);
  const [popularTvs, setPopularTvs] = useState<MovieTV[]>([]);

  //* the authenticated (login) user
  const { user } = useAuth();
  //* the list (movies and series) of the authenticated user
  const list = useList(user?.uid);
  //* filter only the movies to display
  let tvsInList = list.filter((singleTv: TV) => singleTv.media_type === "tv");

  // useEffect to fetch api data when the component loads
  const getData = async () => {
    try {
      const [trendingTvs, topRatedTvs, popularTvs] = await Promise.all([
        fetch(requests.fetchTrendingTV).then((res) => res.json()),
        fetch(requests.fetchTopRatedTv).then((res) => res.json()),
        fetch(requests.fetchPopularTvs).then((res) => res.json()),
      ]);

      setTrendingTvs(trendingTvs?.results);
      setTopRatedTvs(topRatedTvs?.results);
      setPopularTvs(popularTvs?.results);

      setMediaType("tv");
    } catch (error) {
      console.log("Something went wrong");
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
          tvOrMoviesData={trendingTvs}
          condition="display"
          media_type="tv"
          link="/tv/trending"
        />
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
        </div>

        {/* movies */}
        {tvsInList.length === 0 || !user ? (
          <EmptyListIdentifier />
        ) : (
          <MovieTVRow data={tvsInList} condition="watching" media_type="tv" />
        )}
      </div>

      {/* top rated */}
      <div className="mt-12">
        <MovieOrTvIntro
          title="Top Rated Tvs"
          tvOrMoviesData={topRatedTvs}
          condition="watch_later"
          media_type="tv"
          link="/tv/top-rated"
        />
      </div>

      {/* popular */}
      <div className=" my-12">
        <MovieOrTvIntro
          title="What's Popular"
          tvOrMoviesData={popularTvs}
          condition="watch_later"
          media_type="tv"
          link="/tv/popular"
        />
      </div>
    </section>
  );
};

export default Series;
