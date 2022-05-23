import React, { useCallback, useEffect, useRef, useState } from "react";
import InfinityScroll from "../../components/InifinityScroll";
import SingleMovieOrTv from "../../components/SingleMovieOrTv";
import { API_KEY, BASE_URL } from "../../constants/requests";
import { MovieTV } from "../../typings";

const PopularMovies = () => {
  const [page, setPage] = useState<number>(1);
  const [popularMovies, setPopularMovies] = useState<MovieTV[]>([]);
  const [loading, setLoading] = useState(false);

  const observer = useRef<HTMLDivElement | null>(null);
  console.log("observer", observer);
  console.log("popularMovies", popularMovies);

  // const lastPopularMovieRef = useCallback(node => );

  useEffect(() => {
    const apiURl = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;

    const getData = async (apiURl: string) => {
      const data = await fetch(apiURl).then((response) => response.json());
      setPopularMovies(data.results);
    };

    getData(apiURl);
  }, [page]);

  return (
    <InfinityScroll>
      <div>
        <div className="columns-3 border pt-5 gap-3 space-y-3 w-full">
          {popularMovies.map((popularMovie, popularMovieIndex) => (
            <SingleMovieOrTv
              key={popularMovieIndex}
              TvOrMovie={popularMovie}
              condition="display"
            />
          ))}
        </div>

        {loading && <div>Loading...</div>}
      </div>
    </InfinityScroll>
  );
};

export default PopularMovies;
