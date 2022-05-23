import React, { useEffect, useState } from "react";
import SpecificPagesData from "../../components/SpecificPagesData";
import { API_KEY, BASE_URL } from "../../constants/requests";
import { MovieTV } from "../../typings";

const TrendingMovies = () => {
  const [page, setPage] = useState<number>(1);
  const [trendingMovies, setTrendingMovies] = useState<MovieTV[]>([]);

  const apiURl = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US&page=${page}`;

  // fetch data when the url changes
  useEffect(() => {
    const getPopularMovies = async () => {
      const data = await fetch(apiURl).then((response) => response.json());
      setTrendingMovies(data?.results);
    };

    getPopularMovies();
  }, [apiURl]);

  return (
    <SpecificPagesData
      data={trendingMovies}
      title="What's Trending Now!"
      page={page}
      setPage={setPage}
    />
  );
};

export default TrendingMovies;
