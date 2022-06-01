import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import {
  Help,
  Movies,
  Notifications,
  Recent,
  Series,
  Settings,
  PopularTvs,
  PopularMovies,
  TrendingMovies,
  TopRatedMovies,
  MovieOrTvDetails,
} from "../pages";
import UpcomingMovies from "../pages/specificPages/movies/UpcomingMovies";
import TopRatedTvs from "../pages/specificPages/tv/TopRatedTvs";
import TrendingTvs from "../pages/specificPages/tv/TrendingTvs";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Movies />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/recent" element={<Recent />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/help" element={<Help />} />
      {/* internal routes */}
      <Route path="/tv" element={<Series />} />
      <Route path=":mediaType/:id" element={<MovieOrTvDetails />} />
      <Route path="/login" element={<Login />} />
      {/* specific pages */}
      {/* movies */}
      <Route path="/movies/popular" element={<PopularMovies />} />
      <Route path="/movies/trending" element={<TrendingMovies />} />
      <Route path="/movies/top-rated" element={<TopRatedMovies />} />
      <Route path="/movies/upcoming" element={<UpcomingMovies />} />
      {/* tv */}
      <Route path="/tv/popular" element={<PopularTvs />} />
      <Route path="/tv/trending" element={<TrendingTvs />} />
      <Route path="/tv/top-rated" element={<TopRatedTvs />} />
    </Routes>
  );
};

export default AppRoutes;
