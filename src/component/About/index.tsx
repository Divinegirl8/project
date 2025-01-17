// import { useRef, useState, useEffect } from "react";
// import style from "./index.module.css";
// import React from "react";

// const About = React.forwardRef<HTMLDivElement, {}>((props, ref)=> {
//   const audioRef = useRef<HTMLAudioElement | null>(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const aboutMe = process.env.PUBLIC_URL + '/song.mp4';

//   const togglePlayPause = () => {
//     if (audioRef.current) {
//       if (isPlaying) {
//         audioRef.current.pause();
//       } else {
//         audioRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
        
//           entry.target.classList.add(style.visible);
//           entry.target.classList.add(style.bounceUp);
//           entry.target.classList.remove(style.hidden);
//         } else {
      
//           entry.target.classList.remove(style.bounceUp);
//         }
//       });
//     }, { threshold: 0.5 }); 

//     elementsRef.current.forEach((el) => {
//       if (el) observer.observe(el);
//     });

//     return () => {
//       elementsRef.current.forEach((el) => {
//         if (el) observer.unobserve(el);
//       });
//     };
//   }, []);

//   return (
//     <>
   
//       <div className={style.header} ref={ref}>
//         <div className="text-white lg:justify-center lg:pb-[5.5rem] lg:items-center lg:flex lg:ml-10">
         
       
//         <div className="justify-center items-center flex lg:pt-28">
//           <div
//             ref={(el) => (elementsRef.current[0] = el)}
//             className={` lg:w-full ${style.hidden}`}
//           >
//             <div className="lg:pt-12 pt-10 lg:pb-20  ml-5">
//               <div className="flex flex-row gap-2 justify-center border-gray-500 border w-[10rem] h-[30px] rounded-[20px] pt-1 ">
//                 <i
//                   className={`fa-solid fa-user ${style.icon}`}
//                   style={{ color: "#fff", paddingTop: "3px", fontSize: "13px" }} 
//                 ></i>
//                 <p className={`font-normal text-white font-fontInter uppercase lg:text-[13px] text-[12px] mt-[1px] lg:mt-0`}>About</p>
//               </div>
//             </div>
//             <div className="lg:mb-0 mb-20 ">
//             <div>
//               <div
//                 ref={(el) => (elementsRef.current[1] = el)}
//                 className={`${style.hidden}  max-w-xs lg:ml-1  lg:mx-0 mx-5`}
//               >
//                 <button
//                   onClick={togglePlayPause}
//                   className="px-4 py-2 text-white rounded-full"
//                 >
//                   {isPlaying ? <span>❚❚</span> : <span>&#9654;</span>}
//                 </button>
//                 <audio ref={audioRef} src={aboutMe} />
//               </div>

//               <p
//                 ref={(el) => (elementsRef.current[2] = el)}
//                 className={`${style.hidden} lg:max-w-xs  xl:max-w-xl  lg:mx-0 lg:ml-5 mx-6 text-[#999999]`}
//               >
               
//                I'm a dedicated Software Engineer with expertise in crafting scalable, 
//                efficient, and reliable software solutions using technologies like Java, JavaScript, 
//                Python, Node.js, React, Next.js, and Vue.js. Passionate about clean, maintainable code, 
//                I focus on solving real-world problems and delivering impactful projects across diverse industries. 
//                With a strong foundation in backend development, databases, and cloud services, 
//                I thrive on tackling challenges and collaborating with teams to create innovative digital 
//                solutions while staying ahead of tech trends.
//               </p>
//             </div> </div>
//           </div>

//           </div>

         

         
//         </div>

//         <div>
//           <svg
//             className={style.waves}
//             xmlns="http://www.w3.org/2000/svg"
//             xmlnsXlink="http://www.w3.org/1999/xlink"
//             viewBox="0 24 150 28"
//             preserveAspectRatio="none"
//             shape-rendering="auto"
//           >
//             <defs>
//               <path
//                 id="gentle-wave"
//                 d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
//               />
//             </defs>
//             {/* <g className={style.parallax}>
//               <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
//               <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
//               <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
//               <use xlinkHref="#gentle-wave" x="48" y="7" fill="#C0C0C0" />
//             </g> */}

//            <g className={style.parallax}>
//               <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
//               <use xlinkHref="#gentle-wave" x="48" y="3" fill="#C0C0C0" />
//               <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
//               <use xlinkHref="#gentle-wave" x="48" y="7" fill="#343434" />
//             </g>
//           </svg>
//         </div>
//       </div>
//     </>
//   );
// });

