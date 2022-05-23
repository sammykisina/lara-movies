import React from "react";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { BsBookmark, BsHeart, BsStar } from "react-icons/bs";
import { FiPlay } from "react-icons/fi";
import { useSetRecoilState } from "recoil";
import { currentMovieTvIdState, modalState } from "../atoms/modalAtom";
import Icons from "./ui/Icons";

interface props {
  currentlySelectedMovieTvId: string | undefined;
}

const MovieTvInteractiveBtns: React.FC<props> = ({
  currentlySelectedMovieTvId,
}) => {
  const setShowModal = useSetRecoilState(modalState);
  const setCurrentMovieTvId = useSetRecoilState(currentMovieTvIdState);

  return (
    <div className="flex gap-3 my-3 rounded-md bg-gray-900 py-2 px-3 items-center justify-center w-fit ">
      <Icons
        iconStyles="group icon"
        icon={
          <BsBookmark
            className={`text-[#66b2ff] text-[1.5rem] cursor-pointer transition-all duration-[0.5s] `}
          />
        }
        // purpose={() => setShowSidebar(!showSidebar)}
      />

      {/* {addedToList ? (
        <Icons
          iconStyles="icon group"
          icon={<MdOutlineCheck className="text-[#66b2ff] w-7 h-7" />}
          purpose={handleList}
        />
      ) : (
        <Icons
          iconStyles="icon group"
          icon={<AiOutlinePlus className="text-[#66b2ff] w-7 h-7" />}
          purpose={handleList}
        />
      )} */}

      <Icons
        iconStyles="group icon"
        icon={
          <FiPlay
            className={`text-[#66b2ff] text-[1.5rem] cursor-pointer transition-all duration-[0.5s] `}
          />
        }
        purpose={() => {
          setShowModal(true);
          setCurrentMovieTvId(Number(currentlySelectedMovieTvId));
        }}
      />
    </div>
  );
};

export default MovieTvInteractiveBtns;
