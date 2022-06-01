import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  currentMovieTvIdState,
  mediaTypeState,
  showTrailerPlayModalState,
} from "../../../atoms/Atoms";
import { Element } from "../../../typings";
import { Icons } from "../../";
import { MdOutlineVolumeOff, MdOutlineVolumeUp } from "react-icons/md";
import { HiX } from "react-icons/hi";
import { NotFound } from "../../../assets";

const TrailerPLayerModal: React.FC = () => {
  const currentMovieTvId = useRecoilValue(currentMovieTvIdState);
  const mediaType = useRecoilValue(mediaTypeState);
  const [trailer, setTrailer] = useState<string | undefined>("");
  const [muted, setMuted] = useState<boolean>(true);
  const [showTrailerPlayerModal, setShowTrailerPlayerModal] = useRecoilState(
    showTrailerPlayModalState
  );

  console.log("trailer", trailer);

  useEffect(() => {
    if (!currentMovieTvId) return;

    const fetchMovieOrTvVideos = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/${mediaType}/${currentMovieTvId}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      ).then((response) => response.json());

      if (data?.results) {
        const index = data?.results.findIndex(
          (element: Element) => element.type === "Trailer"
        );

        setTrailer(data?.results[index]?.key);
      }
    };

    fetchMovieOrTvVideos();
  }, [mediaType, currentMovieTvId]);

  return (
    <div className="px-2">
      <Icons
        iconStyles="modalBtn absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
        purpose={() => setShowTrailerPlayerModal(false)}
        icon={<HiX className="h-6 w-6" />}
      />
      {trailer === undefined ? (
        <div className=" w-full h-full absolute top-0 left-0 flex justify-center items-center">
          <div className="flex items-center flex-col gap-6">
            <img
              src={NotFound}
              alt=""
              className="w-[200px] h-[200px] ring-1 ring-white rounded-full"
            />

            <span className="text-lg  text-shadow-lg">Trailer Not Found</span>
          </div>
        </div>
      ) : (
        <div>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width="100%"
            height="100%"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
            }}
            muted={muted}
            playing={showTrailerPlayerModal}
          />

          <div className="absolute bottom-10 flex w-full items-center justify-between px-10">
            <Icons
              iconStyles="icon group"
              icon={
                muted ? (
                  <MdOutlineVolumeOff className="h-8 w-8" />
                ) : (
                  <MdOutlineVolumeUp className="h-8 w-8" />
                )
              }
              purpose={() => setMuted(!muted)}
            />
          </div>

          {/* <div className="absolute bottom-10 flex w-full items-center justify-between px-10">
            <div className="flex space-x-2">
              <Icons
                iconStyles="icon group"
                icon={<MdOutlinePlayArrow className="text-[#66b2ff] w-7 h-7" />}
                purpose={handleClose}
              />
            </div>

            <Icons
              iconStyles="icon group"
              icon={
                muted ? (
                  <MdOutlineVolumeOff className="h-8 w-8" />
                ) : (
                  <MdOutlineVolumeUp className="h-8 w-8" />
                )
              }
              purpose={() => setMuted(!muted)}
            />
          </div> */}
        </div>
      )}
    </div>
  );
};

export default TrailerPLayerModal;
