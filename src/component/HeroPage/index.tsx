// import React, { useRef, useState} from "react";
// import pix2 from "../../asset/hero-section/my-pic (1)-squared-photoaidcom-greyscale.png"
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import FilledButton from "../reusuable/FilledButton";
// import logo from "../../asset/hero-section/mylogo (1).png";
// import Modal from "../reusuable/Modal";
// import style from "./index.module.css"


// const HeroPage = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
    

//     const [isVisible, setIsVisible] = useState(false);


//     const handleModalToggle = () =>{
//         setIsVisible(!isVisible);
//     }


 
   
 
//     return (
      
//         <div className={`cursor-none bg-gradient-to-b from-black via-black to-transparent lg:pb-[15rem] pb-[45rem]  relative  ${style.customCursor}`} ref={ref}>
//             <div className="">

//                 <div className="border-gray-500 border-[0.5px] lg:w-[21rem] h-[39rem] mt-5  px-2 mx-5 lg:px-0 rounded-[20px] lg:left-5 lg:top-[10px] lg:my-[5rem]   sm:mx-[2rem] lg:fixed z-50">
                   
//                    <div className="mt-5 ml-7">
//                    <img src={logo} className=" w-[9rem]" />
//                    </div>

//                    <div className="flex justify-center mt-7">
//                    <img src={pix2} className="w-[14rem] h-[14rem] rounded-[20px]" />
//                    </div>
//                     <h1 className="text-white text-[20px] text-center mt-10">divinemercy601@gmail.com</h1>
//                     <p className="text-yellow-600 text-center text-[12px]">© 2024 DivineMercy. All Rights Reserved</p>
                    
//                     <div className="flex flex-row gap-5  items-center justify-center mt-10">

//                     <div className="rounded-[50px] h-10 w-10 border-2 border-gray-500 hover:border-yellow-600 text-white flex items-center justify-center  cursor-pointer">
//                             <a href="https://www.linkedin.com/in/divinemercy-james-1244a2239" target="_blank" rel="noopener noreferrer">
//                                 <i className="fa-brands fa-linkedin-in" style={{ color: "#fff" }}></i>
//                             </a>
//                     </div>


//                         <div className="rounded-[50px] h-10 w-10 border-2 border-gray-500 hover:border-yellow-600 text-white flex items-center justify-center cursor-pointer">
//                             <a href="https://github.com/Divinegirl8" target="_blank" rel="noopener noreferrer">
//                                 <i className="fa-brands fa-github" style={{ color: "#fff" }}></i>
                               
//                             </a>
//                         </div>


//                         <div className="rounded-[50px] h-10 w-10 border-2 border-gray-500 hover:border-yellow-600 text-white flex items-center justify-center  cursor-pointer">
//                             <a href="https://www.instagram.com/divinemercy10_07/" target="_blank" rel="noopener noreferrer">
//                                 <i className="fa-brands fa-instagram" style={{ color: "#fff" }}></i>
                               
//                             </a>
//                         </div>


//                    </div>
                    
//                     <div className="lg:flex lg:items-center justify-center mt-16">
//                         <div onClick={handleModalToggle}>
//                         <FilledButton text="Contact Me"/>
//                         </div>

//                             {isVisible && (
//                                 <Modal isVisible={isVisible} onClose={handleModalToggle}/>
                                
//                             )}
                        
//                     </div>


               

//                 </div>

                
//                 <div className="flex lg:hidden pt-[5rem] ml-5">
//                     <div className="flex flex-row gap-2 justify-center border-gray-500 border w-[10rem] h-[30px] rounded-[20px] pt-1">
//                         <i className="fa-solid fa-house" style={{ color: "#fff", paddingTop: "3px", fontSize:"13px" }}></i>
//                         <p className="font-normal text-white font-fontInter uppercase lg:text-[13px] text-[12px] mt-[1px] lg:mt-0">Introduce</p>
//                     </div>
//                 </div>

//                 <div className="lg:hidden">
                    
//                     <p className=" font-normal text-[40px] text-white font-fontInter pt-[3rem] ml-5 ">
//                         Hi, I am James <span className="text-yellow-600">DivineMercy</span>, A Software Engineer
//                     </p>
                    
//                 </div>

           


