

import React, { useEffect, useState } from "react";
import style from "./index.module.css";

interface CustomCursorProps {
    isShown: boolean;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ isShown }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);

            if (timer) {
                clearTimeout(timer);
            }

            const newTimer = setTimeout(() => {
                setIsVisible(false);
            }, 1200); 

            setTimer(newTimer);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

      
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);

        if (isShown) {
            document.body.style.cursor = 'none';
        } else {
            document.body.style.cursor = 'none';
        }

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            if (timer) {
                clearTimeout(timer);
            }
            
            document.body.style.cursor = 'default';
        };
    }, [timer, isShown]);

    const cursorClass = isShown ? style.customCursor : style.hiddenCursor;

    return (
        <>
            {isVisible && (
                <div
                    className={cursorClass}
                    style={{ left: `${position.x}px`, top: `${position.y}px`, display : "flex", justifyItems : "center", alignItems: "center" }}
                >
                   <div className="bg-yellow-600 h-2 w-2 rounded-[50%] ml-5">
                    </div>    
                 </div>
            )}
        </>
    );
};

export default CustomCursor;
