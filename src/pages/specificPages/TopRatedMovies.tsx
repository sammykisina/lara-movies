import { useEffect, useState } from "react";
import SpecificPagesData from "../../components/SpecificPagesData";
import { API_KEY, BASE_URL } from "../../constants/requests";
import { MovieTV } from "../../typings";

const TopRatedMovies = () => {
  const [page, setPage] = useState<number>(1);
  const [topRatedMovies, setTopRatedMovies] = useState<MovieTV[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const apiURl = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`;
  // fetch data when the url changes
  useEffect(() => {
    const getTopRatedMovies = async () => {
      setLoading(true);
      const data = await fetch(apiURl).then((response) => response.json());
      setTopRatedMovies(data?.results);
      setLoading(false);
    };

    getTopRatedMovies();
  }, [apiURl]);
  return (
    <SpecificPagesData
      data={topRatedMovies}
      title="Top Rated Movies"
      page={page}
      setPage={setPage}
      loading={loading}
      media_type="movie"
    />
  );
};

export default TopRatedMovies;
