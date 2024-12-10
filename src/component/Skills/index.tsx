import React from "react";
import java from "../../asset/skills/java-removebg-preview.png"
import react from "../../asset/skills/react-removebg-preview.png"
import js from "../../asset/skills/javascript-removebg-preview.png"
import vue from "../../asset/skills/vuejs-removebg-preview.png"
import bootstrap from "../../asset/skills/bootsrap-removebg-preview.png"
import apollo from "../../asset/skills/apollo-removebg-preview.png"
import nodejs from "../../asset/skills/node-removebg-preview.png"
import redux from "../../asset/skills/redux-removebg-preview.png"
import css from "../../asset/skills/css-removebg-preview.png"
import html from "../../asset/skills/html-removebg-preview.png"
import tsx from "../../asset/skills/ts-removebg-preview.png"
import render from "../../asset/skills/render-removebg-preview.png"
import pytest from "../../asset/skills/pytest-removebg-preview.png"
import junit from "../../asset/skills/junit-removebg-preview.png"
import materialUi from "../../asset/skills/materialUi-removebg-preview.png"
import docker from "../../asset/skills/docker-removebg-preview (1).png"
import git from "../../asset/skills/git-removebg-preview.png"
import figma from "../../asset/skills/fig-removebg-preview.png"
import jbpm from "../../asset/skills/jbpm-removebg-preview.png"
import python from "../../asset/skills/python-removebg-preview.png"
import next from "../../asset/skills/next-removebg-preview.png"
import reactNative from "../../asset/skills/reactnative-inner.svg"
import springBoot from "../../asset/skills/springboot-removebg-preview.png"
import tailwindcss from "../../asset/skills/tailwindcss-removebg-preview.png"
import mongodb from "../../asset/skills/mongodbpix-removebg-preview.png"
import pg from "../../asset/skills/postgres-removebg-preview.png"
import mysql from "../../asset/skills/mysql-removebg-preview.png"
import postman from "../../asset/skills/postman-removebg-preview.png"
import linux from "../../asset/skills/linux-removebg-preview.png"
import macos from "../../asset/skills/ios-removebg-preview.png"
import windows from "../../asset/skills/windows-removebg-preview.png"
import go from "../../asset/skills/go-tutorial-removebg-preview.png"
import keycloak from "../../asset/skills/Keycloak_Logo-removebg-preview.png"
import swagger from "../../asset/skills/swagger-removebg-preview.png"
import mockito from "../../asset/skills/mockito-removebg-preview.png"
import flutter from "../../asset/skills/flutter-removebg-preview.png"
import style from "./index.module.css"


