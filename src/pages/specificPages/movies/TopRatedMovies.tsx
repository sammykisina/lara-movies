import { useState } from "react";
import { SpecificPagesData } from "../../../components";
import { API_KEY, BASE_URL } from "../../../constants/requests";
import { useGetData } from "../../../hooks";

const TopRatedMovies = () => {
  const [page, setPage] = useState<number>(1);
  const apiURl = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`;
  const { data, loading } = useGetData(apiURl);

  return (
    <SpecificPagesData
      data={data}
      title="Top Rated Movies"
      page={page}
      setPage={setPage}
      loading={loading}
      media_type="movie"
    />
  );
};

export default TopRatedMovies;
