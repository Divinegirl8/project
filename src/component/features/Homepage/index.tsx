
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; 
import style from './index.module.css';
import HeroPage from '../../HeroPage';
import About from '../../About';
import Skills from '../../Skills';
import Qualification from '../../Qualification';
import Portfolio from '../../Portfolio';

const Homepage: React.FC = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const location = useLocation();

 useEffect(() => {
  document.body.style.overflow = 'hidden';
  console.log('Animation started, overflow set to hidden');
  const animationDuration = 3000;
  const timer = setTimeout(() => {
    setIsAnimationComplete(true);
    document.body.style.overflow = 'auto'; 
    console.log('Animation complete, overflow set to auto');
  }, animationDuration);

  return () => {
    clearTimeout(timer);
    console.log('Cleanup function triggered');
  };
}, [location]);


  return (
<div
  className={`${
    !isAnimationComplete ? 'overflow-hidden' : 'overflow-auto'
  } h-screen bg-black relative`}
>
      {!isAnimationComplete && <div className={`${style.shakingLine}`}></div>}

   
      <div
        className={`${style.pageContent} absolute inset-0 ${
          isAnimationComplete ? style.visible : ''
        }`}
      >
        <HeroPage />
        <About />
        <Skills />
        <Qualification />
        <Portfolio />
      </div>
    </div>
  );
};

export default Homepage;

