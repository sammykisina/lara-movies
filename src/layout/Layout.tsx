import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  showTrailerPlayModalState,
  sidebarState,
  widgetState,
} from "../atoms/Atoms";
import AppRoutes from "../routes/AppRoutes";

import {
  Modal,
  Sidebar,
  TopNav,
  Widget,
  TrailerPLayerModal,
} from "../components";

const Layout: React.FC = () => {
  const [showWidget, setShowWidget] = useRecoilState(widgetState);
  const [showSidebar, setShowSidebar] = useRecoilState(sidebarState);
  const [showTrailerPLayModal, setShowTrailerPLayModal] = useRecoilState(
    showTrailerPlayModalState
  );

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
            className={`mt-14 sm:mt-24 ${
              showTrailerPLayModal && "!h-screen overflow-hidden"
            }`}
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
        <Modal
          component={<TrailerPLayerModal />}
          modalState={showTrailerPLayModal}
          close={setShowTrailerPLayModal}
          type="modalHeight"
        />
      </section>
    </BrowserRouter>
  );
};

export default Layout;
