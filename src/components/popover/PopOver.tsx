import { Popover, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { AiFillFolderAdd, AiOutlineLogin } from "react-icons/ai";
import { BiChevronDown, BiUser } from "react-icons/bi";
import { RiAccountPinCircleFill } from "react-icons/ri";
import useAuth from "../../hooks/useAuth";
import { CgProfile } from "react-icons/cg";
import Button from "../ui/Button";
import Icons from "../ui/Icons";
import { BsBookmarkDash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { widgetState } from "../../atoms/Atoms";

const PopOver = () => {
  const { user, logout } = useAuth();

  const setShowWidget = useSetRecoilState(widgetState);

  return (
    <div className="max-w-sm">
      <Popover className="relative">
        {() => (
          <>
            <Popover.Button>
              <div className="flex justify-between gap-3 items-center mt-4 mb-4 w-full  group ">
                <div className="flex items-center gap-3">
                  <Icons
                    iconStyles="group p-1 rounded-lg ring-1 ring-[#132f4c] hover:bg-[#132f4c]/50 cursor-pointer"
                    icon={<BiUser className="text-[#66b2ff]" />}
                  />

                  <span className=" text-white text-xl group-hover:text-white/50 transition-5">
                    {user?.email!.substring(0, user?.email!.indexOf("@"))}
                  </span>
                </div>

                <BiChevronDown className="w-6 h-6 cursor-pointer text-[#66b2ff] transition-5" />
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
                <div>
                  <Button
                    icon={
                      <RiAccountPinCircleFill className="w-5 h-5 text-[#66b2ff] " />
                    }
                    title="Account"
                    btnStyles="popOverBtnStyles"
                  />

                  <Button
                    icon={<CgProfile className="w-5 h-5 text-[#66b2ff] " />}
                    title="My Profile"
                    btnStyles="popOverBtnStyles"
                  />

                  {/* <Button
                    icon={
                      <BsBookmarkDash className="w-5 h-5 text-[#66b2ff] " />
                    }
                    title="My List"
                    btnStyles="popOverBtnStyles"
                    purpose={() => {
                      
                    }}
                  /> */}

                  <Link
                    onClick={() => {
                      setShowWidget(false);
                    }}
                    to="/my-list"
                    className={`popOverBtnStyles w-fit`}
                  >
                    <BsBookmarkDash className="w-5 h-5 text-[#66b2ff] " />
                    <span>My List</span>
                  </Link>
                </div>

                <div className="flex  justify-between">
                  <span></span>

                  <Button
                    icon={
                      <AiOutlineLogin className="w-5 h-5 text-[#66b2ff] " />
                    }
                    title="Log out"
                    btnStyles="popOverBtnStyles"
                    additionalBtnStyles="bg-[#132f4c]/50"
                    purpose={() => logout()}
                  />
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
