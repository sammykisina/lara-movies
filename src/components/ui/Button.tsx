import React from "react";

interface props {
  icon?: React.ReactNode;
  title?: string;
  btnStyles?: string;
  additionalBtnStyles?: string;
  purpose?: () => void;
}

const Button: React.FC<props> = ({
  icon,
  title,
  btnStyles,
  additionalBtnStyles,
  purpose,
}) => {
  return (
    <button onClick={purpose} className={`${btnStyles} ${additionalBtnStyles}`}>
      {icon}
      <span>{title}</span>
    </button>
  );
};

export default Button;
