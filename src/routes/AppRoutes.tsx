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
  PopularTv,
  PopularMovies,
  TrendingMovies,
  TopRatedMovies,
  MovieOrTvDetails,
} from "../pages";
import UpcomingMovies from "../pages/specificPages/UpcomingMovies";

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
      {/* <Route path="/tv/:id" element={<SeriesDetails />} /> */}
      <Route path="/login" element={<Login />} />

      {/* specific pages */}
      <Route path="/tv/popular" element={<PopularTv />} />
      <Route path="/movies/popular" element={<PopularMovies />} />
      <Route path="/movies/trending" element={<TrendingMovies />} />
      <Route path="/movies/top-rated" element={<TopRatedMovies />} />
      <Route path="/movies/upcoming" element={<UpcomingMovies />} />
    </Routes>
  );
};

export default AppRoutes;
