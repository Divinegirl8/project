import React from "react";

const Skills:React.FC = () =>{
    return(
      
        <div className='bg-[#343434] w-full h-full'>

        <div className="flex ml-[30rem] pt-[10rem]">
              <div className="flex flex-row gap-2 justify-center border-gray-500 border w-[10rem] h-[30px] rounded-[20px] pt-1">
                <i
                  className="fa-solid fa-briefcase"
                  style={{ color: "#fff", paddingTop: "3px", fontSize: "13px" }}
                ></i>
                <p className="font-normal text-white font-fontInter uppercase text-[13px]">Skills</p>
              </div>
            </div>
        </div>
     
    )

}

export default Skills;