//                  <div className="lg:flex flex-col text-white justify-center items-center mt-[10rem] hidden">
//                 <div className="mr-[22rem]">
//                 <div className="flex flex-row gap-2 items-center justify-center border-gray-500 border w-[10rem] h-[30px] rounded-[20px]">
//                     <i className="fa-solid fa-house" style={{ color: "#fff", fontSize: "13px" }}></i>
//                     <p className="font-normal text-white font-fontInter uppercase lg:text-[13px] text-[12px]">Introduce</p>
//                 </div>
//                 </div>

//                     <div className="font-normal text-[68px] text-white font-fontInter ml-[20rem] mt-[6rem]">
//                     <p>
//                         Hi, I am James <span className="text-yellow-600">DivineMercy</span>,
//                     </p>
                   
//                     <p>A Software Engineer</p>
//                     </div>
//                  </div>


              
            

//                 <div className="text-white  ml-5 mt-16  flex flex-row gap-16 lg:hidden">
//                    <div>
//                    <h1 className="lg:text-[70px] text-[40px] text-yellow-600">2+</h1>
//                    <h4 className="flex flex-col lg:text-[20px] text-[15px]">years of coding <span>experience</span> </h4> 
//                     </div> 

//                     <div>
//                    <h1 className="lg:text-[70px] text-[40px] text-yellow-600">8+</h1>
//                    <h4 className="flex flex-col lg:text-[20px] text-[15px]">completed <span>projects</span></h4> 
//                     </div> 
//                 </div>


//                 <div className="text-white  hidden justify-center  mt-[20rem] lg:flex flex-row gap-16 mr-[10rem]">
//                    <div>
//                    <h1 className="lg:text-[70px] text-[40px] text-yellow-600">2+</h1>
//                    <h4 className="flex flex-col lg:text-[20px] text-[15px]">years of coding <span>experience</span> </h4> 
//                     </div> 

//                     <div>
//                    <h1 className="lg:text-[70px] text-[40px] text-yellow-600">8+</h1>
//                    <h4 className="flex flex-col lg:text-[20px] text-[15px]">completed <span>projects</span></h4> 
//                     </div> 
//                 </div>


//                             </div>
            
//             <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-[gray-900] z-10"></div>
//         </div>
//     );
// });

// export default HeroPage;


import React, { useRef, useState} from "react";
import pix2 from "../../asset/hero-section/my-pic (1)-squared-photoaidcom-greyscale.png"
import '@fortawesome/fontawesome-free/css/all.min.css';
import FilledButton from "../reusuable/FilledButton";
import logo from "../../asset/hero-section/mylogo (1).png";
import Modal from "../reusuable/Modal";
import style from "./index.module.css"