const Skills:React.FC = () =>{
    return(
      
        <div className='bg-[#343434] w-full h-full'>

        <div className="flex ml-[30rem] pt-[10rem]">
              <div className="flex flex-row gap-2 justify-center border-gray-500 border w-[10rem] h-[30px] rounded-[20px] pt-1">
                <i
                  className="fa-solid fa-briefcase"
                  style={{ color: "#fff", paddingTop: "3px", fontSize: "13px" }}
                ></i>
                <p className="font-normal text-white font-fontInter uppercase text-[13px]">Skills</p>
              </div>
            </div>


            <h1 className="text-white ml-[30rem] text-[50px] mt-10">Technologies I Use</h1>

            <div className="ml-[30rem] mt-10 w-[50%] h-auto bg-white rounded-[10px] p-4">
                <div className="grid grid-cols-2 lg:grid-cols-9 gap-5 sm:grid-cols-2 md:grid-cols-3">
                  <div className={`flex justify-center items-center ${style.iconContainer}`}>
                    <img src={java} className="w-20 h-20" title="java" />
                  </div>
                  <div className={`flex justify-center items-center ${style.iconContainer}`}>
                    <img src={react} className="w-16 h-16" title="react js" />
                  </div>
                  <div className={`flex justify-center items-center ${style.iconContainer}`}>
                    <img src={js} className="w-16 h-16" title="javascript"/>
                  </div>
                  <div className={`flex justify-center items-center ${style.iconContainer}`}>
                    <img src={vue} className="w-16 " title="vue js"/>
                  </div>
                  <div className={`flex justify-center items-center ${style.iconContainer}`}>
                    <img src={bootstrap} className="w-14 h-14" title="bootstrap"/>
                  </div>
                  <div className={`flex justify-center items-center ${style.iconContainer}`}>
                    <img src={apollo} className="w-16 h-16" title="apollo"/>
                  </div>
                  <div className={`flex justify-center items-center ${style.iconContainer}`}>
                    <img src={nodejs} className="w-16 h-16" title="node js"/>
                  </div>
                  <div className={`flex justify-center items-center ${style.iconContainer}`}>
                    <img src={redux} className="w-14 h-14" title="redux"/>
                  </div>
                   <div className={`flex justify-center items-center ${style.iconContainer}`}>
                    <img src={css} className="w-16 h-16" title="css"/>
                  </div>
                  <div className={`flex justify-center items-center ${style.iconContainer}`}>
                    <img src={html} className="w-16 h-16" title="html"/>
                  </div>
                  <div className={`flex justify-center items-center ${style.iconContainer}`}>
                    <img src={tsx} className="w-20 h-16" title="typescript"/>
                  </div>
                  <div className={`flex justify-center items-center ${style.iconContainer}`}>
                    <img src={junit} className="w-16 h-16" title="junit"/>
                  </div>
                  <div className={`flex justify-center items-center ${style.iconContainer}`}>
                    <img src={render} className="w-16 h-16" title="render"/>
                  </div>
                  <div className={`flex justify-center items-center ${style.iconContainer}`}>
                    <img src={pytest} className="w-16 h-16" title="pytest"/>
                  </div>
                  <div className={`flex justify-center items-center ${style.iconContainer}`}>
                    <img src={materialUi} className="w-16 h-16" title="material ui"/>
                  </div>
                  <div className={`flex justify-center items-center ${style.iconContainer}`}>
                    <img src={docker} className="w-16 h-16" title="docker"/>
                  </div>
                  <div className={`flex justify-center items-center ${style.iconContainer}`}>
                    <img src={git} className="w-16 h-16" title="git"/>
                  </div>
                  <div className={`flex justify-center items-center ${style.iconContainer}`}>
                    <img src={figma} className="w-16 h-16" title="figma"/>
                  </div>
                  <div className={`flex justify-center items-center ${style.iconContainer}`}>
                    <img src={jbpm} className="w-16 h-16" title="jbpm"/>
                  </div>
                  <div className={`flex justify-center items-center ${style.iconContainer}`}>
                    <img src={python} className="w-20 h-20" title="python"/>
                  </div>
                  <div className={`flex justify-center items-center ${style.iconContainer}`}>
                    <img src={next} className="w-14 h-14" title="next js"/>
                  </div>
                  <div className={`flex justify-center items-center ${style.iconContainer}`}>
                    <img src={reactNative} className="w-16 h-16" title="react native" />
                  </div>
                  <div className={`flex justify-center items-center ${style.iconContainer}`}>
                    <img src={springBoot} className="w-20 h-20" title="spring boot"/>
                  </div>
                  <div className={`flex justify-center items-center ${style.iconContainer}`}>
                    <img src={tailwindcss} className="w-20 h-20" title="tailwindcss" />
                  </div>
                  <div className={`flex justify-center items-center ${style.iconContainer}`}>
                    <img src={mongodb} className="w-16 h-16" title="mongodb"/>
                  </div>
                  <div className={`flex justify-center items-center ${style.iconContainer}`}>
                    <img src={pg} className="w-16 h-16" title="postgres"/>
                  </div>
                  <div className={`flex justify-center items-center ${style.iconContainer}`}>
                    <img src={mysql} className="w-16 h-14" title="mysql"/>
                  </div>
                  <div className={`flex justify-center items-center ${style.iconContainer}`}>
                    <img src={postman} className="w-16 h-16" title="postman"/>
                  </div>
                  <div className={`flex justify-center items-center ${style.iconContainer}`}>
                    <img src={linux} className="w-16 h-16" title="linux"/>
                  </div>
                  <div className={`flex justify-center items-center ${style.iconContainer}`}>
                    <img src={macos} className="w-16 h-14" title="macOs"/>
                  </div>
                  <div className={`flex justify-center items-center ${style.iconContainer}`}>
                    <img src={windows} className="w-16 h-14" title="windows"/>
                  </div>
                  <div className={`flex justify-center items-center ${style.iconContainer}`}>
                    <img src={go} className="w-[85px] h-20" title="go"/>
                  </div>
                  <div className={`flex justify-center items-center ${style.iconContainer}`}>
                    <img src={keycloak} className="w-16 h-16" title="keycloak" />
                  </div>
                  <div className={`flex justify-center items-center ${style.iconContainer}`}>
                    <img src={swagger} className="w-16 h-16" title="swagger" />
                  </div>
                  <div className={`flex justify-center items-center ${style.iconContainer}`}>
                    <img src={mockito} className="w-16 h-14" title="mockito"/>
                  </div>
                  <div className={`flex justify-center items-center ${style.iconContainer}`}>
                    <img src={flutter} className="w-16 h-14" title="flutter" />
                  </div>

                </div>
              </div>

        </div>
     
    )

}

export default Skills;