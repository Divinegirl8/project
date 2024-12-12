import React from "react";
import passGen from "../../../src/asset/portfolio/passgen.png"
import dashboard from "../../asset/portfolio/dashboard-user.png"
import blog from "../../asset/portfolio/blog.png"
import myweb from "../../asset/portfolio/my-web.png"
import style from "./index.module.css"

const Portfolio = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
    return (
        <div className='bg-[#000] w-full pb-16' ref={ref}>

            <div className="flex lg:ml-[30rem] ml-5 lg:pt-16">
                <div className="flex flex-row gap-2 justify-center border-gray-500 border w-[10rem] h-[30px] rounded-[20px] pt-1">
                    <i
                        className="fa-solid fa-circle-dot"
                        style={{ color: "#fff", paddingTop: "3px", fontSize: "13px" }}
                    ></i>
                    <p className="font-normal text-white font-fontInter uppercase lg;text-[13px] text-[12px] lg:mt-0 mt-[1px]">Portfolio</p>
                </div>
            </div>

            <h1 className=" mt-10  lg:text-[50px] text-[35px] text-white lg:ml-[30rem] ml-5">Projects </h1>

            <div className="lg:ml-[30rem] mt-10">
                <div className={`relative group ${style.slideUp}`}>
                    {/* Image */}
                    <img
                        src={passGen}
                        className="lg:w-[50rem] lg:h-[30rem] w-[20rem] h-[15rem] mx-auto lg:mx-0 object-cover transition-opacity duration-300 group-hover:opacity-75 lg:rounded-[25px] rounded-[15px]"
                    />

                    {/* Skills */}
                    <div className="top-[27rem] ml- 1 lg:mx-2 absolute inset-0 hidden lg:block">
                        <span className="bg-black text-white px-4 py-2 rounded-md mx-2 text-sm font-medium">
                            Java
                        </span>
                        <span className="bg-black text-white px-4 py-2 rounded-md mx-2 text-sm font-medium">
                            TypeScript
                        </span>
                        <span className="bg-black text-white px-4 py-2 rounded-md mx-2 text-sm font-medium">
                            Render
                        </span>
                        <span className="bg-black text-white px-4 py-2 rounded-md mx-2 text-sm font-medium">
                            TailwindCss
                        </span>
                        <span className="bg-black text-white px-4 py-2 rounded-md mx-2 text-sm font-medium">
                            Docker
                        </span>
                        <span className="bg-black text-white px-4 py-2 rounded-md mx-2 text-sm font-medium">
                            Github
                        </span>
                        <span className="bg-black text-white px-4 py-2 rounded-md mx-2 text-sm font-medium">
                            React
                        </span>
                        <span className="bg-black text-white px-4 py-2 rounded-md mx-2 text-sm font-medium">
                            Vercel
                        </span>

                    </div>

                    <div className="text-white ml-5 mt-3 lg:hidden">Technologies used:</div>

                        <div className=" ml-5 lg:hidden  grid-cols-3 grid  sm:grid-cols-6 mt-2 mx-6 gap-5 ">
                            <span className=" text-white  border-b-2 px-5 py-2 border-0 border-yellow-600 text-[13px] font-medium w-[5rem]">
                                React
                            </span>
                            <span className=" text-white  border-b-2 px-5 py-2 border-0 border-yellow-600 text-[13px] font-medium w-[5rem]">
                                Java
                            </span>
                            <span className="text-white  border-b-2 px-3 py-2 border-0 border-yellow-600   text-[13px] font-medium w-[6rem]">
                                TypeScript
                            </span>
                            <span className="text-white  border-b-2 px-4 py-2 border-0 border-yellow-600  text-[13px]  font-medium w-[5rem]">
                                Vercel
                            </span>
                            <span className="text-white  border-b-2 px-2 py-2 border-0 border-yellow-600  text-[13px] font-medium w-[6rem]">
                                TailwindCss
                            </span>
                            <span className=" text-white  border-b-2 px-5 py-2 border-0 border-yellow-600 text-[13px] font-medium w-[5rem]">
                                Docker
                            </span>
                            <span className="text-white  border-b-2 px-5 py-2 border-0 border-yellow-600   text-[13px] font-medium w-[5rem]">
                                render
                            </span>
                            <span className="text-white  border-b-2 px-5 py-2 border-0 border-yellow-600   text-[13px] font-medium w-[5rem]">
                                Github
                            </span>
                        </div>

                    <div className="lg:absolute lg:inset-0 lg:ml-[-10rem] ml-3 lg:flex lg:flex-col items-center justify-center lg:opacity-0 lg:bg-black lg:bg-opacity-30 lg:group-hover:opacity-100 lg:transition-opacity duration-300 lg:mt-0 mt-5">

                        {/* Buttons */}
                        <div>
                            <button className="bg-white text-black lg:px-4  px-2 py-2 rounded-md mx-2 lg:hover:bg-gray-200 text-[12px] lg:text-[15px]">
                                <a href="https://password-generator-react-pi-ruddy.vercel.app/" target="_blank">go to website</a>
                            </button>
                            <button className="bg-white text-black lg:px-4 px-2 py-2 rounded-md mx-2 lg:hover:bg-gray-200 text-[12px] lg:text-[15px]">
                                <a href="https://password-generator-java.onrender.com/documentation/password-generator/swagger-ui/index.html#/" target="_blank">go to endpoint</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:ml-[30rem] mt-10 lg:block hidden">
                <div className={`relative group ${style.slideUp}`}>
                    {/* Image */}
                    <img
                        src={dashboard}
                        className="w-[50rem] h-[30rem] object-cover transition-opacity duration-300 group-hover:opacity-75 rounded-[25px]"
                    />

                    {/* Skills */}
                    <div className="top-[27rem] ml-1 lg:mx-10 absolute inset-0 hidden lg:block">
                        <span className="bg-black text-white px-4 py-2 rounded-md mx-2 text-sm font-medium">
                            React
                        </span>
                        <span className="bg-black text-white px-4 py-2 rounded-md mx-2 text-sm font-medium">
                            TypeScript
                        </span>
                        <span className="bg-black text-white px-4 py-2 rounded-md mx-2 text-sm font-medium">
                            GraphqlZero
                        </span>
                        <span className="bg-black text-white px-4 py-2 rounded-md mx-2 text-sm font-medium">
                            Vercel
                        </span>
                        <span className="bg-black text-white px-4 py-2 rounded-md mx-2 text-sm font-medium">
                            Redux
                        </span>
                        <span className="bg-black text-white px-4 py-2 rounded-md mx-2 text-sm font-medium">
                            TailwindCss
                        </span>
                        <span className="bg-black text-white px-4 py-2 rounded-md mx-2 text-sm font-medium">
                            Github
                        </span>
                    </div>

                    <div className="absolute inset-0 ml-[-10rem] flex flex-col items-center justify-center opacity-0 bg-black bg-opacity-30 group-hover:opacity-100 transition-opacity duration-300">

                        <p className="text-white text-center mb-4 px-4 lg:w-[40rem]">
                            A simple project that retrieves user data from GraphQLZero, displays it in a table, and includes features like pagination, filtering, and searching. Additionally, it provides a modal to show detailed information about a selected user.
                        </p>

                        {/* Buttons */}
                        <div>
                            <button className="bg-white text-black px-4 py-2 rounded-md mx-2 hover:bg-gray-200">
                                <a href="https://dashboard-zeta-one-11.vercel.app/" target="_blank">go to website</a>
                            </button>
                            <button className="bg-white text-black px-4 py-2 rounded-md mx-2 hover:bg-gray-200">
                                <a href="https://github.com/Divinegirl8/Dashboard" target="_blank">go to github</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:ml-[30rem] mt-10">
                <div className={`relative group ${style.slideUp}`}>
                    {/* Image */}
                    <img
                        src={myweb}
                        className="lg:w-[50rem] lg:h-[30rem]  w-[20rem] h-[15rem] mx-auto lg:mx-0 object-cover transition-opacity duration-300 group-hover:opacity-75 rounded-[25px] border-[1px] border-gray-500 p-8"
                    />

                    {/* Skills */}
                    <div className="top-[27rem] ml-1 lg:ml-10 absolute inset-0 hidden lg:block">
                        <span className="bg-white text-black px-4 py-2 rounded-md mx-2 text-sm font-medium">
                            React
                        </span>
                        <span className="bg-white text-black px-4 py-2 rounded-md mx-2 text-sm font-medium">
                            TypeScript
                        </span>
                        <span className="bg-white text-black px-4 py-2 rounded-md mx-2 text-sm font-medium">
                            Vercel
                        </span>
                        <span className="bg-white text-black px-4 py-2 rounded-md mx-2 text-sm font-medium">
                            TailwindCss
                        </span>
                        <span className="bg-white text-black px-4 py-2 rounded-md mx-2 text-sm font-medium">
                            Github
                        </span>
                    </div>

                    <div className="text-white ml-5 mt-3 lg:hidden">Technologies used:</div>

                        <div className=" ml-5 lg:hidden  grid-cols-3 grid  sm:grid-cols-6 mt-2 mx-6 gap-5 ">
                            <span className=" text-white  border-b-2 px-5 py-2 border-0 border-yellow-600 text-[13px] font-medium w-[5rem]">
                                React
                            </span>
                            <span className="text-white  border-b-2 px-3 py-2 border-0 border-yellow-600   text-[13px] font-medium w-[6rem]">
                                TypeScript
                            </span>
                            <span className="text-white  border-b-2 px-4 py-2 border-0 border-yellow-600  text-[13px]  font-medium w-[5rem]">
                                Vercel
                            </span>
                            <span className="text-white  border-b-2 px-2 py-2 border-0 border-yellow-600  text-[13px] font-medium w-[6rem]">
                                TailwindCss
                            </span>
                            <span className="text-white  border-b-2 px-5 py-2 border-0 border-yellow-600   text-[13px] font-medium w-[5rem]">
                                Github
                            </span>
                        </div>

                    <div className="absolute inset-0 ml-[-10rem] flex flex-col items-center justify-center opacity-0 bg-black bg-opacity-30 group-hover:opacity-100 transition-opacity duration-300">
                        {/* Buttons */}
                        <div>
                            {/* <button className="bg-white text-black px-4 py-2 rounded-md mx-2 hover:bg-gray-200">
                                <a href="https://quincy-website.vercel.app/" target="_blank">go to website</a>
                            </button>
                            <button className="bg-white text-black px-4 py-2 rounded-md mx-2 hover:bg-gray-200">
                                <a href="https://github.com/Divinegirl8/quincy_website" target="_blank">go to github</a>
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:ml-[30rem] mt-10">
                <div className={`relative group ${style.slideUp}`}>
                    {/* Image */}
                    <img
                        src={blog}
                        className="lg:w-[50rem] lg:h-[30rem]  w-[20rem] h-[15rem] mx-auto lg:mx-0 object-cover transition-opacity duration-300 group-hover:opacity-75 rounded-[25px] border-[1px] border-gray-500  p-1"
                    />

                    {/* Skills */}
                    <div className="top-[27rem] ml-1 lg:ml-10 absolute inset-0 hidden lg:block">
                        <span className="bg-black text-white px-4 py-2 rounded-md mx-2 text-sm font-medium">
                            React
                        </span>
                        <span className="bg-black text-white px-4 py-2 rounded-md mx-2 text-sm font-medium">
                            TypeScript
                        </span>
                        <span className="bg-black text-white px-4 py-2 rounded-md mx-2 text-sm font-medium">
                            Vercel
                        </span>
                        <span className="bg-black text-white px-4 py-2 rounded-md mx-2 text-sm font-medium">
                            TailwindCss
                        </span>
                        <span className="bg-black text-white px-4 py-2 rounded-md mx-2 text-sm font-medium">
                            Github
                        </span>
                    </div>
                    <div className="text-white ml-5 mt-3 lg:hidden">Technologies used:</div>

                    <div className=" ml-5 lg:hidden  grid-cols-3 grid  sm:grid-cols-6 mt-2 mx-6 gap-5 ">
                        <span className=" text-white  border-b-2 px-5 py-2 border-0 border-yellow-600 text-[13px] font-medium w-[5rem]">
                            React
                        </span>
                        <span className="text-white  border-b-2 px-3 py-2 border-0 border-yellow-600   text-[13px] font-medium w-[6rem]">
                            TypeScript
                        </span>
                        <span className="text-white  border-b-2 px-4 py-2 border-0 border-yellow-600  text-[13px]  font-medium w-[5rem]">
                            Vercel
                        </span>
                        <span className="text-white  border-b-2 px-2 py-2 border-0 border-yellow-600  text-[13px] font-medium w-[6rem]">
                            TailwindCss
                        </span>
                        <span className="text-white  border-b-2 px-5 py-2 border-0 border-yellow-600   text-[13px] font-medium w-[5rem]">
                            Github
                        </span>
                    </div>


                    <div className="lg:absolute lg:inset-0 lg:ml-[-10rem] ml-3 lg:flex lg:flex-col items-center justify-center lg:opacity-0 lg:bg-black lg:bg-opacity-30 lg:group-hover:opacity-100 lg:transition-opacity duration-300 lg:mt-0 mt-5">
                        {/* Buttons */}
                        <div>
                            <button className="bg-white text-black lg:px-4 px-2 py-2 rounded-md mx-2 hover:bg-gray-200 text-[12px] lg:text-[15px]">
                                <a href="https://quincy-website.vercel.app/" target="_blank">go to website</a>
                            </button>
                            <button className="bg-white text-black lg:px-4  px-2 py-2 rounded-md mx-2 hover:bg-gray-200 text-[12px] lg:text-[15px]">
                                <a href="https://github.com/Divinegirl8/quincy_website" target="_blank">go to github</a>
                            </button>
                        </div>


                    </div>
                    
                </div>
            </div>

        </div>
    )
})

export default Portfolio
