import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { sidebarState } from "../atoms/modalAtom";
import { allSidebarRoutesLinks } from "../constants/sidebarRouteLinks";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useRecoilState(sidebarState);

  console.log("showSidebar", showSidebar);

  const location = useLocation();

  return (
    <div
      className={`${
        showSidebar ? "show__sidebar sidebar" : "sidebar"
      } text-white/50 md:show__sidebar lg:pt-14 md:pt-0`}
    >
      <nav className="nav flex flex-col h-full justify-between">
        <div className="nav__list p-2">
          <div className="flex justify-between">
            <span></span>
            <button className="close-btn md:hidden">
              <FaTimes
                className=" text-[#afa5d9] text-[1rem] cursor-pointer"
                onClick={() => setShowSidebar(false)}
              />
            </button>
          </div>
          {allSidebarRoutesLinks.map((linkGroup, linkGroupIndex) => {
            const { title, routeLinks } = linkGroup;
            return (
              <article className="mt-5" key={linkGroupIndex}>
                <div className=" uppercase mb-3">{title}</div>
                {routeLinks.map((routeLink, routeLinkIndex) => {
                  const { displayName, route, iconActive, iconInactive } =
                    routeLink;

                  return (
                    <div
                      className={`my-2 w-fit px-2 hover:bg-[#132f4c]/50 hover:rounded-md  py-1   ${
                        routeLink.route === location.pathname
                          ? "bg-[#132f4c]/50  rounded-md"
                          : ""
                      }`}
                      key={routeLinkIndex}
                    >
                      <Link
                        onClick={() => setShowSidebar(false)}
                        to={route}
                        className="nav__link grid grid-cols-4 gap-3 items-center"
                      >
                        <div
                          className={`col-span-1 flex justify-center items-center  ${
                            routeLink.route === location.pathname
                              ? "text-[#66b2ff] bg-[#132f4c]/50"
                              : "text-[#66b2ff]"
                          }`}
                        >
                          {routeLink.route === location.pathname ? (
                            <span>{iconActive}</span>
                          ) : (
                            <span> {iconInactive}</span>
                          )}
                        </div>
                        <div
                          className={`flex items-center col-span-3  w-fit ${
                            routeLink.route === location.pathname
                              ? "bg-[#132f4c]/50"
                              : ""
                          }}`}
                        >
                          <span>{displayName}</span>
                        </div>
                      </Link>
                    </div>
                  );
                })}

                <div className="py-2">
                  <div className="bg-[#afa5d9]/10 w-full h-1 rounded-full" />
                </div>
              </article>
            );
          })}
        </div>

        {/* logout link */}
        <Link to="/" className="mb-20 mx-6">
          <div className="flex items-center gap-3 px-2">
            <AiOutlineLogout />
            <span>Log Out</span>
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
