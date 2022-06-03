import { useState } from "react";
import { SpecificPagesData } from "../../../components";
import { API_KEY, BASE_URL } from "../../../constants/requests";
import { useGetData } from "../../../hooks";

const PopularTvs = () => {
  const [page, setPage] = useState<number>(1);
  const apiURl = `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
  const { data, loading } = useGetData(apiURl);

  return (
    <SpecificPagesData
      data={data}
      title="Most Popular Tv Shows Now!"
      page={page}
      setPage={setPage}
      loading={loading}
      media_type="tv"
    />
  );
};

export default PopularTvs;
