import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Bookmarked from "../pages/Bookmarked";
import Community from "../pages/Community";
import Discover from "../pages/Discover";
import Help from "../pages/Help";
import Home from "../pages/Home";
import MovieOrTVDetails from "../pages/MovieOrTVDetails";
import Notifications from "../pages/Notifications";
import Recent from "../pages/Recent";
import Series from "../pages/Series";
import Settings from "../pages/Settings";
import TopRated from "../pages/TopRated";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/community" element={<Community />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/recent" element={<Recent />} />
      <Route path="/bookmarked" element={<Bookmarked />} />
      <Route path="/top-rated" element={<TopRated />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/help" element={<Help />} />

      {/* internal routes */}
      <Route path="/series" element={<Series />} />
      <Route path="/:movieOrTv/:id" element={<MovieOrTVDetails />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
