import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";
import Widget from "../components/Widget";
import { useGlobalContext } from "../contexts/AppContext";
import AppRoutes from "../routes/AppRoutes";

const Layout: React.FC = () => {
  const { toggleSidebar, setToggleSidebar } = useGlobalContext();

  return (
    <BrowserRouter>
      <section className="flex h-screen bg-gray-900">
        {/* left side */}
        <Sidebar />

        {/* middle side */}
        <div className="flex-1 md:ml-[calc(224px+1rem)] transition-all duration-[0.5s] xl:mr-[calc(224px+1rem)] px-2  sm:px-5 w-full overflow-x-auto">
          <TopNav />
          <div className="mt-4">
            <AppRoutes />
          </div>
        </div>

        {/* right side */}
        <div>
          <Widget />
        </div>
      </section>
    </BrowserRouter>
  );
};

export default Layout;