const HeroPage = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
    

    const [isVisible, setIsVisible] = useState(false);


    const handleModalToggle = () =>{
        setIsVisible(!isVisible);
    }


 
   
 
    return (
      
        <div className={`cursor-none bg-gradient-to-b from-black via-black to-transparent lg:pb-[15rem] pb-[45rem]  relative  ${style.customCursor}`} ref={ref}>
            <div className="">

                <div className="border-gray-500 border-[0.5px] lg:w-[21rem] h-[39rem] mt-5  px-2 mx-5 lg:px-0 rounded-[20px] lg:left-5 lg:top-[10px] lg:my-[5rem]   sm:mx-[2rem] lg:fixed z-50">
                   
                   <div className="mt-5 ml-7">
                   <img src={logo} className=" w-[9rem]" />
                   </div>

                   <div className="flex justify-center mt-7">
                   <img src={pix2} className="w-[14rem] h-[14rem] rounded-[20px]" />
                   </div>
                    <h1 className="text-white text-[20px] text-center mt-10">divinemercy601@gmail.com</h1>
                    <p className="text-yellow-600 text-center text-[12px]">© 2024 DivineMercy. All Rights Reserved</p>
                    
                    <div className="flex flex-row gap-5  items-center justify-center mt-10">

                    <div className="rounded-[50px] h-10 w-10 border-2 border-gray-500 hover:border-yellow-600 text-white flex items-center justify-center  cursor-pointer">
                            <a href="https://www.linkedin.com/in/divinemercy-james-1244a2239" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-linkedin-in" style={{ color: "#fff" }}></i>
                            </a>
                    </div>


                        <div className="rounded-[50px] h-10 w-10 border-2 border-gray-500 hover:border-yellow-600 text-white flex items-center justify-center cursor-pointer">
                            <a href="https://github.com/Divinegirl8" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-github" style={{ color: "#fff" }}></i>
                               
                            </a>
                        </div>


                        <div className="rounded-[50px] h-10 w-10 border-2 border-gray-500 hover:border-yellow-600 text-white flex items-center justify-center  cursor-pointer">
                            <a href="https://www.instagram.com/divinemercy10_07/" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-instagram" style={{ color: "#fff" }}></i>
                               
                            </a>
                        </div>


                   </div>
                    
                    <div className="lg:flex lg:items-center justify-center mt-16">
                        <div onClick={handleModalToggle}>
                        <FilledButton text="Contact Me"/>
                        </div>

                            {isVisible && (
                                <Modal isVisible={isVisible} onClose={handleModalToggle}/>
                                
                            )}
                        
                    </div>


               

                </div>

                
                <div className="flex lg:hidden pt-[5rem] ml-5">
                    <div className="flex flex-row gap-2 justify-center border-gray-500 border w-[10rem] h-[30px] rounded-[20px] pt-1">
                        <i className="fa-solid fa-house" style={{ color: "#fff", paddingTop: "3px", fontSize:"13px" }}></i>
                        <p className="font-normal text-white font-fontInter uppercase lg:text-[13px] text-[12px] mt-[1px] lg:mt-0">Introduce</p>
                    </div>
                </div>

                <div className="lg:hidden">
                    
                    <p className=" font-normal text-[40px] text-white font-fontInter pt-[3rem] ml-5 ">
                        Hi, I am James <span className={`text-yellow-600 ${style.txt} `}>DivineMercy</span>, A Software Engineer
                    </p>
                    
                </div>

           


                 <div className="lg:flex flex-col text-white justify-center items-center mt-[10rem] hidden">
                <div className="mr-[22rem]">
                <div className="flex flex-row gap-2 items-center justify-center border-gray-500 border w-[10rem] h-[30px] rounded-[20px]">
                    <i className="fa-solid fa-house" style={{ color: "#fff", fontSize: "13px" }}></i>
                    <p className="font-normal text-white font-fontInter uppercase lg:text-[13px] text-[12px]">Introduce</p>
                </div>
                </div>

                    {/* <div className="font-normal text-[68px] text-white font-fontInter ml-[20rem] mt-[6rem]">
                    <p>
                        Hi, I am James <span className={`text-yellow-600 ${style.txt} `}>DivineMercy</span>,
                    </p>
                   
                    <p>A Software Engineer</p>
                    </div> */}

                      <div className="font-normal text-[68px] text-white font-fontInter ml-[7rem] mt-[6rem]">
                    <p>
                        Hi, I am James <span className={`${style.first} ml-[20px] `}> DivineMercy</span><span className={` ${style.second}  ml-[20px]`}>DivineMercy</span>
                    </p>
                      
                
                    <p>A Software Engineer</p>
                    </div> 



                                    

          </div>


              
            

                <div className="text-white  ml-5 mt-16  flex flex-row gap-16 lg:hidden">
                   <div>
                   <h1 className="lg:text-[70px] text-[40px] text-yellow-600">2+</h1>
                   <h4 className="flex flex-col lg:text-[20px] text-[15px]">years of coding <span>experience</span> </h4> 
                    </div> 

                    <div>
                   <h1 className="lg:text-[70px] text-[40px] text-yellow-600">8+</h1>
                   <h4 className="flex flex-col lg:text-[20px] text-[15px]">completed <span>projects</span></h4> 
                    </div> 
                </div>


                <div className="text-white  hidden justify-center  mt-[20rem] lg:flex flex-row gap-16 mr-[10rem]">
                   <div>
                   <h1 className="lg:text-[70px] text-[40px] text-yellow-600">2+</h1>
                   <h4 className="flex flex-col lg:text-[20px] text-[15px]">years of coding <span>experience</span> </h4> 
                    </div> 

                    <div>
                   <h1 className="lg:text-[70px] text-[40px] text-yellow-600">8+</h1>
                   <h4 className="flex flex-col lg:text-[20px] text-[15px]">completed <span>projects</span></h4> 
                    </div> 
                </div>

                            </div>
            
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-[gray-900] z-10"></div>
        
        </div>
    );
});

export default HeroPage;

