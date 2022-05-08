import { HiHome, HiOutlineHome } from "react-icons/hi";
import {
  RiCompassFill,
  RiErrorWarningFill,
  RiErrorWarningLine,
  RiGroupFill,
  RiGroupLine,
  RiSettings3Line,
} from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { IoNotifications, IoNotificationsOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import {
  AiFillClockCircle,
  AiFillStar,
  AiOutlineClockCircle,
  AiOutlineStar,
} from "react-icons/ai";
import { BsBookmarkDash, BsFillBookmarkDashFill } from "react-icons/bs";
import { RiSettings3Fill } from "react-icons/ri";
import { FiCompass } from "react-icons/fi";

export const allSidebarRoutesLinks = [
  {
    title: "Menu",
    routeLinks: [
      {
        displayName: "Home",
        route: "/",
        iconActive: <HiHome className="sidebar__icon" />,
        iconInactive: <HiOutlineHome className="sidebar__icon" />,
      },
      {
        displayName: "Discover",
        route: "/discover",
        iconActive: <RiCompassFill className="sidebar__icon" />,
        iconInactive: <FiCompass />,
      },
      {
        displayName: "Community",
        route: "/community",
        iconActive: <RiGroupFill className="sidebar__icon" />,
        iconInactive: <RiGroupLine className="sidebar__icon" />,
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
        displayName: "Bookmarked",
        route: "/bookmarked",
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
