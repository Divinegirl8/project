// import React, { useEffect, useState } from "react";
// import style from "./index.module.css"

// const CustomCursor: React.FC = () => {
//     const [position, setPosition] = useState({ x: 0, y: 0 });
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//         const handleMouseMove = (e: MouseEvent) => {
//             setPosition({ x: e.clientX, y: e.clientY });
//             setIsVisible(true);
//         };

//         const handleMouseLeave = () => {
//             setIsVisible(false);
//         };

//         document.addEventListener("mousemove", handleMouseMove);
//         document.addEventListener("mouseleave", handleMouseLeave);

//         return () => {
//             document.removeEventListener("mousemove", handleMouseMove);
//             document.removeEventListener("mouseleave", handleMouseLeave);
//         };
//     }, []);

//     return (
//         <>
//             {isVisible && (
//                 <div
//                     className={style.customCursor}
//                     style={{ left: `${position.x}px`, top: `${position.y}px` , display:"none"}}
//                 />
//             )}
//         </>
//     );
// };

// export default CustomCursor;



import React, { useEffect, useState } from "react";
import style from "./index.module.css";

interface CustomCursorProps {
    isShown: boolean;  // Adjusted to be a boolean
}

const CustomCursor: React.FC<CustomCursorProps> = ({ isShown }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);

            // Reset the timer whenever the mouse moves
            if (timer) {
                clearTimeout(timer);
            }

            const newTimer = setTimeout(() => {
                setIsVisible(false);
            }, 1200); // Adjust delay as needed

            setTimer(newTimer);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        // Add event listeners for mouse move and leave
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [timer]);

    const cursorClass = isShown ? style.customCursor : style.hiddenCursor;

    return (
        <>
            {isVisible && (
                <div
                    className={cursorClass}
                    style={{ left: `${position.x}px`, top: `${position.y}px` }}
                />
            )}
        </>
    );
};

export default CustomCursor;
