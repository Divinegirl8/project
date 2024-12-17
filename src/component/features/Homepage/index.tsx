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
  const location = useLocation();
  const [activeIcon, setActiveIcon] = useState<string>("home");

  const aboutRef = useRef<HTMLDivElement | null>(null);
  const HeroPageRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const qualificationRef = useRef<HTMLDivElement | null>(null);
  const portfolioRef = useRef<HTMLDivElement | null>(null);

  const sectionRefs: Record<
    "home" | "about" | "skills" | "qualification" | "portfolio",
    React.MutableRefObject<HTMLDivElement | null>
  > = {
    home: HeroPageRef,
    about: aboutRef,
    skills: skillsRef,
    qualification: qualificationRef,
    portfolio: portfolioRef,
  };

  // Map section names to Font Awesome icon classes
  const iconClasses: Record<keyof typeof sectionRefs, string> = {
    home: "fa-house",
    about: "fa-user",
    skills: "fa-briefcase",
    qualification: "fa-file",
    portfolio: "fa-circle-dot",
  };

  const handleIconClick = (iconName: keyof typeof sectionRefs, ref: React.MutableRefObject<HTMLDivElement | null>) => {
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const visibleSection = (Object.keys(sectionRefs) as Array<keyof typeof sectionRefs>).find(
              (key) => sectionRefs[key]?.current === entry.target
            );
            if (visibleSection) {
              setActiveIcon(visibleSection);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className={`${!isAnimationComplete ? 'overflow-hidden' : 'overflow-auto'} h-screen bg-black relative cursor-none`}>
      {!isAnimationComplete && <div className={`${style.shakingLine}`}></div>}

      <div className={`${style.pageContent} absolute inset-0 ${isAnimationComplete ? style.visible : ''}`}>
        <CustomCursor isShown={true} />
        
        <div className={`border-gray-500 border-[0.5px] w-[3rem] h-[18rem] xl:w-[3rem] xl:h-[18rem] lg:w-[2rem] lg:h-[16rem] rounded-[20px] items-center fixed right-10 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col text-white text-center gap-3 z-50 pt-10 ${style.nav}`}>
          {(Object.keys(sectionRefs) as Array<keyof typeof sectionRefs>).map((section) => (
            <div className="relative group" key={section}>
              <button
                className={`hover:text-yellow-600 text-[20px] xl:text-[20px] lg:text-[14px] cursor-pointer ${style.navBtn}`}
                onClick={() => handleIconClick(section, sectionRefs[section])}
              >
                <i
                  className={`fa-solid ${iconClasses[section]} hover:text-yellow-600 ${
                    activeIcon === section ? "text-yellow-600" : "text-white"
                  }`}
                ></i>
              </button>
              <span
                  className="absolute right-[33px] top-1/2 transform -translate-y-1/2 bg-[#3b3b3b] text-white text-sm py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 min-w-[6rem] w-fit whitespace-nowrap"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  <span className="absolute right-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[12px] border-l-[#3b3b3b] border-b-[6px] border-b-transparent"></span>
              </span>

            </div>
          ))}
        </div>

        <div className="border-gray-500 border-[0.5px] w-[2rem] h-[13rem] rounded-[20px] items-center fixed right-2 top-1/2 transform -translate-y-1/2 lg:hidden flex-col text-white text-center gap-3 z-50 pt-10 ">
          {(Object.keys(sectionRefs) as Array<keyof typeof sectionRefs>).map((section) => (
            <div className="relative group" key={section}>
              <button
                className="hover:text-yellow-600 text-[15px] cursor-pointer"
                onClick={() => handleIconClick(section, sectionRefs[section])}
              >
                <i
                  className={`fa-solid ${iconClasses[section]}  ${
                    activeIcon === section ? "text-yellow-600" : "text-white"
                  }`}
                ></i>
              </button>
              <span
                  className="absolute right-[33px] top-1/2 transform -translate-y-1/2 bg-[#3b3b3b] text-white text-sm py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 min-w-[6rem] w-fit whitespace-nowrap hidden"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  <span className="absolute right-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[12px] border-l-[#3b3b3b] border-b-[6px] border-b-transparent"></span>
              </span>

            </div>
          ))}
        </div>

        <HeroPage ref={HeroPageRef} />
        <div className=" mt-[-40rem] mb-4 lg:mb-[20rem]">
          <Circle handleIconClick={() => handleIconClick("portfolio", portfolioRef)} />
        </div>
        <div ref={aboutRef}><About /></div>
        <Skills ref={skillsRef} />
        <div ref={qualificationRef}><Qualification /></div>
        <Portfolio ref={portfolioRef} />
      </div>
    </div>
  );
};

export default Homepage;
