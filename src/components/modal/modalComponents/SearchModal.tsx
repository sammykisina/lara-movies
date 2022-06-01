import React, { useEffect, useState } from "react";
import { HiX } from "react-icons/hi";
import { SetterOrUpdater, useSetRecoilState } from "recoil";
import { Icons } from "../../";
import { showSearchModalState } from "../../../atoms/Atoms";
import { API_KEY, BASE_URL } from "../../../constants/requests";
import { MovieTV } from "../../../typings";
import { SingleMovieOrTv, SpinnerLoader, Select } from "../../";
import { Search } from "../../../assets";

interface props {
  setShowSearchModal: SetterOrUpdater<boolean>;
  setSearchKey: React.Dispatch<React.SetStateAction<string>>;
  debouncedTerm: string;
  setDebouncedTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchHeader: React.FC<props> = ({
  setShowSearchModal,
  setSearchKey,
  debouncedTerm,
  setDebouncedTerm,
}) => (
  <div className="px-3 py-2  bg-gray-900 sticky top-0 left-0 z-50">
    <Icons
      iconStyles="modalBtn  absolute right-5 top-8 !z-40 h-9 w-9 border-none bg-gray-900 hover:bg-[#181818] fixed"
      purpose={() => {
        setShowSearchModal(false);
        setSearchKey("");
      }}
      icon={<HiX className="h-6 w-6" />}
    />

    {/* the search form */}
    <div className="flex gap-2">
      <input
        type="text"
        className="input flex-1"
        placeholder="Search"
        value={debouncedTerm}
        onChange={(event) => {
          setDebouncedTerm(event.target.value);
        }}
      />

      <div>
        <Select />
      </div>
    </div>
  </div>
);

const SearchModal = () => {
  const setShowSearchModal = useSetRecoilState(showSearchModalState);
  const [searchKey, setSearchKey] = useState<string>("");
  const [debouncedTerm, setDebouncedTerm] = useState<string>(searchKey);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<MovieTV[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => setSearchKey(debouncedTerm), 1000);
    return () => clearTimeout(timer);
  }, [debouncedTerm]);

  console.log("data", data);
  console.log("searchKey", searchKey);

  useEffect(() => {
    if (searchKey.trim() !== "") {
      const search = async () => {
        const movieSearchApiCall = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchKey}&page=1&include_adult=false`;

        setLoading(true);
        const response = await fetch(movieSearchApiCall).then((response) =>
          response.json()
        );
        setData(response?.results);

        setLoading(false);
      };

      search();
    } else {
      setData([]);
      setSearchKey("");
      setDebouncedTerm("");
      return;
    }
  }, [searchKey]);

  return (
    <div className="relative h-fit bg-gray-900 overflow-clip">
      <SearchHeader
        setShowSearchModal={setShowSearchModal}
        debouncedTerm={debouncedTerm}
        setDebouncedTerm={setDebouncedTerm}
        setSearchKey={setSearchKey}
      />

      {/* the movies or tvs */}
      <div className="mt-4 px-2 pb-2">
        <div>
          {data!.length === 0 ? (
            <div className=" flex flex-col items-center gap-3 h-[200px] justify-center">
              <img
                src={Search}
                alt=""
                className="w-[100px] h-[100px] ring-1 ring-white rounded-full p-2"
              />
              <div className=" text-shadow-md">Enter Movie or Tv Show Name</div>
            </div>
          ) : (
            <div>
              {loading ? (
                <div className="flex  items-center gap-3 h-[200px] justify-center">
                  <SpinnerLoader color="fill-gray-300" />
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-3  overflow-scroll scrollbar-hide w-full h-full">
                  {data!.map((singleData, singleDataIndex) => (
                    <SingleMovieOrTv
                      key={singleDataIndex}
                      TvOrMovie={singleData}
                      condition="watch_later"
                      conditionTwo=""
                      // media_type={media_type!}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
