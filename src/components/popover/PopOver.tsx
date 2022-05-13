import { Popover, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { AiFillFolderAdd, AiOutlineLogin } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { RiAccountPinCircleFill } from "react-icons/ri";
import useAuth from "../../hooks/useAuth";
import { CgProfile } from "react-icons/cg";

const PopOver = () => {
  const { user, logout } = useAuth();

  return (
    <div className="max-w-sm">
      <Popover className="relative">
        {() => (
          <>
            <Popover.Button>
              <div className="flex justify-between gap-3 items-center mt-4 mb-4 w-full  group ">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 bg-red-500 rounded-full  flex justify-center items-center text-3xl text-white group-hover:text-white/50 transition-5">
                    <span className="mb-1">{user?.email!.charAt(0)} </span>
                  </div>

                  <span className=" text-white text-xl group-hover:text-white/50 transition-5">
                    {user?.email!.substring(0, user?.email!.indexOf("@"))}
                  </span>
                </div>

                <BiChevronDown className="w-6 h-6 cursor-pointer group-hover:text-white/50 transition-5" />
              </div>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute  z-10 -translate-x-1/2 transform h-[150px] left-1/2 sm:left-0  w-[300px]  -mt-3 rounded-md bg-gray-900 py-2 px-2  shadow-md flex justify-between flex-col">
                <div className=" ">
                  <button className="flex items-center gap-4   py-1 px-3 rounded-lg text-white hover:bg-red-400">
                    <RiAccountPinCircleFill className="w-5 h-5 " />
                    <span>Account</span>
                  </button>
                  <button className="flex items-center gap-4  py-1 px-3 rounded-lg text-white hover:bg-red-400">
                    <CgProfile className="w-5 h-5 " />
                    <span>Profile</span>
                  </button>
                  <button className="flex items-center gap-4  py-1 px-3 rounded-lg text-white hover:bg-red-400">
                    <AiFillFolderAdd className="w-5 h-5 " />
                    <span>My Collection</span>
                  </button>
                </div>

                <div className="flex  justify-between">
                  <span></span>
                  <button
                    onClick={() => logout()}
                    className="flex items-center gap-4  bg-red-400 py-1  px-3 rounded-lg text-white hover:bg-red-500"
                  >
                    <AiOutlineLogin className="w-7 h-7 " />
                    <span>Log out</span>
                  </button>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default PopOver;
