import { useEffect, useState } from "react";
import { SpecificPagesData } from "../../components";
import { API_KEY, BASE_URL } from "../../constants/requests";
import { MovieTV } from "../../typings";

const PopularMovies = () => {
  const [page, setPage] = useState<number>(1);
  const [popularMovies, setPopularMovies] = useState<MovieTV[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const apiURl = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
  // fetch data when the url changes
  useEffect(() => {
    const getPopularMovies = async () => {
      setLoading(true);
      const data = await fetch(apiURl).then((response) => response.json());
      setPopularMovies(data?.results);
      setLoading(false);
    };

    getPopularMovies();
  }, [apiURl]);

  return (
    <SpecificPagesData
      data={popularMovies}
      title="Most Popular Movies Now!"
      page={page}
      setPage={setPage}
      loading={loading}
    />
  );
};

export default PopularMovies;
