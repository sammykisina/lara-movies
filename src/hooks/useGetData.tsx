import { useEffect, useState } from "react";
import { MovieTV } from "../typings";

const useGetData = (apiURl: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<MovieTV[]>([]);

  useEffect(() => {
    console.log("called with url", apiURl);

    const getData = async (url: string) => {
      setLoading(true);
      const response = await fetch(url).then((response) => response.json());
      setData(response?.results);
      setLoading(false);
    };

    getData(apiURl);
  }, [apiURl]);

  return { loading, data };
};

export default useGetData;
