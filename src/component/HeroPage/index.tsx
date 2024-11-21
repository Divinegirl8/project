// import React, { useRef, useState} from "react";
// import pix from "../../asset/hero-section/my-pic (1)-squared.png"
// import pix2 from "../../asset/hero-section/my-pic (1)-squared-photoaidcom-greyscale.png"
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import FilledButton from "../reusuable/FilledButton";
// import { Link } from "react-router-dom";
// import logo from "../../asset/hero-section/mylogo (1).png";
// import Modal from "../reusuable/Modal";
// import style from "./index.module.css"


// const HeroPage: React.FC = () => {
    
//     const section1Ref = useRef<HTMLDivElement>(null);
//     const section2Ref = useRef<HTMLDivElement>(null);
//     const section3Ref = useRef<HTMLDivElement>(null);
//     const section4Ref = useRef<HTMLDivElement>(null);
//     const section5Ref = useRef<HTMLDivElement>(null);
//     const [isVisible, setIsVisible] = useState(false);

//     const handleModalToggle = () =>{
//         setIsVisible(!isVisible);
//     }

  
//     const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
//         ref.current?.scrollIntoView({ behavior: "smooth" });
//     };

//     return (
      
//         <div className="bg-gradient-to-b from-black via-black to-transparent h-[126vh] relative">
//             <div className="">

//                 <div className="border-gray-500 border-[0.5px] w-[21rem] h-[39rem] rounded-[20px] left-5 top-10 lg:mt-[80px] lg:fixed z-50">
                   
//                    <div className="mt-5 ml-7">
//                    <img src={logo} className=" w-[9rem]" />
//                    </div>

//                    <div className="flex justify-center mt-7">
//                    <img src={pix2} className="w-[14rem] h-[14rem] rounded-[20px]" />
//                    </div>
//                     <h1 className="text-white text-[20px] text-center mt-10">divinemercy601@gmail.com</h1>
//                     <p className="text-yellow-600 text-center text-[12px]">© 2024 DivineMercy. All Rights Reserved</p>
                    
//                     <div className="flex flex-row gap-5  items-center justify-center mt-10 cursor-pointer">

//                     <div className="rounded-[50px] h-10 w-10 border-2 border-gray-500 hover:border-yellow-600 text-white flex items-center justify-center">
//                             <a href="https://www.linkedin.com/in/divinemercy-james-1244a2239" target="_blank" rel="noopener noreferrer">
//                                 <i className="fa-brands fa-linkedin-in" style={{ color: "#fff" }}></i>
//                             </a>
//                     </div>



//                         <div className="rounded-[50px] h-10 w-10 border-2 border-gray-500 hover:border-yellow-600 text-white flex items-center justify-center">
//                             <a href="https://github.com/Divinegirl8" target="_blank" rel="noopener noreferrer">
//                                 <i className="fa-brands fa-github" style={{ color: "#fff" }}></i>
                               
//                             </a>
//                         </div>


//                         <div className="rounded-[50px] h-10 w-10 border-2 border-gray-500 hover:border-yellow-600 text-white flex items-center justify-center">
//                             <a href="https://www.instagram.com/divinemercy10_07/" target="_blank" rel="noopener noreferrer">
//                                 <i className="fa-brands fa-instagram" style={{ color: "#fff" }}></i>
                               
//                             </a>
//                         </div>


//                 </div>
                    
//                     <div className="flex items-center justify-center mt-16">
//                         <div onClick={handleModalToggle}>
//                         <FilledButton text="Contact Me"/>
//                         </div>

//                             {isVisible && (
//                                 <Modal isVisible={isVisible} onClose={handleModalToggle}/>
                                
//                             )}
                        
//                     </div>


               

