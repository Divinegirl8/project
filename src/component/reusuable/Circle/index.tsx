import React from "react";
import style from "./index.module.css"

interface CircleProps {
  handleIconClick: () => void;
}

const Circle: React.FC<CircleProps> = ({ handleIconClick }) => {
  return (
    <div
      className="lg:flex lg:items-center justify-center lg:ml-[40rem] ml-2"
      onClick={handleIconClick}
    >
      <div className="rounded-[100px] lg:h-[11rem] lg:w-[11rem] h-[10rem] w-[10rem] border border-gray-500 text-white flex items-center justify-center relative cursor-pointer">
        <svg
          width="160"
          height="160"
          viewBox="0 0 160 160"
          xmlns="http://www.w3.org/2000/svg"
        
          className={`absolute ${style.animateRotate}`}
        >
          <defs>
            <path
              id="circlePath"
              d="M80,80 m-65,0 a 65,65 0 1,1 130,0 a 65,65 0 1,1 -130,0"
            />
          </defs>
          <text fill="#999999"  textAnchor="middle" className="lg:text-[19px] text-[15px]">
            <textPath href="#circlePath" startOffset="40%">
              <tspan dx="40">M y </tspan> <tspan dx="10">P r o j e c t s</tspan>
              <tspan fontSize="50" dx="10">&#x2E;</tspan>
              <tspan dx="40">M y </tspan> <tspan dx="10">P r o j e c t s</tspan>
              <tspan fontSize="50" dx="10">&#x2E;</tspan>
            </textPath>
          </text>
        </svg>
        <div className="absolute flex items-center justify-center">
          <p className="text-2xl">&#8595;</p>
        </div>
      </div>
    </div>
  );
};

export default Circle;


