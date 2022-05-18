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
    <div className="flex gap-3 my-3 rounded-md bg-gray-900 py-2 px-3 items-center justify-center ">
      <Icons
        iconStyles="group p-1 rounded-lg ring-1 ring-[#132f4c] hover:bg-[#132f4c]/50 cursor-pointer"
        icon={
          <AiOutlineFolderAdd
            className={`text-[#66b2ff] text-[1.5rem] cursor-pointer transition-all duration-[0.5s] `}
          />
        }
        // purpose={() => setShowSidebar(!showSidebar)}
      />
      <Icons
        iconStyles="group p-1 rounded-lg ring-1 ring-[#132f4c] hover:bg-[#132f4c]/50 cursor-pointer"
        icon={
          <BsBookmark
            className={`text-[#66b2ff] text-[1.5rem] cursor-pointer transition-all duration-[0.5s] `}
          />
        }
        // purpose={() => setShowSidebar(!showSidebar)}
      />
      <Icons
        iconStyles="group p-1 rounded-lg ring-1 ring-[#132f4c] hover:bg-[#132f4c]/50 cursor-pointer"
        icon={
          <BsHeart
            className={`text-[#66b2ff] text-[1.5rem] cursor-pointer transition-all duration-[0.5s] `}
          />
        }
        // purpose={() => setShowSidebar(!showSidebar)}
      />

      <Icons
        iconStyles="group p-1 rounded-lg ring-1 ring-[#132f4c] hover:bg-[#132f4c]/50 cursor-pointer"
        icon={
          <BsStar
            className={`text-[#66b2ff] text-[1.5rem] cursor-pointer transition-all duration-[0.5s] `}
          />
        }
        // purpose={() => setShowSidebar(!showSidebar)}
      />

      <Icons
        iconStyles="group p-1 rounded-lg ring-1 ring-[#132f4c] hover:bg-[#132f4c]/50 cursor-pointer"
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
