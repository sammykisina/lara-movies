import { DocumentData } from "firebase/firestore";
import { atom } from "recoil";
import { MovieTV } from "../typings";

export const modalState = atom({ key: "modalState", default: false });

export const movieOrTvState = atom<MovieTV | DocumentData | null>({
  key: "movieOrTvState",
  default: null,
});

export const currentLocationPathState = atom<string | "">({
  key: "currentLocationPathState",
  default: "",
});

export const mediaTypeState = atom<string | "">({
  key: "mediaTypeState",
  default: "",
});

export const currentMovieTvIdState = atom<number | undefined>({
  key: "currentMovieTvIdState",
  default: undefined,
});

export const trailerState = atom<string | null>({
  key: "trailerState",
  default: null,
});

// sidebar and widget modal
export const sidebarState = atom({ key: "sidebarState", default: false });

export const widgetState = atom({ key: "widgetState", default: false });
