import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { HiChevronDown } from "react-icons/hi";
import { useRecoilValue } from "recoil";
import { mediaTypeState } from "../../atoms/Atoms";

interface props {
  displayTitle: string;
  component: React.ReactNode;
}

const Select: React.FC<props> = ({ displayTitle, component }) => {
  const mediaType = useRecoilValue(mediaTypeState);

  return (
    <div className=" w-fit text-right bg-[#333] rounded-md">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md  bg-opacity-20 px-4 py-2 text-sm font-medium text-[gray] hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 uppercase">
            {mediaType
              ? mediaType === "tv"
                ? "Series"
                : mediaType
              : displayTitle}
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
          <div className="absolute right-0 mt-2 w-56 origin-top-right bg-[#333] rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
            {component}
          </div>
        </Transition>
      </Menu>
    </div>
  );
};

export default Select;
