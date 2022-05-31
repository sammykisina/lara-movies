import React from "react";
import { Link } from "react-router-dom";
import { pages } from "../constants/pages";
import { MovieTV } from "../typings";
import { SpinnerLoader, Button, SingleMovieOrTv } from "./";

interface topHeaderAndPagesProps extends props {}
const TopHeaderAndPages: React.FC<topHeaderAndPagesProps> = ({
  title,
  page,
  setPage,
}) => (
  <div className="fixed md:ml-[calc(224px+1rem)] md:pr-[calc(224px+2rem)] xl:md:pr-[calc(500px+2rem)] top-[47px] left-0 z-50 bg-gray-900 w-full pt-3">
    <span className="mx-3 text-white/70 text-lg font-semibold">{title}</span>
    <div className="flex  mt-1 items-center justify-center gap-2 h-[30px]   w-full ">
      {pages.map((singlePage, pageIndex) => (
        <Button
          key={pageIndex}
          btnStyles={`hover:bg-[#ef4b4b]/50 w-5 h-5 rounded-full gap-2 flex items-center justify-center p-3 text-white/70 text-lg font-semibold ${
            singlePage.pageNumber === page && "bg-[#ef4b4b]"
          }`}
          title={String(singlePage.pageNumber)}
          purpose={() => setPage(singlePage.pageNumber)}
        />
      ))}
    </div>
  </div>
);

interface props {
  data?: MovieTV[];
  title: string;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  loading?: boolean;
  media_type?: string;
}

const SpecificPagesData: React.FC<props> = ({
  data,
  title,
  page,
  setPage,
  loading,
  media_type,
}) => {
  return (
    <div>
      {/* the header and pages navigation */}
      <TopHeaderAndPages title={title} page={page} setPage={setPage} />

      {/* the movies */}
      {data!.length === 0 ? (
        <div className="h-full mt-[300px]">
          <SpinnerLoader color="fill-gray-300" />
        </div>
      ) : (
        <div>
          {loading ? (
            <div className="h-full mt-[300px]">
              <SpinnerLoader color="fill-gray-300" />
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 items-center gap-3   overflow-scroll scrollbar-hide h-full mt-[150px]">
              {data!.map((singleData, singleDataIndex) => (
                <SingleMovieOrTv
                  key={singleDataIndex}
                  TvOrMovie={singleData}
                  condition="watch_later"
                  conditionTwo=""
                  media_type={media_type!}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SpecificPagesData;
