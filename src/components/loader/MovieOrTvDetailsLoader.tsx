import PlaceHolder from "./PlaceHolder";

const MovieOrTvDetailsLoader = () => {
  return (
    <div>
      <div className="relative h-[700px] md:h-[890px] lg:h-[600px]">
        {/* bg image placeholder */}
        <PlaceHolder extraStyles="h-full w-full rounded-tr-2xl rounded-bl-2xl" />

        {/* the rest of the body */}
        {/* the img */}
        <div className="absolute top-0 px-2 py-2 w-full h-full lg:flex gap-4">
          <div className="relative h-[200px] lg:w-[400px] lg:h-[530px]">
            {/* the poster placeholder */}
            <PlaceHolder extraStyles="ring-1 h-full w-full rounded-tl-3xl rounded-br-3xl" />

            {/* the rating placeholder */}
            <div className="absolute  -bottom-[30px] p-3 ">
              <PlaceHolder extraStyles="rounded-full w-[30px] h-[30px] ring-1" />
            </div>
          </div>

          {/* the details */}
          <div className="mt-10 flex flex-col w-full  h-[400px]">
            <div>
              {/* title placeholder */}
              <PlaceHolder extraStyles="ring-1 h-[10px] rounded-full w-[200px]" />

              {/* the release data and genre placeholder */}
              <div className="mt-5">
                <div className=" flex gap-2 items-center">
                  {/* the release data */}
                  <PlaceHolder extraStyles="ring-1 h-[10px] w-[200px] rounded-full" />
                  {/* total time */}
                  <PlaceHolder extraStyles="ring-1 h-[10px] w-[200px] rounded-full" />
                </div>
                {/* genre */}
                <div className="grid grid-cols-3 mt-4 gap-2 w-[200px]">
                  {Array.from(Array(Math.ceil(3)).keys()).map((index) => (
                    <div key={index}>
                      <PlaceHolder extraStyles="ring-1 h-[10px] rounded" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* the btns */}
            <div className="mt-10 h-[50px] relative">
              <PlaceHolder extraStyles="h-full rounded-md w-full ring-1 " />

              <div className=" absolute top-0 w-full h-full flex justify-center items-center gap-3">
                {Array.from(Array(Math.ceil(5)).keys()).map((index) => (
                  <PlaceHolder
                    key={index}
                    extraStyles="h-[30px] w-[30px] rounded-md w-full ring-1 "
                  />
                ))}
              </div>
            </div>

            {/* tag */}
            <PlaceHolder extraStyles="rounded-full w-full h-[15px] ring-1 mt-[30px] w-[250px]" />

            {/* overview placeholders */}
            <div className="mt-4">
              {/* overview title */}
              <PlaceHolder extraStyles="rounded-full w-[150px] h-[15px] ring-1 " />
              {/* the overview */}
              <PlaceHolder extraStyles="rounded w-full h-[100px] ring-1 mt-[10px]" />
            </div>

            {/* the crew placeholders */}
            <div className="mt-5">
              <PlaceHolder extraStyles="rounded-full w-[100px] h-[15px] ring-1 " />
              <div>
                <div className="grid grid-cols-3 md:grid-cols-3 gap-y-4 mt-2 gap-x-2">
                  {Array.from(Array(Math.ceil(3)).keys()).map((index) => (
                    <div key={index} className="flex flex-col gap-1">
                      <PlaceHolder extraStyles="ring-1 h-[10px] rounded" />

                      <PlaceHolder extraStyles="ring-1 h-[10px] rounded w-[50px]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* the cast */}
      <div className="my-3">
        {/* title */}
        <PlaceHolder extraStyles="rounded-full w-[100px] h-[15px] ring-1 " />

        {/* the cast */}
        <div className="flex gap-3  overflow-x-scroll py-3 scrollbar-hide">
          {Array.from(Array(Math.ceil(10)).keys()).map((index) => (
            <PlaceHolder
              key={index}
              extraStyles="h-[250px] min-w-[200px]  ring-1 rounded-tr-2xl rounded-bl-2xl"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieOrTvDetailsLoader;
