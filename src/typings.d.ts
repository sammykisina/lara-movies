interface TvSeason {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieTV {
  title: string;
  backdrop_path: string;
  media_type?: string;
  release_date?: string;
  first_air_date: string;
  genres: Genre[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  runtime: number | 0;
  tagline: string;
  credits: [];
  episode_run_time: number;
  seasons: TvSeason[];
  number_of_seasons: number;
  number_of_episodes: number;
}

export interface TV extends MovieTV {
  episode_run_time: number;
  seasons: TvSeason[];
}

export interface Crew {
  credit_id: number;
  job: string;
  name: string;
}

export interface Cast {
  credit_id: string;
  character: string;
  name: string;
  profile_path: string;
}

export interface Element {
  type:
    | "Bloopers"
    | "Featurette"
    | "Behind the Scenes"
    | "Clip"
    | "Trailer"
    | "Teaser";
}

export interface Genre {
  id: number;
  name: string;
}
