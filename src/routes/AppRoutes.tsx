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
import TopRated from "../pages/TopRated";
import MyList from "../pages/MyList";
import PopularTv from "../pages/specificPages/PopularTv";
import PopularMovies from "../pages/specificPages/PopularMovies";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/recent" element={<Recent />} />
      <Route path="/my-list" element={<MyList />} />
      <Route path="/top-rated" element={<TopRated />} />
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
    </Routes>
  );
};

export default AppRoutes;
