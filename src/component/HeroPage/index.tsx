import React, { useRef} from "react";
import pix from "../../asset/hero-section/my-pic (1)-squared.png"
import pix2 from "../../asset/hero-section/my-pic (1)-squared-photoaidcom-greyscale.png"
import '@fortawesome/fontawesome-free/css/all.min.css';
import FilledButton from "../reusuable/FilledButton";
import { Link } from "react-router-dom";


const HeroPage: React.FC = () => {
    // Define refs for each section
    const section1Ref = useRef<HTMLDivElement>(null);
    const section2Ref = useRef<HTMLDivElement>(null);
    const section3Ref = useRef<HTMLDivElement>(null);
    const section4Ref = useRef<HTMLDivElement>(null);
    const section5Ref = useRef<HTMLDivElement>(null);

    // Function to handle smooth scrolling
    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
      
        <div className="bg-gradient-to-b from-black via-black to-transparent h-[100vh] relative">
            <div className="">

                            <div
                    className="border-gray-500 border-[0.5px] w-[21rem] h-[38rem] rounded-[20px] left-5 top-10 lg:mt-[80px] lg:fixed z-50"
                >
                   <div className="flex justify-center mt-10">
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
                        <FilledButton text="Contact Me" />
                    </div>


               

                </div>


                <div className="text-center lg:ml-[15rem]">
                    <p className="lg:pt-[14rem] font-normal text-[68px] text-white font-fontInter">
                        Hi, I am James <span className="text-yellow-600">DivineMercy</span>,
                    </p>
                    
                </div>

                <div className="flex justify-center ml-7">
                <p className="font-normal text-[68px] text-white font-fontInter">A Software Engineer</p>

                </div>


               <div className="flex items-center justify-center lg:ml-[40rem] mt-20 cursor-pointer">
               <div className="rounded-[100px] h-[10rem] w-[10rem] border border-gray-500 text-white flex items-center justify-center">
                          <p className="text-2xl">  &#8595;</p>
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

                {/* Updated navigation div */}
                {/* <div className="border-gray-500 border-[0.5px] w-[3rem] h-[18rem] rounded-[20px] items-center fixed right-10 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col text-white text-center gap-3 z-50 pt-5">
                    <button className=" hover:text-yellow-600 text-[2rem] cursor-pointer" onClick={() => scrollToSection(section1Ref)}> {"\u2302"}</button>
                    <button className=" hover:text-yellow-600 text-[20px] cursor-pointer"  onClick={() => scrollToSection(section2Ref)}><i className="fa-regular fa-user"></i></button>
                    <button className=" hover:text-yellow-600 text-[20px] cursor-pointer" onClick={() => scrollToSection(section3Ref)}><i className="fa fa-briefcase"></i></button>
                    <button className=" hover:text-yellow-600 text-[20px] cursor-pointer" onClick={() => scrollToSection(section4Ref)}><i className="fa fa-file"></i></button>
                    <button className=" hover:text-yellow-600 text-[20px] cursor-pointer"  onClick={() => scrollToSection(section5Ref)}><i className="fa-solid fa-circle-dot"></i></button>
                </div> */}

{/* Updated navigation div with square tooltips and thinking shape (triangle on the right) */}
<div className="border-gray-500 border-[0.5px] w-[3rem] h-[18rem] rounded-[20px] items-center fixed right-10 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col text-white text-center gap-3 z-50 pt-5">
    <div className="relative group">
        <button className="hover:text-yellow-600 text-[2rem] cursor-pointer" onClick={() => scrollToSection(section1Ref)}>
            {"\u2302"}
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