//                 </div>
//                 <div className="flex ml-[25rem] pt-[10rem]">
//                     <div className="flex flex-row gap-2 justify-center border-gray-500 border w-[10rem] h-[30px] rounded-[20px] pt-1">
//                         <i className="fa-solid fa-house" style={{ color: "#fff", paddingTop: "3px", fontSize:"13px" }}></i>
//                         <p className="font-normal text-white font-fontInter uppercase text-[13px]">Introduce</p>
//                     </div>
//                 </div>


//                 <div className="text-center lg:ml-[15rem]">
//                     <p className="lg:pt-[5rem] font-normal text-[68px] text-white font-fontInter">
//                         Hi, I am James <span className="text-yellow-600">DivineMercy</span>,
//                     </p>
                    
//                 </div>

//                 <div className="flex justify-center ml-7">
//                 <p className="font-normal text-[68px] text-white font-fontInter">A Software Engineer</p>

//                 </div>
//                 <div className="flex items-center justify-center lg:ml-[40rem] mt-20 cursor-pointer">
//                 <div className="rounded-[100px] h-[11rem] w-[11rem] border border-gray-500 text-white flex items-center justify-center relative">
//                         <svg
//                             width="160"
//                             height="160"
//                             viewBox="0 0 160 160"
//                             xmlns="http://www.w3.org/2000/svg"
//                             className={`absolute  ${style.animateRotate}`}
                          
//                         >
//                             <defs>
                            
//                                 <path
//                                     id="circlePath"
//                                     d="M80,80 m-65,0 a 65,65 0 1,1 130,0 a 65,65 0 1,1 -130,0"
//                                 />
//                             </defs>
//                             <text fill="#999999" fontSize="19" textAnchor="middle">
                                
//                             <textPath href="#circlePath" startOffset="40%"><tspan dx="40">M y </tspan> <tspan dx="10">P r o j e c t s</tspan><tspan fontSize="50" dx="10">&#x2E;</tspan> 
//                                 <tspan dx="40">M y </tspan> <tspan dx="10">P r o j e c t s</tspan>   <tspan fontSize="50" dx="10">&#x2E;</tspan> 
//                             </textPath>


//                             </text>
//                         </svg>

//                 <div className="absolute  flex items-center justify-center">
//                         <p className="text-2xl">&#8595;</p>
//                 </div>
//                 </div>

//                 </div>

//                 <div className="text-white  lg:ml-[27rem] mt-16 flex flex-row gap-16">
//                    <div>
//                    <h1 className="text-[70px] text-yellow-600">2+</h1>
//                    <h4 className="flex flex-col text-[20px]">years of coding <span>experience</span> </h4> 
//                     </div> 

//                     <div>
//                    <h1 className="text-[70px] text-yellow-600">8+</h1>
//                    <h4 className="flex flex-col text-[20px]">completed <span>projects</span></h4> 
//                     </div> 
//                 </div>



//                 <div ref={section1Ref} className="text-white text-center mt-[-29rem]">
                    
//                     </div>

//                 <div ref={section2Ref} className="text-white text-center mt-[51rem]">
                    
//                 </div>
//                 <div ref={section4Ref} className="text-white text-center mt-10">
                
//                 </div>
//                 <div ref={section5Ref} className="text-white text-center mt-10">
                  
//                 </div>

                            
//             <div className="border-gray-500 border-[0.5px] w-[3rem] h-[18rem] rounded-[20px] items-center fixed right-10 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col text-white text-center gap-3 z-50 pt-10">
//                 <div className="relative group">
//                     <button className="hover:text-yellow-600  cursor-pointer" onClick={() => scrollToSection(section1Ref)}>
//                     <i className="fa-solid fa-house" style={{color: "#fff"}}></i>
//                     </button>
//                     <span className="absolute right-[33px] top-1/2 transform -translate-y-1/2 bg-[#3b3b3b] text-white text-sm py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-[4rem] h-[30px]">
//                     Home
//                     <span className="absolute right-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[12px] border-l-[#3b3b3b] border-b-[6px] border-b-transparent"></span>
//                 </span>

