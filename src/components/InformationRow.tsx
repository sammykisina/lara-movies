import React, { useRef, useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { Cast } from "../typings";
import SingleCast from "./SingleCast";

interface props {
  data: Cast[] | null;
}

const InformationRow: React.FC<props> = ({ data }) => {
  const RowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState<boolean>(false);

  // handle chevron click
  const handleClick = (direction: string) => {
    setIsMoved(true);

    if (RowRef.current) {
      const { scrollLeft, clientWidth } = RowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      RowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="group relative">
      <IoIosArrowDropleftCircle
        onClick={() => handleClick("right")}
        className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition  group-hover:opacity-100 text-[#ef4b4b]`}
      />
      <div
        ref={RowRef}
        className="flex overflow-x-scroll scrollbar-hide gap-3 py-2 "
      >
        {data?.map((singleDataElement, singleDataElementIndex) => (
          <SingleCast
            key={singleDataElementIndex}
            singleCast={singleDataElement}
          />
        ))}
      </div>

      <IoIosArrowDroprightCircle
        onClick={() => handleClick("left")}
        className={`absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition  group-hover:opacity-100 text-[#ef4b4b] ${
          !isMoved && "hidden"
        }`}
      />
    </div>
  );
};

export default InformationRow;
