"use client"; // also must be a client component
import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/app.png"
          link="#"
          title="Mobile Chat Application"
          description="This app is built with React Native. React Native is very powerful as it can build cross-platform applications."
        />
        <ProjectCard
          src="/Barvella products.png"
          link="https://frontend-ecommerce-waax.onrender.com/"
          title="E-commerce Website"
          description="This website is built with the MERN stack (MongoDB, Express, React, Node.js). It is a powerful stack for building web applications."
        />
        <ProjectCard
          src="/text-airdrop.png"
          link="https://text-airdrop.onrender.com/"
          title="Web Chat Application"
          description="This web application is built with Next.js, MongoDB, Prisma, Express, and Node.js, making it a powerful set for building modern web apps."
        />
      </div>
    </div>
  );
};

export default Projects;
