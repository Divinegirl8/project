import React from "react";
import passGen from "../../../src/asset/portfolio/passgen.png"

const Portfolio:React.FC = () =>{
    return(
        <div className='bg-[#000] w-full h-full pb-96'>

        <div className="flex ml-[30rem] pt-[10rem]">
              <div className="flex flex-row gap-2 justify-center border-gray-500 border w-[10rem] h-[30px] rounded-[20px] pt-1">
                <i
                  className="fa-solid fa-circle-dot"
                  style={{ color: "#fff", paddingTop: "3px", fontSize: "13px" }}
                ></i>
                <p className="font-normal text-white font-fontInter uppercase text-[13px]">Portfolio</p>
              </div>
            </div>


            <div className="relative group ml-[30rem] mt-10">
                    {/* Image */}
                    <img
                      src={passGen}
                      className="w-[50rem] h-[30rem] object-cover transition-opacity duration-300 group-hover:opacity-75"
                    />

                     {/* Skills */}
                     <div className="top-[27rem] ml-10 absolute inset-0">
                        <span className="bg-black text-white px-4 py-2 rounded-md mx-2 text-sm font-medium">
                          Java
                        </span>
                        <span className="bg-black text-white px-4 py-2 rounded-md mx-2 text-sm font-medium">
                          TypeScript
                        </span>
                        <span className="bg-black text-white px-4 py-2 rounded-md mx-2 text-sm font-medium">
                          Render
                        </span>
                        <span className="bg-black text-white px-4 py-2 rounded-md mx-2 text-sm font-medium">
                          React
                        </span>
                      </div>


                    <div className="absolute inset-0 ml-[-10rem] flex flex-col items-center justify-center opacity-0 bg-black bg-opacity-30 group-hover:opacity-100 transition-opacity duration-300">
                     
                      {/* Buttons */}
                      <div>
                        <button className="bg-white text-black px-4 py-2 rounded-md mx-2 hover:bg-gray-200">
                          <a href="https://password-generator-react-pi-ruddy.vercel.app/" target="_blank">go to website</a>
                        </button>
                        <button className="bg-white text-black px-4 py-2 rounded-md mx-2 hover:bg-gray-200">
                          <a href="https://password-generator-java.onrender.com/documentation/password-generator/swagger-ui/index.html#/" target="_blank">go to endpoint</a>
                        </button>
                      </div>
                    </div>
                  </div>


        </div>
    )
}

export default Portfolio