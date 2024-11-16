import { useRef, useState } from "react";
import style from "./index.module.css"





const About:React.FC = () =>{
    const audioRef = useRef<HTMLAudioElement | null>(null);  
    const [isPlaying, setIsPlaying] = useState(false);  
  
   
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

    return(
        <>

<div className={`${style.header}`}>

<div>


<div className={`${style.innerHeader} flex  justify-center`}>
   <h1 className=" uppercase text-[30px] mt-20">About Me</h1>

</div>


<div className="mt-[-20rem]">
<div>
           <div className="text-center mt-8 lg:ml-[45rem] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
            <button 
              onClick={togglePlayPause}
              className="px-4 py-2  text-white rounded-full"
            > {isPlaying ? (
                <span>❚❚</span>
              ) : (
                <span>▶️</span> 
              )}
            </button>
            <audio ref={audioRef} src={"/Users/apple/my-portfolio/src/asset/audio/song.mp3"} />
          </div>
            
                <p className="text-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto lg:ml-[30rem]">
                I'm a dedicated Software Engineer with a passion for crafting reliable, efficient, and scalable software solutions. Skilled in modern development practices, I enjoy working with a range of technologies, including Java, JavaScript, Python, Node.js, and frameworks like React, Next.js, and Vue.js.

                Driven by a love for coding and continuous learning, I take pride in writing clean, maintainable code that not only functions flawlessly but also enhances the overall performance of applications. My journey has been fueled by a desire to solve real-world problems, with a track record of successfully delivering projects across diverse industries.

                With a strong foundation in backend development, database management, and cloud services, I enjoy diving into complex challenges and collaborating with cross-functional teams to bring ideas to life. I’m constantly pushing my own boundaries to stay on top of emerging tech trends and am committed to building impactful digital solutions.
                </p>

</div>





</div>

</div>


<div>
<svg className={style.waves} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
<defs>
<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
</defs>
<g className={`${style.parallax}`}>
<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
<use xlinkHref="#gentle-wave" x="48" y="7" fill="#C0C0C0" />
</g>
</svg>
</div>


</div>


        </>
    )
}

export default About