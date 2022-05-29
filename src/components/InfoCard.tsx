import {
  collection,
  deleteDoc,
  doc,
  DocumentData,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlinePlus } from "react-icons/ai";
import { FiPlay } from "react-icons/fi";
import { MdOutlineCheck } from "react-icons/md";
import { useSetRecoilState } from "recoil";
import { currentMovieTvIdState, modalState } from "../atoms/modalAtom";
import { db } from "../firebase";
import { useAuth } from "../hooks";
import { MovieTV } from "../typings";
import { Notify, Button, Icons } from "./";

interface props {
  condition: string;
  tvOrMovie: MovieTV;
  media_type: string;
}

const InfoCard: React.FC<props> = ({ condition, tvOrMovie, media_type }) => {
  const setShowModal = useSetRecoilState(modalState);
  const setCurrentMovieTvId = useSetRecoilState(currentMovieTvIdState);
  const [addedToList, setAddedToList] = useState<boolean>(false);
  const [tvsOrMovies, setTvsOrMovies] = useState<DocumentData[] | MovieTV[]>(
    []
  );

  const { user } = useAuth();

  // adding a movie or series to a list
  const handleList = async () => {
    if (!user) {
      toast.custom((t) => <Notify t={t} login />, {
        position: "top-right",
      });

      return;
    }

    if (addedToList) {
      await deleteDoc(
        doc(db, "users", user!?.uid, "myList", tvOrMovie?.id.toString()!)
      );

      toast.custom((t) => (
        <Notify
          t={t}
          titleOne={tvOrMovie?.title || tvOrMovie?.original_name}
          titleTwo="has removed from My List"
          login={false}
        />
      ));
    } else {
      await setDoc(
        doc(db, "users", user!?.uid, "myList", tvOrMovie?.id.toString()),

        { ...tvOrMovie, media_type }
      );

      toast.custom((t) => (
        <Notify
          t={t}
          titleOne={tvOrMovie?.title || tvOrMovie?.original_name}
          titleTwo="has been added to My List"
          login={false}
        />
      ));
    }
  };

  // find all the movies and tvs in users list
  useEffect(() => {
    if (user) {
      return onSnapshot(
        collection(db, "users", user?.uid, "myList"),
        (snapshot) => {
          setTvsOrMovies(snapshot?.docs);
        }
      );
    }
  }, [tvOrMovie?.id, user]);

  // check if the movie is already in the user's list
  useEffect(() => {
    // if the index if found thn addedToList is then true
    setAddedToList(
      tvsOrMovies!?.findIndex(
        (singleTv) => singleTv.data().id === tvOrMovie?.id
      ) !== -1
    );
  }, [tvsOrMovies, tvOrMovie]);

  return (
    <div
      className={`absolute bottom-0 left-0 p-2 h-[100px] w-full  text-white rounded-md  transition-all duration-[0.5s] ease-out `}
    >
      <Toaster position="bottom-center" />
      {condition === "display" ? (
        <div className="flex flex-col justify-between  h-full w-full">
          <span></span>
          <div className="">
            {/* title and date */}
            <div className="flex flex-col">
              <span className="text-lg truncate ">
                {tvOrMovie?.original_title || tvOrMovie?.original_name}
              </span>
              <span className="text-sm">{tvOrMovie?.release_date}</span>
            </div>

            {/* rate and btns */}
            <div className="flex justify-between">
              <span className="text-lg">{tvOrMovie?.vote_average} rating</span>

              <div className="flex gap-2">
                <Button
                  btnStyles={`bg-[#ef4b4b] rounded-full px-2 py-1`}
                  title="Watch now"
                  purpose={() => {
                    setCurrentMovieTvId(tvOrMovie?.id);
                    setShowModal(true);
                  }}
                />

                {addedToList ? (
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
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center  h-full w-full relative">
          <div className="absolute left-0 top-1/3 truncate  w-[130px] sm:w-[200px]">
            {tvOrMovie?.original_title || tvOrMovie?.original_name}
          </div>

          <div className="absolute -bottom-1 mt-2 flex gap-3">
            <Icons
              iconStyles="icon group bg-[#ef4b4b] ring-0"
              icon={<FiPlay className="text-white w-7 h-7" />}
              purpose={() => {
                setCurrentMovieTvId(tvOrMovie?.id);
                setShowModal(true);
              }}
            />

            <Icons
              iconStyles="icon group"
              icon={<MdOutlineCheck className="text-[#66b2ff] w-7 h-7" />}
              purpose={handleList}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoCard;
