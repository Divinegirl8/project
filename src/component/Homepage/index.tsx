import React, { useEffect, useState } from 'react';
import style from './index.module.css';
import HeroPage from '../HeroPage';
import About from '../About';

const Homepage: React.FC = () => {

    const [isAnimationComplete, setIsAnimationComplete] = useState(false);

    useEffect(() => {
    
        document.body.style.overflow = 'hidden';
        const animationDuration = 3000; 
        const timer = setTimeout(() => {
            setIsAnimationComplete(true);
            document.body.style.overflow = ''; 
        }, animationDuration);

       
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="overflow-hidden h-screen bg-black">
            <div className={`${style.shakingLine}`}></div>

            <div className={`${style.pageContent} absolute inset-0`}>
                <HeroPage />
                <About />
                <div className='bg-[#C0C0C0] w-full h-full'></div>
            </div>
        </div>
    );
};

export default Homepage;
