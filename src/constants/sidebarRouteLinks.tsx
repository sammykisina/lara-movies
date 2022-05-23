import { HiHome, HiOutlineHome } from "react-icons/hi";
import {
  RiCompassFill,
  RiErrorWarningFill,
  RiErrorWarningLine,
  RiGroupFill,
  RiGroupLine,
  RiSettings3Line,
  RiSlideshow3Fill,
  RiSlideshow3Line,
} from "react-icons/ri";
import { IoNotifications, IoNotificationsOutline } from "react-icons/io5";
import {
  AiFillClockCircle,
  AiFillStar,
  AiOutlineClockCircle,
  AiOutlineStar,
} from "react-icons/ai";
import { BsBookmarkDash, BsFillBookmarkDashFill } from "react-icons/bs";
import { RiSettings3Fill } from "react-icons/ri";
import { FiCompass } from "react-icons/fi";
import { MdLocalMovies, MdOutlineLocalMovies } from "react-icons/md";

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
      {
        displayName: "My List",
        route: "/my-list",
        iconActive: <BsFillBookmarkDashFill className="sidebar__icon" />,
        iconInactive: <BsBookmarkDash className="sidebar__icon" />,
      },
      {
        displayName: "Top rated",
        route: "/top-rated",
        iconActive: <AiFillStar className="sidebar__icon" />,
        iconInactive: <AiOutlineStar className="sidebar__icon" />,
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
