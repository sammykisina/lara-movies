import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { HiChevronDown } from "react-icons/hi";
// import { ChevronDownIcon } from "@heroicons/react/solid";

export default function Select() {
  return (
    <div className=" w-fit text-right bg-[#333] rounded-md">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md  bg-opacity-20 px-4 py-2 text-sm font-medium text-[gray] hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 ">
            Select Media Type
            <HiChevronDown
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-900 rounded-md bg-[gray] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                <button className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-white hover:bg-gray-900">
                  Movie
                </button>
              </Menu.Item>
              <Menu.Item>
                <button className=" group flex w-full items-center rounded-md px-2 py-2 text-sm  text-white hover:bg-gray-900">
                  Tv (Series)
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
