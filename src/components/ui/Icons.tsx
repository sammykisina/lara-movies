import React from "react";

interface props {
  icon: React.ReactNode;
  purpose?: () => void;
  iconStyles: string;
}

const Icons: React.FC<props> = ({ icon, purpose, iconStyles }) => {
  return (
    <div className={`${iconStyles}`} onClick={purpose}>
      {icon}
    </div>
  );
};

export default Icons;
