import React from "react";

interface props {
  extraStyles: string;
}

const PlaceHolder: React.FC<props> = ({ extraStyles }) => {
  return (
    <div
      className={`bg-[#132f4c]/50 w-full overflow-hidden relative ${extraStyles}`}
    >
      <div className="absolute top-0 left-0 w-full background h-full"></div>
    </div>
  );
};

export default PlaceHolder;
