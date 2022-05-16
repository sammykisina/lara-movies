import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiPlay } from "react-icons/fi";
import { useRecoilState } from "recoil";
import { modalState, movieOrTvState } from "../atoms/modalAtom";
import { MovieTV } from "../typings";
import Button from "./ui/Button";
import Icons from "./ui/Icons";

interface props {
  condition: string;
  condition_two?: string;
  tvOrMovie: MovieTV;
}

const InfoCard: React.FC<props> = ({ condition, tvOrMovie, condition_two }) => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [movieOrTv, setMovieOrTv] = useRecoilState(movieOrTvState);

  return (
    <div
      className={`absolute bottom-0 left-0 p-2 h-[100px] w-full  text-white rounded-md  transition-all duration-[0.5s] ease-out`}
    >
      {condition === "display" ? (
        <div className="flex flex-col justify-between  h-full w-full">
          <span></span>
          <div className="">
            {/* title and date */}
            <div className="flex flex-col">
              <span className="text-lg truncate83 ">
                {tvOrMovie?.original_title}
              </span>
              <span className="text-sm">{tvOrMovie?.release_date}</span>
            </div>

            {/* rate and btns */}
            <div className="flex justify-between">
              <span className="text-lg">{tvOrMovie?.vote_average} rating</span>

              <div className="flex gap-2">
                <Button
                  btnStyles={`bg-[#ef4b4b] rounded-full px-2 py-1  ${
                    condition_two === "watch_later" && "hidden"
                  }`}
                  title="Watch now"
                  purpose={() => {
                    setMovieOrTv(tvOrMovie);
                    setShowModal(true);
                  }}
                />

                <Icons
                  iconStyles="group p-1 rounded-lg ring-1 ring-[#132f4c] hover:bg-[#132f4c]/50 cursor-pointer w-[30px] h-[30px] flex justify-center items-center"
                  icon={<AiOutlinePlus className="text-[#66b2ff] w-7 h-7" />}
                  // purpose={() => openNotifications()}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center  h-full w-full relative">
          <div className={`flex justify-center items-center`}>
            <button className="bg-gray-50/80 w-[60px] h-[60px] flex justify-center items-center rounded-full ">
              <FiPlay className="w-8 h-8 text-gray-900 hover:text-[#ef4b4b]" />
            </button>
          </div>

          <div className="absolute left-0 bottom-0">
            {tvOrMovie?.original_title}
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoCard;
