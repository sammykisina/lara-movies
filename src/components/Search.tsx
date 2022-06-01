import React from "react";
import { MdSearch } from "react-icons/md";
import { useRecoilState, useSetRecoilState } from "recoil";
import { showSearchModalState, widgetState } from "../atoms/Atoms";
import { Modal, SearchModal } from "../components";

const Search = () => {
  const [showSearchModal, setShowSearchModal] =
    useRecoilState(showSearchModalState);
  const setWidget = useSetRecoilState(widgetState);

  return (
    <div
      className="flex justify-between gap-3 px-2 rounded-md ring-1 ring-[#132f4c] bg-gray-900 py-2 cursor-pointer hover:bg-[#132f4c]/50"
      onClick={() => {
        setShowSearchModal(true);
        setWidget(false);
      }}
    >
      {/* search modal
      <Modal
        component={<SearchModal />}
        modalState={showSearchModal}
        type="modalHeight"
      /> */}
      <div className="flex items-center gap-4">
        <MdSearch className="w-6 h-6 text-[#66b2ff]" />
        <span className="text-white/60">Search...</span>
      </div>
      <span className="ring-1 ring-[#132f4c] rounded-md px-1 bg-[#132f4c]/50">
        Ctrl+K
      </span>
    </div>
  );
};

export default Search;
