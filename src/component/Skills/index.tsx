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





import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const Skills: React.FC = () => {
  const controls = useAnimation();
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, [controls]);

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, staggerChildren: 0.1 } },
  };

  return (
    <div ref={skillsRef} className="bg-[#343434] w-full h-full">
      <div className="flex ml-[30rem] pt-[10rem]">
        <div className="flex flex-row gap-2 justify-center border-gray-500 border w-[10rem] h-[30px] rounded-[20px] pt-1">
          <i
            className="fa-solid fa-briefcase"
            style={{ color: "#fff", paddingTop: "3px", fontSize: "13px" }}
          ></i>
          <p className="font-normal text-white font-fontInter uppercase text-[13px]">
            Skills
          </p>
        </div>
      </div>

      <h1 className="text-white ml-[30rem] text-[50px] mt-10">
        Technologies I Use
      </h1>

      <motion.div
        className="ml-[30rem] mt-10 w-[50%] h-auto bg-white rounded-[10px] p-4"
        initial="hidden"
        animate={controls}
        variants={skillVariants}
      >
         <div className="grid grid-cols-2 lg:grid-cols-9 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {[
            { src: java, title: "java" },
            { src: react, title: "react js" },
            { src: js, title: "javascript" },
            { src: vue, title: "vue js" },
            { src: bootstrap, title: "bootstrap" },
            { src: apollo, title: "apollo" },
            { src: nodejs, title: "node js" },
            { src: redux, title: "redux" },
            { src: css, title: "css" },
            { src: html, title: "html" },
            { src: tsx, title: "typescript" },
            { src: junit, title: "junit" },
            { src: render, title: "render" },
            { src: pytest, title: "pytest" },
            { src: materialUi, title: "material ui" },
            { src: docker, title: "docker" },
            { src: git, title: "git" },
            { src: figma, title: "figma" },
            { src: jbpm, title: "jbpm" },
            { src: python, title: "python" },
            { src: next, title: "next js" },
            { src: reactNative, title: "react native" },
            { src: springBoot, title: "spring boot" },
            { src: tailwindcss, title: "tailwindcss" },
            { src: mongodb, title: "mongodb" },
            { src: pg, title: "postgres" },
            { src: mysql, title: "mysql" },
            { src: postman, title: "postman" },
            { src: linux, title: "linux" },
            { src: macos, title: "macOs" },
            { src: windows, title: "windows" },
            { src: go, title: "go" },
            { src: keycloak, title: "keycloak" },
            { src: swagger, title: "swagger" },
            { src: mockito, title: "mockito" },
            { src: flutter, title: "flutter" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.2 }}
            >
              <img src={item.src} className="w-16 h-16" title={item.title} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;



