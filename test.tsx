// import { useEffect, useState } from "react";
// import MuiModal from "@mui/material/Modal";
// import { useRecoilState, useRecoilValue } from "recoil";
// import {
//   currentMovieTvIdState,
//   mediaTypeState,
//   modalState,
//   trailerState,
// } from "../../atoms/modalAtom";
// import { HiX } from "react-icons/hi";
// import Button from "../ui/Button";
// import { Element } from "../../typings";
// import ReactPlayer from "react-player/lazy";
// import Icons from "../ui/Icons";
// import {
//   MdOutlinePlayArrow,
//   MdOutlineVolumeOff,
//   MdOutlineVolumeUp,
// } from "react-icons/md";

// const Modal = () => {
//   const [showModal, setShowModal] = useRecoilState(modalState);
//   const currentMovieTvId = useRecoilValue(currentMovieTvIdState);
//   const mediaType = useRecoilValue(mediaTypeState);
//   const [trailer, setTrailer] = useState<string>("");
//   const [muted, setMuted] = useState<boolean>(true);

//   useEffect(() => {
//     if (!currentMovieTvId) return;

//     const fetchMovieOrTvVideos = async () => {
//       const data = await fetch(
//         `https://api.themoviedb.org/3/${mediaType}/${currentMovieTvId}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
//       ).then((response) => response.json());

//       if (data?.results) {
//         const index = data?.results.findIndex(
//           (element: Element) => element.type === "Trailer"
//         );

//         setTrailer(data?.results[index]?.key);
//       }
//     };

//     fetchMovieOrTvVideos();
//   }, [mediaType, currentMovieTvId]);

//   // close the modal
//   const handleClose = () => {
//     setShowModal(false);
//   };

//   return (
//     <MuiModal
//       open={showModal}
//       onClose={handleClose}
//       className=" fixed !top-1/4 left-0 right-0 z-50 mx-auto max-w-5xl overflow-hidden overflow-y-scroll scrollbar-hide px-3"
//     >
//       <>
//         <Button
//           purpose={handleClose}
//           btnStyles="modalBtn absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
//           icon={<HiX className="h-6 w-6" />}
//         />

//         <div className=" relative pt-[56.25%] md:pt-[50%]">
//           {trailer === null ? (
//             <div></div>
//           ) : (
//             <ReactPlayer
//               url={`https://www.youtube.com/watch?v=${trailer}`}
//               width="100%"
//               height="100%"
//               style={{
//                 position: "absolute",
//                 top: "0",
//                 left: "0",
//               }}
//               playing
//               muted={muted}
//             />
//           )}

// <div className="absolute bottom-10 flex w-full items-center justify-between px-10">
//   <div className="flex space-x-2">
//     <Icons
//       iconStyles="icon group"
//       icon={<MdOutlinePlayArrow className="text-[#66b2ff] w-7 h-7" />}
//       purpose={handleClose}
//     />
//   </div>

//   <Icons
//     iconStyles="icon group"
//     icon={
//       muted ? (
//         <MdOutlineVolumeOff className="h-8 w-8" />
//       ) : (
//         <MdOutlineVolumeUp className="h-8 w-8" />
//       )
//     }
//     purpose={() => setMuted(!muted)}
//   />
// </div>
// </div>
//       </>
//     </MuiModal>
//   );
// };

// export default Modal;
