import { DocumentData } from "firebase/firestore";
import { atom } from "recoil";
import { MovieTV } from "../typings";

export const modalState = atom({ key: "modalState", default: false });

export const movieOrTvState = atom<MovieTV | DocumentData | null>({
  key: "movieOrTvState",
  default: null,
});
