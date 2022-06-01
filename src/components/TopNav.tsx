import { FaTimes } from "react-icons/fa";
import { HiMenuAlt4, HiOutlineViewGrid } from "react-icons/hi";
import { MdOutlineNotifications } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { sidebarState, widgetState } from "../atoms/Atoms";
import { allTopnavRouteLinks } from "../constants/topnavRouteLinks";
import { Icons } from "../components";

const TopNav = () => {
  const [showSidebar, setShowSidebar] = useRecoilState(sidebarState);
  const [showWidget, setShowWidget] = useRecoilState(widgetState);

  const location = useLocation();

  // detecting the scrolling effect of a page and style the header
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 0) {
  //       // setIsScrolled(true);
  //       console.log("scrolled");
  //     } else {
  //       // setIsScrolled(false);
  //       console.log("not scrolled");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const openNotifications = () => {};

  return (
    <header
      className={`flex justify-between px-2 py-3  sm:px-5 items-center h-[3rem] text-[#afa5d9]/40 transition-all duration-[0.5s] w-full fixed top-0 left-0 z-50  md:ml-[calc(224px+1rem)] md:pr-[calc(224px+2rem)] xl:md:pr-[calc(500px+2rem)] bg-gray-900`}
    >
      {/* left side */}
      <div className="flex justify-center items-center gap-5">
        <div className="md:hidden">
          {showSidebar ? (
            <Icons
              iconStyles="icon group"
              icon={
                <FaTimes
                  className={`text-[#66b2ff] text-[1.5rem] cursor-pointer transition-all duration-[0.5s]`}
                />
              }
              purpose={() => setShowSidebar(!showSidebar)}
            />
          ) : (
            <Icons
              iconStyles="icon group"
              icon={
                <HiMenuAlt4
                  className={`text-[#66b2ff] text-[1.5rem] cursor-pointer transition-all duration-[0.5s] `}
                />
              }
              purpose={() => setShowSidebar(!showSidebar)}
            />
          )}
        </div>

        <div className="flex flex-row gap-3 ">
          {allTopnavRouteLinks.map((topnavRouteLink, topnavRouteIndex) => {
            const { displayName, route } = topnavRouteLink;

            return (
              <Link
                className={`px-1 sm:px-3 rounded-md transition-all duration-[0.5s] hover:ring-1 hover:ring-[#132746] ${
                  route === location.pathname
                    ? " ring-1 ring-[#132746] text-[#afa5d9]"
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
        <Icons
          iconStyles="icon group"
          icon={<MdOutlineNotifications className="text-[#66b2ff]" />}
          purpose={() => openNotifications()}
        />

        <div className="xl:hidden">
          <Icons
            iconStyles="icon group"
            icon={<HiOutlineViewGrid className="text-[#66b2ff] " />}
            purpose={() => setShowWidget(!showWidget)}
          />
        </div>
      </div>
    </header>
  );
};

export default TopNav;
