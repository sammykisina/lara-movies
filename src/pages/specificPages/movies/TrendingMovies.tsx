import React, { useState } from "react";
import SpecificPagesData from "../../../components/SpecificPagesData";
import { API_KEY, BASE_URL } from "../../../constants/requests";
import { useGetData } from "../../../hooks";

const TrendingMovies = () => {
  const [page, setPage] = useState<number>(1);
  const apiURl = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US&page=${page}`;
  const { data, loading } = useGetData(apiURl);

  return (
    <SpecificPagesData
      data={data}
      title="What's Trending Now!"
      page={page}
      setPage={setPage}
      loading={loading}
      media_type="movie"
    />
  );
};

export default TrendingMovies;
