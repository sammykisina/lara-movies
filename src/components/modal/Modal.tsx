import { useEffect, useState } from "react";
import MuiModal from "@mui/material/Modal";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  currentLocationPathState,
  currentMovieTvIdState,
  modalState,
  movieOrTvState,
  trailerState,
} from "../../atoms/modalAtom";
import { HiPlus, HiX } from "react-icons/hi";
import Button from "../ui/Button";
import { Element, Genre } from "../../typings";
import ReactPlayer from "react-player/lazy";
import { FaVolumeOff, FaVolumeUp } from "react-icons/fa";
import Icons from "../ui/Icons";
import { BsPlayFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";

const Modal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const currentMovieTvId = useRecoilValue(currentMovieTvIdState);
  const currentLocationPath = useRecoilValue(currentLocationPathState);
  const [trailer, setTrailer] = useState<string>("");
  const [globalTrailer, setGlobalTrailer] = useRecoilState(trailerState);
  const [muted, setMuted] = useState<boolean>(true);
  console.log("globalTrailer", globalTrailer);
  console.log("trailer", trailer);

  useEffect(() => {
    if (!currentMovieTvId) return;

    const fetchMovieOrTvVideos = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/${currentLocationPath}/${currentMovieTvId}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      ).then((response) => response.json());

      if (data?.results) {
        const index = data?.results.findIndex(
          (element: Element) => element.type === "Trailer"
        );

        setTrailer(data?.results[index]?.key);
      }
    };

    if (globalTrailer === null) {
      fetchMovieOrTvVideos();
    }
  }, [currentLocationPath, currentMovieTvId, globalTrailer]);

  // close the modal
  const handleClose = () => {
    setShowModal(false);
    setGlobalTrailer(null);
  };

  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      className=" fixed !top-1/4 left-0 right-0 z-50 mx-auto max-w-5xl overflow-hidden overflow-y-scroll scrollbar-hide px-3"
    >
      <>
        <Button
          purpose={handleClose}
          btnStyles="modalBtn absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
          icon={<HiX className="h-6 w-6" />}
        />

        <div className=" relative pt-[56.25%] md:pt-[50%]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${
              globalTrailer !== null ? globalTrailer : trailer
            }`}
            width="100%"
            height="100%"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
            }}
            playing
            muted={muted}
          />

          <div className="absolute bottom-10 flex w-full items-center justify-between px-10">
            <div className="flex space-x-2">
              <Icons
                iconStyles="group p-1 rounded-lg  hover:bg-gray-900 cursor-pointer"
                icon={<BsPlayFill className="w-8 h-8" />}
                purpose={handleClose}
              />

              <Icons
                iconStyles="group p-1 rounded-lg hover:bg-gray-900 cursor-pointer"
                icon={<HiPlus className=" w-8 h-8" />}
                purpose={handleClose}
              />

              <Icons
                iconStyles="group p-1 rounded-lg  hover:bg-gray-900 cursor-pointer"
                icon={<AiFillHeart className="w-8 h-8" />}
                purpose={handleClose}
              />
            </div>

            <Icons
              iconStyles="group p-1 rounded-lg  hover:bg-gray-900 cursor-pointer"
              icon={
                muted ? (
                  <FaVolumeOff className="h-8 w-8" />
                ) : (
                  <FaVolumeUp className="h-8 w-8" />
                )
              }
              purpose={() => setMuted(!muted)}
            />
          </div>
        </div>
      </>
    </MuiModal>
  );
};

export default Modal;