//                 </div>
//                 <div className="relative group">
//                     <button className="hover:text-yellow-600 text-[20px] cursor-pointer" onClick={() => scrollToSection(section2Ref)}>
//                         <i className="fa-regular fa-user"></i>
//                     </button>
//                     <span className="absolute right-[33px] top-1/2 transform -translate-y-1/2 bg-[#3b3b3b] text-white text-sm py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-[4rem] h-[30px]">
//                     About
//                     <span className="absolute right-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[12px] border-l-[#3b3b3b] border-b-[6px] border-b-transparent"></span>
//                 </span>
//                 </div>
//                 <div className="relative group">
//                     <button className="hover:text-yellow-600 text-[20px] cursor-pointer" onClick={() => scrollToSection(section3Ref)}>
//                         <i className="fa fa-briefcase"></i>
//                     </button>
//                     <span className="absolute right-[33px] top-1/2 transform -translate-y-1/2 bg-[#3b3b3b] text-white text-sm py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-[4rem] h-[30px]">
//                     Skills
//                     <span className="absolute right-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[12px] border-l-[#3b3b3b] border-b-[6px] border-b-transparent"></span>
//                 </span>
//                 </div>
//                 <div className="relative group">
//                     <button className="hover:text-yellow-600 text-[20px] cursor-pointer" onClick={() => scrollToSection(section4Ref)}>
//                         <i className="fa fa-file"></i>
//                     </button>
//                     <span className="absolute right-[30px] top-1/2 transform -translate-y-1/2 bg-[#3b3b3b] text-white text-sm py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-[7rem] h-[30px]">
//                     Qualification
//                     <span className="absolute right-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[12px] border-l-[#3b3b3b] border-b-[6px] border-b-transparent"></span>
//                 </span>
//                 </div>
//                 <div className="relative group">
//                     <button className="hover:text-yellow-600 text-[20px] cursor-pointer" onClick={() => scrollToSection(section5Ref)}>
//                         <i className="fa-solid fa-circle-dot"></i>
//                     </button>
//                     <span className="absolute right-[32px] top-1/2 transform -translate-y-1/2 bg-[#3b3b3b] text-white text-sm py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-[6rem] h-[30px]">
//                     Portfolio
//                     <span className="absolute right-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[12px] border-l-[#3b3b3b] border-b-[6px] border-b-transparent"></span>
//                 </span>
//                 </div>
                
//             </div>
//             </div>
            
//             <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-[gray-900] z-10"></div>
//         </div>
//     );
// };

// export default HeroPage;




import React, { useRef, useState} from "react";
import pix from "../../asset/hero-section/my-pic (1)-squared.png"
import pix2 from "../../asset/hero-section/my-pic (1)-squared-photoaidcom-greyscale.png"
import '@fortawesome/fontawesome-free/css/all.min.css';
import FilledButton from "../reusuable/FilledButton";
import { Link } from "react-router-dom";
import logo from "../../asset/hero-section/mylogo (1).png";
import Modal from "../reusuable/Modal";
import style from "./index.module.css"


