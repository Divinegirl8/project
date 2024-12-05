import React from "react";

const Qualification:React.FC = () =>{
    return(
        <div className='bg-[#000] w-full h-[full]'>

        <div className="flex ml-[30rem] pt-[10rem]">
              <div className="flex flex-row gap-2 justify-center border-gray-500 border w-[10rem] h-[30px] rounded-[20px] pt-1">
                <i
                  className="fa-solid fa-file"
                  style={{ color: "#fff", paddingTop: "3px", fontSize: "13px" }}
                ></i>
                <p className="font-normal text-white font-fontInter uppercase text-[13px]">Qualification</p>
              </div>
        </div>

        <div>




        </div>

        <div className="text-white ml-[30rem]">

        <h1 className=" mt-10 text-[50px]">Education & <span className="text-yellow-600">Experience</span> </h1>
           {/* first container */}
         <div>
       
         

              <div className="flex flex-row gap-7 mt-10">
              <div>
                  <div className="w-3 h-3 mt-[6px] rounded-[50px] bg-[#999999]">

                  </div>
                

                  <div className="w-[1px] h-[15rem]  ml-[5px] rounded-[50px] bg-[#999999]">

                  </div>
              </div>

              <div>
                <h4 className="hover:text-yellow-600 text-[#999999]">05/2024 – present</h4>
               <div className="mt-7">
               <h1 className="text-white text-[30px] font-thin">Software Engineer</h1>
               <h1 className="text-[#999999] text-[15px] font-semibold">Semicolon Africa</h1>
               </div>
              </div>
             

            </div>
            

           </div>


              {/* second container */}
            <div>
            <div className="flex flex-row gap-7 ">
              <div>
                  <div className="w-3 h-3 rounded-[50px] bg-[#999999]">

                  </div>
                

                  <div className="w-[1px] h-[15rem] ml-[5px] rounded-[50px] bg-[#999999]">

                  </div>
              </div>

              <div>
                <h4 className="hover:text-yellow-600 mt-[-7px] text-[#999999]">2023– 2024</h4>
                <div className="mt-7">
               <h1 className="text-white text-[30px] font-thin">Software Engineering</h1>
               <h1 className="text-[#999999] text-[15px] font-semibold">Semicolon Africa</h1>
               </div>
              </div>
             

            </div>
            

           </div>

           </div>

        
        
        </div>
     
    )
}

export default Qualification;