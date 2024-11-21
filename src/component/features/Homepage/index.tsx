
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


  return (
    <>
    
<div
  className={`${
    !isAnimationComplete ? 'overflow-hidden' : 'overflow-auto'
  } h-screen bg-black relative cursor-none`}
>
      {!isAnimationComplete && <div className={`${style.shakingLine}`}></div>}

      
      <div
        className={`${style.pageContent} absolute inset-0 ${
          isAnimationComplete ? style.visible : ''
        }`}
      > <CustomCursor isShown={true}/>
        <HeroPage />
        <About />
        <Skills />
        <Qualification />
        <Portfolio />
      </div>
    </div>
    </>
  );
};

export default Homepage;

