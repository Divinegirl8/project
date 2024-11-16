import React from "react";


interface FilledButtonProps {
  text: string;
}

const FilledButton: React.FC<FilledButtonProps> = ({ text}) => {
  return (
    <button className={`bg-yellow-600 hover:bg-transparent hover:border hover:border-yellow-600 text-white py-2 px-4 w-[18rem] rounded-[50px]`}>
      {text}
    </button>
  );
};

export default FilledButton;
