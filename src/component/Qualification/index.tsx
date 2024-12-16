import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";

const Qualification = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  const [ref1, inView1] = useInView({ triggerOnce: false });
  const [ref2, inView2] = useInView({ triggerOnce: false });

  const slideIn1 = useSpring({
    transform: inView1 ? "translateX(0)" : "translateX(100%)",
    opacity: inView1 ? 1 : 0,
    config: { tension: 250, friction: 40 },
  });

  const slideIn2 = useSpring({
    transform: inView2 ? "translateX(0)" : "translateX(100%)",
    opacity: inView2 ? 1 : 0,
    config: { tension: 250, friction: 40 },
  });

  return (
    <div className="bg-[#000] lg:mt-0  w-full pb-16 overflow-x-hidden lg:justify-center lg:items-center flex flex-col" >
      <div className="  ml-5 lg:ml-0  lg:mr-[20rem] lg:pt-[10rem] pt-10">
        <div className="flex flex-row gap-2 justify-center border-gray-500 border w-[10rem] h-[30px] rounded-[20px] pt-1" ref={ref}>
          <i className="fa-solid fa-file" style={{ color: "#fff", paddingTop: "3px", fontSize: "13px" }}></i>
          <p className="font-normal text-white font-fontInter uppercase lg:text-[13px] text-[12px] lg:mt-0 mt-[1px] ">Qualification</p>
        </div>
      </div>

      <div className="text-white  ml-5">
        <h1 className="mt-10 lg:text-[50px] text-[35px]">
          <span className="text-yellow-600">Experience </span>& Education
        </h1>

        {/* First container */}
        <animated.div ref={ref1} style={slideIn1}>
          <div className="flex flex-row gap-7 mt-10 group">
            <div>
              <div className="w-3 h-3 mt-[6px] rounded-[50px] bg-[#999999] group-hover:bg-yellow-600"></div>
              <div className="w-[1px] lg:h-[15rem] h-[12rem] ml-[5px] rounded-[50px] bg-[#999999]"></div>
            </div>

            <div>
              <h4 className="text-[#999999] group-hover:text-yellow-600">05/2024 – present</h4>
              <div className="mt-7">
                <h1 className="text-white lg:text-[30px] text-[25px] font-thin ">Software Engineer</h1>
                <h1 className="text-[#999999] lg:text-[15px] text-[13px] font-normal">Semicolon Africa</h1>
              </div>
            </div>
          </div>
        </animated.div>

        {/* Second container */}
        <animated.div ref={ref2} style={slideIn2}>
          <div className="flex flex-row gap-7 group">
            <div>
              <div className="w-3 h-3 rounded-[50px] bg-[#999999] group-hover:bg-yellow-600"></div>
              <div className="w-[1px] lg:h-[15rem] h-[12rem] ml-[5px] rounded-[50px] bg-[#999999]"></div>
            </div>

            <div>
              <h4 className="text-[#999999] group-hover:text-yellow-600 mt-[-7px]">2022</h4>
              <div className="mt-7">
                <h1 className="text-white lg:text-[30px] text-[25px] font-thin ">Frontend Engineering</h1>
                <h1 className="text-[#999999] lg:text-[15px] text-[13px] font-normal">Grapple Space</h1>
              </div>
            </div>
          </div>
        </animated.div>

        {/* Third container */}
        <animated.div ref={ref2} style={slideIn2}>
          <div className="flex flex-row gap-7 group">
            <div>
              <div className="w-3 h-3 rounded-[50px] bg-[#999999] group-hover:bg-yellow-600"></div>
              <div className="w-[1px] lg:h-[15rem] h-[12rem] ml-[5px] rounded-[50px] bg-[#999999]"></div>
            </div>

            <div>
              <h4 className="text-[#999999] group-hover:text-yellow-600 mt-[-6px] ">2023– 2024</h4>
              <div className="mt-7">
                <h1 className="text-white lg:text-[30px] text-[25px] font-thin">Software Engineering</h1>
                <h1 className="text-[#999999] lg:text-[15px] text-[13px] font-normal ">Semicolon Africa</h1>
              </div>
            </div>
          </div>
        </animated.div>
      </div>
    </div>
  );
});

export default Qualification;
