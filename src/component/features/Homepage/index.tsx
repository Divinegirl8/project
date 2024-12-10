
// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom'; 
// import style from './index.module.css';
// import HeroPage from '../../HeroPage';
// import About from '../../About';
// import Skills from '../../Skills';
// import Qualification from '../../Qualification';
// import Portfolio from '../../Portfolio';
// import CustomCursor from '../../CustomCursor';

// const Homepage: React.FC = () => {
//   const [isAnimationComplete, setIsAnimationComplete] = useState(false);
//   const location = useLocation();

//  useEffect(() => {
//   document.body.style.overflow = 'hidden';

//   const animationDuration = 3000;
//   const timer = setTimeout(() => {
//     setIsAnimationComplete(true);
//     document.body.style.overflow = 'auto'; 
  
//   }, animationDuration);

//   return () => {
//     clearTimeout(timer);
    
//   };
// }, [location]);


//   return (
//     <>
    
// <div
//   className={`${
//     !isAnimationComplete ? 'overflow-hidden' : 'overflow-auto'
//   } h-screen bg-black relative cursor-none`}
// >
//       {!isAnimationComplete && <div className={`${style.shakingLine}`}></div>}

      
//       <div
//         className={`${style.pageContent} absolute inset-0 ${
//           isAnimationComplete ? style.visible : ''
//         }`}
//       > <CustomCursor isShown={true}/>
//         <HeroPage />
//         <About />
//         <Skills />
//         <Qualification />
//         <Portfolio />
//       </div>
//     </div>
//     </>
//   );
// };

// export default Homepage;


import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; 
import style from './index.module.css';
import HeroPage from '../../HeroPage';
import About from '../../About';
import Skills from '../../Skills';
import Qualification from '../../Qualification';
import Portfolio from '../../Portfolio';
import CustomCursor from '../../CustomCursor';

const Homepage: React.FC = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const location = useLocation();

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
      threshold: 0.5, // Trigger when 50% of the element is in view
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
          
          {/* Section Components */}
        <HeroPage />
          <div className={`${style.section}`}><About /></div>
          <Skills />
          <div className={`${style.section}`}><Qualification /></div>
          {/* <div className={`${style.section}`}><Portfolio /></div> */}
          <div ><Portfolio /></div>
        </div>
      </div>
    </>
  );
};

export default Homepage;

