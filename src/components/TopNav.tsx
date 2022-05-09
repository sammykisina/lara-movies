import React, { useEffect, useState } from "react";
import { BsFillGridFill } from "react-icons/bs";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoNotifications } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { allTopnavRouteLinks } from "../constants/topnavRouteLinks";
import { useGlobalContext } from "../contexts/AppContext";

const TopNav = () => {
  const { toggleSidebar, setToggleSidebar, toggleWidget, setToggleWidget } =
    useGlobalContext();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // detecting the scrolling effect of a page and style the header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        // setIsScrolled(true);
        console.log("scrolled");
      } else {
        // setIsScrolled(false);
        console.log("not scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex justify-between px-2 pt-3  sm:px-5 items-center h-[3rem] text-[#afa5d9]/40 transition-all duration-[0.5s] w-full fixed top-0 left-0 z-50  md:ml-[calc(224px+1rem)] md:pr-[calc(224px+2rem)] xl:md:pr-[calc(500px+2rem)] bg-gray-900`}
    >
      {/* left side */}
      <div className="flex justify-center items-center gap-5">
        <HiMenuAlt4
          className={`text-[#4723d9] text-[1.5rem] cursor-pointer transition-all duration-[0.5s] md:hidden`}
          onClick={() => setToggleSidebar(true)}
        />

        <div className="flex flex-row gap-3 ">
          {allTopnavRouteLinks.map((topnavRouteLink, topnavRouteIndex) => {
            const { displayName, route } = topnavRouteLink;

            return (
              <Link
                className={`px-1 sm:px-3 rounded-md transition-all duration-[0.5s] hover:ring-1 hover:ring-[#ef4b4b] ${
                  route === location.pathname
                    ? " ring-1 ring-[#ef4b4b] text-[#afa5d9]"
                    : ""
                }`}
                key={topnavRouteIndex}
                to={route}
              >
                {displayName}
              </Link>
            );
          })}
        </div>
      </div>
      {/* right side */}
      <div className="flex  items-center gap-2 text-xl">
        <IoNotifications />
        <BsFillGridFill
          className=" cursor-pointer xl:hidden"
          onClick={() => setToggleWidget(true)}
        />
      </div>
    </header>
  );
};

export default TopNav;
