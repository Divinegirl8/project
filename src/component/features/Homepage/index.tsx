
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom'; 
import style from './index.module.css';
import HeroPage from '../../HeroPage';
import About from '../../About';
import Skills from '../../Skills';
import Qualification from '../../Qualification';
import Portfolio from '../../Portfolio';
import CustomCursor from '../../CustomCursor';
import Circle from '../../reusuable/Circle';

const Homepage: React.FC = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const location = useLocation();
  const [activeIcon, setActiveIcon] = useState<string | null>("home");

  const aboutRef = useRef<HTMLDivElement | null>(null);

  const HeroPageRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const qualificationRef = useRef<HTMLDivElement | null>(null);
  const portfolioRef = useRef<HTMLDivElement | null>(null);


  const handleIconClick = (iconName: string, ref:any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setActiveIcon(iconName);
  };
  

 
  
  

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const animationDuration = 3000;
    const timer = setTimeout(() => {
      setIsAnimationComplete(true);
      document.body.style.overflow = 'auto'; 
    }, animationDuration);

    return () => {
      clearTimeout(timer);
    };
  }, [location]);

  // Intersection Observer to trigger animations when scrolling to each component
  const handleScrollAnimation = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(style.visible);
      } else {
        entry.target.classList.remove(style.visible);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScrollAnimation, {
      threshold: 0.5,
    });

    const sections = document.querySelectorAll(`.${style.section}`);
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <div className={`${!isAnimationComplete ? 'overflow-hidden' : 'overflow-auto'} h-screen bg-black relative cursor-none`}>
        {!isAnimationComplete && <div className={`${style.shakingLine}`}></div>}

        <div className={`${style.pageContent} absolute inset-0 ${isAnimationComplete ? style.visible : ''}`}>
          <CustomCursor isShown={true}/>
          

          <div className="border-gray-500 border-[0.5px] w-[3rem] h-[18rem] rounded-[20px] items-center fixed right-10 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col text-white text-center gap-3 z-50 pt-10">
                    <div className="relative group">
                        <button
                        className="hover:text-yellow-600 cursor-pointer"
                        onClick={() => handleIconClick("home",HeroPageRef)}
                        >
                            <a href="#home">
                        <i
                            className={`fa-solid fa-house ${activeIcon === "home" ? "text-yellow-600" : "text-white"}`}
                        ></i> </a>
                        </button>
                        <span className="absolute right-[33px] top-1/2 transform -translate-y-1/2 bg-[#3b3b3b] text-white text-sm py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-[4rem] h-[30px]">
                        Home
                        <span className="absolute right-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[12px] border-l-[#3b3b3b] border-b-[6px] border-b-transparent"></span>
                        </span>
                    </div>
                    <div className="relative group">
                        <button
                        className="hover:text-yellow-600 text-[20px] cursor-pointer"
                        onClick={() => handleIconClick("about",aboutRef)}
                        >
                            <a href="#about">
                        <i
                            className={`fa-regular fa-user ${activeIcon === "about" ? "text-yellow-600" : "text-white"}`}
                        ></i></a>
                        </button>
                        <span className="absolute right-[33px] top-1/2 transform -translate-y-1/2 bg-[#3b3b3b] text-white text-sm py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-[4rem] h-[30px]">
                        About
                        <span className="absolute right-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[12px] border-l-[#3b3b3b] border-b-[6px] border-b-transparent"></span>
                        </span>
                        
                    </div>
                    <div className="relative group">
                        <button
                        className="hover:text-yellow-600 text-[20px] cursor-pointer"
                        onClick={() => handleIconClick("skills",skillsRef)}
                        >
                            <a href="#skills">

                           
                        <i
                            className={`fa fa-briefcase ${activeIcon === "skills" ? "text-yellow-600" : "text-white"}`}
                        ></i> </a>
                        </button>
                        <span className="absolute right-[33px] top-1/2 transform -translate-y-1/2 bg-[#3b3b3b] text-white text-sm py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-[4rem] h-[30px]">
                        Skills
                        <span className="absolute right-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[12px] border-l-[#3b3b3b] border-b-[6px] border-b-transparent"></span>
                        </span>
                    </div>


                    <div className="relative group">
                        <button
                        className="hover:text-yellow-600 text-[20px] cursor-pointer"
                        onClick={() => handleIconClick("qualification",qualificationRef)}
                        >
                            <a href="#qualification">
                        <i
                            className={`fa fa-file ${activeIcon === "qualification" ? "text-yellow-600" : "text-white"}`}
                        ></i></a>
                        </button>
                        <span className="absolute right-[30px] top-1/2 transform -translate-y-1/2 bg-[#3b3b3b] text-white text-sm py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-[7rem] h-[30px]">
                        Qualification
                        <span className="absolute right-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[12px] border-l-[#3b3b3b] border-b-[6px] border-b-transparent"></span>
                        </span>
                    </div>

                    <div className="relative group">
                        <button
                        className="hover:text-yellow-600 text-[20px] cursor-pointer"
                        onClick={() => handleIconClick("portfolio",portfolioRef)}
                        >
                        <a href="#portfolio">
                        <i
                            className={`fa-solid fa-circle-dot ${activeIcon === "portfolio" ? "text-yellow-600" : "text-white"}`}
                        ></i>
                        </a>
                        </button>
                        <span className="absolute right-[32px] top-1/2 transform -translate-y-1/2 bg-[#3b3b3b] text-white text-sm py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-[6rem] h-[30px]">
                        Portfolio
                        <span className="absolute right-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[12px] border-l-[#3b3b3b] border-b-[6px] border-b-transparent"></span>
                        </span>
                    </div>
                    </div>
          
         
        <HeroPage ref={HeroPageRef} />
        <div className='mt-[-30rem]'>
          <Circle handleIconClick={() => handleIconClick("portfolio",portfolioRef)}/>
          </div>
          <div className={`${style.section}`}><About ref={aboutRef} /></div>
          <Skills ref={skillsRef}/>
          <div className={`${style.section}`}><Qualification ref={qualificationRef} /></div>
       
          <Portfolio ref={portfolioRef} />
       

    
          

             </div>    
             
             </div>
    </>
  );
};

export default Homepage;
