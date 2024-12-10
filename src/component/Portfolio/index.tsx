import React from "react";
import passGen from "../../../src/asset/portfolio/passgen.png"
import dashboard from "../../asset/portfolio/dashboard-user.png"
import blog from "../../asset/portfolio/blog.png"
import myweb from "../../asset/portfolio/my-web.png"
import style from "./index.module.css"

const Portfolio = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
    return (
        <div className='bg-[#000] w-full h-full' ref={ref}>

            <div className="flex ml-[30rem] pt-[10rem]">
                <div className="flex flex-row gap-2 justify-center border-gray-500 border w-[10rem] h-[30px] rounded-[20px] pt-1">
                    <i
                        className="fa-solid fa-circle-dot"
                        style={{ color: "#fff", paddingTop: "3px", fontSize: "13px" }}
                    ></i>
                    <p className="font-normal text-white font-fontInter uppercase text-[13px]">Portfolio</p>
                </div>
            </div>

            <h1 className=" mt-10 text-[50px] text-white ml-[30rem]">Projects </h1>

            <div className="ml-[30rem] mt-10">
                <div className={`relative group ${style.slideUp}`}>
                    {/* Image */}
                    <img
                        src={passGen}
                        className="w-[50rem] h-[30rem] object-cover transition-opacity duration-300 group-hover:opacity-75 rounded-[25px]"
                    />

                    {/* Skills */}
                    <div className="top-[27rem] ml-10 absolute inset-0">
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
                            Github
                        </span>
                        <span className="bg-black text-white px-4 py-2 rounded-md mx-2 text-sm font-medium">
                            React
                        </span>
                        <span className="bg-black text-white px-4 py-2 rounded-md mx-2 text-sm font-medium">
                            Vercel
                        </span>
                    </div>

                    <div className="absolute inset-0 ml-[-10rem] flex flex-col items-center justify-center opacity-0 bg-black bg-opacity-30 group-hover:opacity-100 transition-opacity duration-300">

                        {/* Buttons */}
                        <div>
                            <button className="bg-white text-black px-4 py-2 rounded-md mx-2 hover:bg-gray-200">
                                <a href="https://password-generator-react-pi-ruddy.vercel.app/" target="_blank">go to website</a>
                            </button>
                            <button className="bg-white text-black px-4 py-2 rounded-md mx-2 hover:bg-gray-200">
                                <a href="https://password-generator-java.onrender.com/documentation/password-generator/swagger-ui/index.html#/" target="_blank">go to endpoint</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ml-[30rem] mt-10">
                <div className={`relative group ${style.slideUp}`}>
                    {/* Image */}
                    <img
                        src={dashboard}
                        className="w-[50rem] h-[30rem] object-cover transition-opacity duration-300 group-hover:opacity-75 rounded-[25px]"
                    />

                    {/* Skills */}
                    <div className="top-[27rem] ml-10 absolute inset-0">
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

                        <p className="text-white text-center mb-4 px-4 w-[40rem]">
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

            <div className="ml-[30rem] mt-10">
                <div className={`relative group ${style.slideUp}`}>
                    {/* Image */}
                    <img
                        src={myweb}
                        className="w-[50rem] h-[30rem] object-cover transition-opacity duration-300 group-hover:opacity-75 rounded-[25px] border-[1px] border-gray-500 p-8"
                    />

                    {/* Skills */}
                    <div className="top-[27rem] ml-10 absolute inset-0">
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

            <div className="ml-[30rem] mt-10">
                <div className={`relative group ${style.slideUp}`}>
                    {/* Image */}
                    <img
                        src={blog}
                        className="w-[50rem] h-[30rem] object-cover transition-opacity duration-300 group-hover:opacity-75 rounded-[25px] border-[1px] border-gray-500  p-1"
                    />

                    {/* Skills */}
                    <div className="top-[27rem] ml-10 absolute inset-0">
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

                    <div className="absolute inset-0 ml-[-10rem] flex flex-col items-center justify-center opacity-0 bg-black bg-opacity-30 group-hover:opacity-100 transition-opacity duration-300">
                        {/* Buttons */}
                        <div>
                            <button className="bg-white text-black px-4 py-2 rounded-md mx-2 hover:bg-gray-200">
                                <a href="https://quincy-website.vercel.app/" target="_blank">go to website</a>
                            </button>
                            <button className="bg-white text-black px-4 py-2 rounded-md mx-2 hover:bg-gray-200">
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
