import { useEffect, useState } from "react";
import SpecificPagesData from "../../components/SpecificPagesData";
import { API_KEY, BASE_URL } from "../../constants/requests";
import { MovieTV } from "../../typings";

const PopularMovies = () => {
  const [page, setPage] = useState<number>(1);
  const [popularMovies, setPopularMovies] = useState<MovieTV[]>([]);

  const apiURl = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
  // fetch data when the url changes
  useEffect(() => {
    const getPopularMovies = async () => {
      const data = await fetch(apiURl).then((response) => response.json());
      setPopularMovies(data?.results);
    };

    getPopularMovies();
  }, [apiURl]);

  return (
    <SpecificPagesData
      data={popularMovies}
      title="Most Popular Movies Now!"
      page={page}
      setPage={setPage}
    />
  );
};

export default PopularMovies;
