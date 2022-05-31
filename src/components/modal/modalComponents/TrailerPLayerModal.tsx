import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { useRecoilValue } from "recoil";
import {
  currentMovieTvIdState,
  mediaTypeState,
  showTrailerPlayModalState,
} from "../../../atoms/Atoms";
import { Element } from "../../../typings";
import { Icons } from "../../";
import {
  MdOutlinePlayArrow,
  MdOutlineVolumeOff,
  MdOutlineVolumeUp,
} from "react-icons/md";

const TrailerPLayerModal: React.FC = () => {
  const currentMovieTvId = useRecoilValue(currentMovieTvIdState);
  const mediaType = useRecoilValue(mediaTypeState);
  const [trailer, setTrailer] = useState<string>("");
  const [muted, setMuted] = useState<boolean>(true);
  const iframe = useRef(null);
  const showTrailerPlayerModal = useRecoilValue(showTrailerPlayModalState);

  useEffect(() => {}, [showTrailerPlayerModal]);

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
      {trailer === null ? (
        <div></div>
      ) : (
        <div className="">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            // width="100%"
            // height="100%"
            style={{
              position: "absolute",
              top: "40px",
              left: "0",
              margin: "5px",
            }}
            muted={muted}
            controls={false}
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
        </div>
      )}
    </div>
  );
};

export default TrailerPLayerModal;
