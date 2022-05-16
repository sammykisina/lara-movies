import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { modalState, sidebarState, widgetState } from "../atoms/modalAtom";
import Modal from "../components/modal/Modal";
import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";
import Widget from "../components/Widget";
import AppRoutes from "../routes/AppRoutes";

const Layout: React.FC = () => {
  const showModal = useRecoilValue(modalState);
  const [showWidget, setShowWidget] = useRecoilState(widgetState);
  const [showSidebar, setShowSidebar] = useRecoilState(sidebarState);

  // close the widget and the sidebar when the appRoutes body is clicked
  const handleClosingOfSidebarAndWidget = () => {
    if (showWidget || showSidebar) {
      setShowWidget(false);
      setShowSidebar(false);
    }
  };

  return (
    <BrowserRouter>
      <section className="flex h-screen bg-gray-900">
        {/* left side */}
        <Sidebar />

        {/* middle side */}
        <div className="flex-1 md:ml-[calc(224px+1rem)] transition-all duration-[0.5s] xl:mr-[calc(300px+1rem)] px-2  sm:px-5 w-full overflow-x-auto scrollbar-hide relative">
          <TopNav />
          <div
            className="mt-14 sm:mt-24"
            onClick={handleClosingOfSidebarAndWidget}
          >
            <AppRoutes />
          </div>
        </div>

        {/* right side */}
        <div>
          <Widget />
        </div>

        {/* modal for each movie */}
        {showModal && <Modal />}
      </section>
    </BrowserRouter>
  );
};

export default Layout;
