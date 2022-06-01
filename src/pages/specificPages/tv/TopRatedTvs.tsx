import React, { useState } from "react";
import { SpecificPagesData } from "../../../components";
import { API_KEY, BASE_URL } from "../../../constants/requests";
import { useGetData } from "../../../hooks";

const TopRatedTvs = () => {
  const [page, setPage] = useState<number>(1);
  const apiURl = `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`;
  const { data, loading } = useGetData(apiURl);

  return (
    <SpecificPagesData
      data={data}
      title="Top Rated Tv Shows"
      page={page}
      setPage={setPage}
      loading={loading}
      media_type="tv"
    />
  );
};

export default TopRatedTvs;
