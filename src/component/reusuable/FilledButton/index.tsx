import React from "react";
import style from "./index.module.css"


interface FilledButtonProps {
  text: string;
}

const FilledButton: React.FC<FilledButtonProps> = ({ text}) => {
  return (
    <button className={`bg-yellow-600 hover:bg-transparent hover:border hover:border-yellow-600 text-white py-2 px-6 w-full lg:h-12 lg:px-4 lg:w-[18rem] rounded-[50px] ${style.btn}`}>
    {text}
  </button>
  
  );
};

export default FilledButton;
