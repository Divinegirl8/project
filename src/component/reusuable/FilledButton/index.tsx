import React from "react";
import style from "./index.module.css"


interface FilledButtonProps {
  text: string;
}

const FilledButton: React.FC<FilledButtonProps> = ({ text}) => {
  return (
    <button className={`bg-yellow-600 hover:bg-transparent hover:border hover:border-yellow-600 text-white py-2 px-6 w-full xl:h-12 lg:h-[2.5rem] lg:px-4 xl:w-[18rem] lg:w-[12.5rem] rounded-[50px] ${style.btn}`}>
    {text}
  </button>
  
  );
};

export default FilledButton;
