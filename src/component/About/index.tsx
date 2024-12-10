import { useRef, useState, useEffect } from "react";
import style from "./index.module.css";
import React from "react";

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

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
        
          entry.target.classList.add(style.visible);
          entry.target.classList.add(style.bounceUp);
          entry.target.classList.remove(style.hidden);
        } else {
      
          entry.target.classList.remove(style.bounceUp);
        }
      });
    }, { threshold: 0.5 }); 

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
   
      <div className={style.header} ref={ref}>
        <div>
          <div
            ref={(el) => (elementsRef.current[0] = el)}
            className={`${style.innerHeader} ${style.hidden}`}
          >
            <div className="flex lg:ml-[30rem] pt-[10rem]">
              <div className="flex flex-row gap-2 justify-center border-gray-500 border w-[10rem] h-[30px] rounded-[20px] pt-1">
                <i
                  className="fa-solid fa-user"
                  style={{ color: "#fff", paddingTop: "3px", fontSize: "13px" }}
                ></i>
                <p className="font-normal text-white font-fontInter uppercase text-[13px]">About</p>
              </div>
            </div>
          </div>

          <div className="mt-[-20rem] mb-20 ">
            <div>
              <div
                ref={(el) => (elementsRef.current[1] = el)}
                className={`${style.hidden} lg:text-center mt-8 lg:ml-[45rem] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto`}
              >
                <button
                  onClick={togglePlayPause}
                  className="px-4 py-2 text-white rounded-full"
                >
                  {isPlaying ? <span>❚❚</span> : <span>&#9654;</span>}
                </button>
                <audio ref={audioRef} src={aboutMe} />
              </div>

              <p
                ref={(el) => (elementsRef.current[2] = el)}
                className={`${style.hidden} text-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto lg:ml-[30rem] text-[#999999]`}
              >
               
               I'm a dedicated Software Engineer with expertise in crafting scalable, 
               efficient, and reliable software solutions using technologies like Java, JavaScript, 
               Python, Node.js, React, Next.js, and Vue.js. Passionate about clean, maintainable code, 
               I focus on solving real-world problems and delivering impactful projects across diverse industries. 
               With a strong foundation in backend development, databases, and cloud services, 
               I thrive on tackling challenges and collaborating with teams to create innovative digital 
               solutions while staying ahead of tech trends.
              </p>
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