const HeroPage: React.FC = () => {
    
    const section1Ref = useRef<HTMLDivElement>(null);
    const section2Ref = useRef<HTMLDivElement>(null);
    const section3Ref = useRef<HTMLDivElement>(null);
    const section4Ref = useRef<HTMLDivElement>(null);
    const section5Ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    const handleModalToggle = () =>{
        setIsVisible(!isVisible);
    }

  
    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
      
        <div className={`cursor-none bg-gradient-to-b from-black via-black to-transparent h-[126vh] relative ${style.customCursor}`}>
            <div className="">

                <div className="border-gray-500 border-[0.5px] w-[21rem] h-[39rem] rounded-[20px] left-5 top-10 lg:mt-[80px] lg:fixed z-50">
                   
                   <div className="mt-5 ml-7">
                   <img src={logo} className=" w-[9rem]" />
                   </div>

                   <div className="flex justify-center mt-7">
                   <img src={pix2} className="w-[14rem] h-[14rem] rounded-[20px]" />
                   </div>
                    <h1 className="text-white text-[20px] text-center mt-10">divinemercy601@gmail.com</h1>
                    <p className="text-yellow-600 text-center text-[12px]">© 2024 DivineMercy. All Rights Reserved</p>
                    
                    <div className="flex flex-row gap-5  items-center justify-center mt-10 cursor-pointer">

                    <div className="rounded-[50px] h-10 w-10 border-2 border-gray-500 hover:border-yellow-600 text-white flex items-center justify-center">
                            <a href="https://www.linkedin.com/in/divinemercy-james-1244a2239" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-linkedin-in" style={{ color: "#fff" }}></i>
                            </a>
                    </div>



                        <div className="rounded-[50px] h-10 w-10 border-2 border-gray-500 hover:border-yellow-600 text-white flex items-center justify-center">
                            <a href="https://github.com/Divinegirl8" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-github" style={{ color: "#fff" }}></i>
                               
                            </a>
                        </div>


                        <div className="rounded-[50px] h-10 w-10 border-2 border-gray-500 hover:border-yellow-600 text-white flex items-center justify-center">
                            <a href="https://www.instagram.com/divinemercy10_07/" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-instagram" style={{ color: "#fff" }}></i>
                               
                            </a>
                        </div>


                </div>
                    
                    <div className="flex items-center justify-center mt-16">
                        <div onClick={handleModalToggle}>
                        <FilledButton text="Contact Me"/>
                        </div>

                            {isVisible && (
                                <Modal isVisible={isVisible} onClose={handleModalToggle}/>
                                
                            )}
                        
                    </div>


               

                </div>
                <div className="flex ml-[25rem] pt-[10rem]">
                    <div className="flex flex-row gap-2 justify-center border-gray-500 border w-[10rem] h-[30px] rounded-[20px] pt-1">
                        <i className="fa-solid fa-house" style={{ color: "#fff", paddingTop: "3px", fontSize:"13px" }}></i>
                        <p className="font-normal text-white font-fontInter uppercase text-[13px]">Introduce</p>
                    </div>
                </div>


                <div className="text-center lg:ml-[15rem]">
                    <p className="lg:pt-[5rem] font-normal text-[68px] text-white font-fontInter">
                        Hi, I am James <span className="text-yellow-600">DivineMercy</span>,
                    </p>
                    
                </div>

                <div className="flex justify-center ml-7">
                <p className="font-normal text-[68px] text-white font-fontInter">A Software Engineer</p>

                </div>
                <div className="flex items-center justify-center lg:ml-[40rem] mt-20">
                <div className="rounded-[100px] h-[11rem] w-[11rem] border border-gray-500 text-white flex items-center justify-center relative cursor-pointer">
                        <svg
                            width="160"
                            height="160"
                            viewBox="0 0 160 160"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`absolute  ${style.animateRotate} `}
                          
                        >
                            <defs>
                            
                                <path
                                    id="circlePath"
                                    d="M80,80 m-65,0 a 65,65 0 1,1 130,0 a 65,65 0 1,1 -130,0"
                                />
                            </defs>
                            <text fill="#999999" fontSize="19" textAnchor="middle">
                                
                            <textPath href="#circlePath" startOffset="40%"><tspan dx="40">M y </tspan> <tspan dx="10">P r o j e c t s</tspan><tspan fontSize="50" dx="10">&#x2E;</tspan> 
                                <tspan dx="40">M y </tspan> <tspan dx="10">P r o j e c t s</tspan>   <tspan fontSize="50" dx="10">&#x2E;</tspan> 
                            </textPath>


                            </text>
                        </svg>

                <div className="absolute  flex items-center justify-center">
                        <p className="text-2xl">&#8595;</p>
                </div>
                </div>

                </div>

                <div className="text-white  lg:ml-[27rem] mt-16 flex flex-row gap-16">
                   <div>
                   <h1 className="text-[70px] text-yellow-600">2+</h1>
                   <h4 className="flex flex-col text-[20px]">years of coding <span>experience</span> </h4> 
                    </div> 

                    <div>
                   <h1 className="text-[70px] text-yellow-600">8+</h1>
                   <h4 className="flex flex-col text-[20px]">completed <span>projects</span></h4> 
                    </div> 
                </div>



                <div ref={section1Ref} className="text-white text-center mt-[-29rem]">
                    
                    </div>

                <div ref={section2Ref} className="text-white text-center mt-[51rem]">
                    
                </div>
                <div ref={section4Ref} className="text-white text-center mt-10">
                
                </div>
                <div ref={section5Ref} className="text-white text-center mt-10">
                  
                </div>

                            
            <div className="border-gray-500 border-[0.5px] w-[3rem] h-[18rem] rounded-[20px] items-center fixed right-10 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col text-white text-center gap-3 z-50 pt-10">
                <div className="relative group">
                    <button className="hover:text-yellow-600  cursor-pointer" onClick={() => scrollToSection(section1Ref)}>
                    <i className="fa-solid fa-house" style={{color: "#fff"}}></i>
                    </button>
                    <span className="absolute right-[33px] top-1/2 transform -translate-y-1/2 bg-[#3b3b3b] text-white text-sm py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-[4rem] h-[30px]">
                    Home
                    <span className="absolute right-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[12px] border-l-[#3b3b3b] border-b-[6px] border-b-transparent"></span>
                </span>

                </div>
                <div className="relative group">
                    <button className="hover:text-yellow-600 text-[20px] cursor-pointer" onClick={() => scrollToSection(section2Ref)}>
                        <i className="fa-regular fa-user"></i>
                    </button>
                    <span className="absolute right-[33px] top-1/2 transform -translate-y-1/2 bg-[#3b3b3b] text-white text-sm py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-[4rem] h-[30px]">
                    About
                    <span className="absolute right-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[12px] border-l-[#3b3b3b] border-b-[6px] border-b-transparent"></span>
                </span>
                </div>
                <div className="relative group">
                    <button className="hover:text-yellow-600 text-[20px] cursor-pointer" onClick={() => scrollToSection(section3Ref)}>
                        <i className="fa fa-briefcase"></i>
                    </button>
                    <span className="absolute right-[33px] top-1/2 transform -translate-y-1/2 bg-[#3b3b3b] text-white text-sm py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-[4rem] h-[30px]">
                    Skills
                    <span className="absolute right-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[12px] border-l-[#3b3b3b] border-b-[6px] border-b-transparent"></span>
                </span>
                </div>
                <div className="relative group">
                    <button className="hover:text-yellow-600 text-[20px] cursor-pointer" onClick={() => scrollToSection(section4Ref)}>
                        <i className="fa fa-file"></i>
                    </button>
                    <span className="absolute right-[30px] top-1/2 transform -translate-y-1/2 bg-[#3b3b3b] text-white text-sm py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-[7rem] h-[30px]">
                    Qualification
                    <span className="absolute right-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[12px] border-l-[#3b3b3b] border-b-[6px] border-b-transparent"></span>
                </span>
                </div>
                <div className="relative group">
                    <button className="hover:text-yellow-600 text-[20px] cursor-pointer" onClick={() => scrollToSection(section5Ref)}>
                        <i className="fa-solid fa-circle-dot"></i>
                    </button>
                    <span className="absolute right-[32px] top-1/2 transform -translate-y-1/2 bg-[#3b3b3b] text-white text-sm py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-[6rem] h-[30px]">
                    Portfolio
                    <span className="absolute right-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[12px] border-l-[#3b3b3b] border-b-[6px] border-b-transparent"></span>
                </span>
                </div>
                
            </div>
            </div>
            
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-[gray-900] z-10"></div>
        </div>
    );
};

export default HeroPage;

