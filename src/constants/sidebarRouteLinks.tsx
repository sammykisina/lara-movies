import {
  RiErrorWarningFill,
  RiErrorWarningLine,
  RiSettings3Line,
  RiSlideshow3Fill,
  RiSlideshow3Line,
} from "react-icons/ri";
import {
  IoChatbubblesOutline,
  IoNotifications,
  IoNotificationsOutline,
} from "react-icons/io5";
import { AiFillClockCircle, AiOutlineClockCircle } from "react-icons/ai";
import { RiSettings3Fill } from "react-icons/ri";
import { MdLocalMovies, MdOutlineLocalMovies } from "react-icons/md";
import { IoIosChatbubbles } from "react-icons/io";

export const allSidebarRoutesLinks = [
  {
    title: "Menu",
    routeLinks: [
      {
        displayName: "Movies",
        route: "/",
        iconActive: <MdLocalMovies className="sidebar__icon" />,
        iconInactive: <MdOutlineLocalMovies className="sidebar__icon" />,
      },

      {
        displayName: "Tv",
        route: "/tv",
        iconActive: <RiSlideshow3Fill className="sidebar__icon" />,
        iconInactive: <RiSlideshow3Line className="sidebar__icon" />,
      },
      {
        displayName: "Community",
        route: "/community",
        iconActive: <IoIosChatbubbles className="sidebar__icon" />,
        iconInactive: <IoChatbubblesOutline className="sidebar__icon" />,
      },

      {
        displayName: "Notifications",
        route: "/notifications",
        iconActive: <IoNotifications className="sidebar__icon" />,
        iconInactive: <IoNotificationsOutline className="sidebar__icon" />,
      },
    ],
  },
  {
    title: "Library",
    routeLinks: [
      {
        displayName: "Recent",
        route: "/recent",
        iconActive: <AiFillClockCircle className="sidebar__icon" />,
        iconInactive: <AiOutlineClockCircle className="sidebar__icon" />,
      },
    ],
  },
  {
    title: "",
    routeLinks: [
      {
        displayName: "Settings",
        route: "/settings",
        iconActive: <RiSettings3Fill className="sidebar__icon" />,
        iconInactive: <RiSettings3Line className="sidebar__icon" />,
      },
      {
        displayName: "Help",
        route: "/help",
        iconActive: <RiErrorWarningFill className="sidebar__icon" />,
        iconInactive: <RiErrorWarningLine className="sidebar__icon" />,
      },
    ],
  },
];