// export default About;


import { useRef, useState, useEffect } from "react";
import style from "./index.module.css";
import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";

const About = React.forwardRef<HTMLDivElement, {}>((props, ref)=> {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const aboutMe = process.env.PUBLIC_URL + '/song.mp4';

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [ref1, inView1] = useInView({ triggerOnce: false });
  const [ref2, inView2] = useInView({ triggerOnce: false });
  const [ref3, inView3] = useInView({ triggerOnce: false });


  const slideIn1 = useSpring({
    transform: inView1 ? "translateY(0)" : "translateY(100%)",
    opacity: inView1 ? 1 : 0,
    config: { tension: 150, friction: 60 },
  });

  const slideIn2 = useSpring({
    transform: inView2 ? "translateY(0)" : "translateY(100%)",
    opacity: inView2 ? 1 : 0,
    config: { tension: 150, friction: 60 },
  });

  const slideIn3 = useSpring({
    transform: inView3 ? "translateY(0)" : "translateY(100%)",
    opacity: inView3 ? 1 : 0,
    config: { tension: 150, friction: 60 },
  });

  return (
    <>
   
      <div className={style.header} ref={ref}>
        <div className={`text-white lg:justify-center lg:pb-[5.5rem] lg:items-center lg:flex xl:ml-[15rem] lg:ml-[9rem] overflow-y-hidden ${style.abtDiv}`}>
         
       
        <div className="justify-center items-center flex lg:pt-10">
          <div
            ref={(el) => (elementsRef.current[0] = el)}
            className={` lg:w-full ${style.hidden}`}
          >
            <animated.div ref={ref1} style={slideIn1} >
            <div className="lg:pt-12 pt-10 lg:pb-20  ml-5" >
              <div className="flex flex-row gap-2 justify-center border-gray-500 border w-[10rem] h-[30px] rounded-[20px] pt-1 ">
                <i
                  className={`fa-solid fa-user ${style.icon}`}
                  style={{ color: "#fff", paddingTop: "3px", fontSize: "13px" }} 
                ></i>
                <p className={`font-normal text-white font-fontInter uppercase lg:text-[13px] text-[12px] mt-[1px] lg:mt-0`}>About</p>
              </div>
            </div></animated.div>

            <animated.div ref={ref2} style={slideIn2}>
              <div>
                <h1 className="text-white ml-5 lg:mt-0 mt-16 lg:text-[45px] xl:w-[45rem] lg:w-[30rem] text-[30px] sm:text-[40px] sm:w-[40rem] font-light">Every great software solution begins with an even <span className="text-yellow-600">better story</span></h1>
              </div>
            </animated.div>

            <div className="lg:mb-0 mb-20 lg:mt-8 ">
             
            <div >
            <animated.div ref={ref3} style={slideIn3}>
              <div
                ref={(el) => (elementsRef.current[1] = el)}
                className={`${style.hidden}  max-w-xs lg:ml-1  lg:mt-0 mt-8 lg:mx-0 mx-5`}
              >
                <button
                  onClick={togglePlayPause}
                  className="px-4 py-8 lg:py-0 text-white rounded-full"
                >
                  {isPlaying ? <span>❚❚</span> : <span>&#9654;</span>}
                </button>
                <audio ref={audioRef} src={aboutMe} />
              </div></animated.div>

              <animated.div ref={ref3} style={slideIn3}>
              <p
                ref={(el) => (elementsRef.current[2] = el)}
                className={`${style.abtTxt} lg:max-w-[35rem]  xl:max-w-xl  lg:mx-0 lg:ml-5 mx-6 text-[#999999]`}
              >
               
               I'm a dedicated Software Engineer with expertise in crafting scalable, 
               efficient, and reliable software solutions using technologies like Java, JavaScript, 
               Python, Node.js, React, Next.js, and Vue.js. Passionate about clean, maintainable code, 
               I focus on solving real-world problems and delivering impactful projects across diverse industries. 
               With a strong foundation in backend development, databases, and cloud services, 
               I thrive on tackling challenges and collaborating with teams to create innovative digital 
               solutions while staying ahead of tech trends.
              </p></animated.div>
            </div>
            

            </div>
            
          </div>

          </div>

         
        </div>

        <div>
          <svg
            className={style.waves}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shape-rendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            {/* <g className={style.parallax}>
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#C0C0C0" />
            </g> */}

           <g className={style.parallax}>
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="#C0C0C0" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#343434" />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
});

export default About;



