import React from "react";
import PlaceHolder from "./PlaceHolder";

interface props {
  condition: string;
  extraCondition?: string;
}

const Loader: React.FC<props> = ({ condition, extraCondition }) => {
  return (
    <div
      className={`${
        condition === "display" ? "h-[200px] " : "h-[150px] "
      } flex overflow-scroll scrollbar-hide gap-2`}
    >
      {Array.from(Array(Math.ceil(16)).keys()).map((index) => (
        <div key={index} className=" relative">
          <PlaceHolder
            extraStyles={` ${
              condition === "display" ? "h-[200px]" : "h-[150px]"
            }   min-w-[300px] rounded-lg`}
          />

          {condition === "display" ? (
            <div className=" absolute top-[100px] flex flex-col gap-2 mt-6">
              <PlaceHolder extraStyles="h-[15px]  min-w-[200px] ml-5 bg-gray-500/30 rounded-lg" />

              <div className="w-[250px] flex justify-between items-center gap-[40px]">
                <div className="w-[50px]">
                  <PlaceHolder extraStyles="h-[15px] min-w-[50px] ml-5 bg-gray-500/30 rounded-lg" />
                </div>

                <div className="flex items-center gap-2  justify-between">
                  {/* play btn holder */}
                  <div
                    className={`${
                      extraCondition === "trending" ? " inline-block" : "hidden"
                    }`}
                  >
                    <PlaceHolder extraStyles="h-[30px] min-w-[50px] ml-5 bg-gray-500/30 rounded-full" />
                  </div>

                  {/* add btn holder */}
                  <div className="w-[100px]">
                    <PlaceHolder extraStyles="h-[35px] w-[35px] ml-14 bg-gray-500/30 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="">
              <div className=" absolute top-[50px] left-[100px]">
                <PlaceHolder extraStyles="h-[60px] w-[60px] ml-5 bg-gray-500/30 rounded-full" />
              </div>

              <div className="absolute w-[200px] top-[120px]">
                <PlaceHolder extraStyles="h-[15px] min-w-[50px] ml-5 bg-gray-500/30 rounded-lg" />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Loader;
