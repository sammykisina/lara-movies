import React, { useEffect, useState } from "react";
import { SpecificPagesData } from "../../components";
import { API_KEY, BASE_URL } from "../../constants/requests";
import { MovieTV } from "../../typings";

const UpcomingMovies = () => {
  const [page, setPage] = useState<number>(1);
  const [upcomingMovies, setUpcomingMovies] = useState<MovieTV[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const apiURl = `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`;

  //* fetch data when the url changes
  useEffect(() => {
    const getPopularMovies = async () => {
      setLoading(true);
      const data = await fetch(apiURl).then((response) => response.json());
      setUpcomingMovies(data?.results);
      setLoading(false);
    };

    getPopularMovies();
  }, [apiURl]);

  return (
    <SpecificPagesData
      data={upcomingMovies}
      title="What's Coming Next!"
      page={page}
      setPage={setPage}
      loading={loading}
      media_type="movie"
    />
  );
};

export default UpcomingMovies;
