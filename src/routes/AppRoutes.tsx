import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Help from "../pages/Help";
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";
import Notifications from "../pages/Notifications";
import Recent from "../pages/Recent";
import Series from "../pages/Series";
import SeriesDetails from "../pages/SeriesDetails";
import Settings from "../pages/Settings";
import PopularTv from "../pages/specificPages/PopularTv";
import PopularMovies from "../pages/specificPages/PopularMovies";
import TrendingMovies from "../pages/specificPages/TrendingMovies";
import TopRatedMovies from "../pages/specificPages/TopRatedMovies";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/recent" element={<Recent />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/help" element={<Help />} />

      {/* internal routes */}
      <Route path="/tv" element={<Series />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/tv/:id" element={<SeriesDetails />} />
      <Route path="/login" element={<Login />} />

      {/* specific pages */}
      <Route path="/tv/popular" element={<PopularTv />} />
      <Route path="/movies/popular" element={<PopularMovies />} />
      <Route path="/movies/trending" element={<TrendingMovies />} />
      <Route path="/movies/top-rated" element={<TopRatedMovies />} />
    </Routes>
  );
};

export default AppRoutes;
